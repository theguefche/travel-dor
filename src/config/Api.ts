import { RootState } from '@app-store';
import { ApiError } from '@config/ApiError';
import { CsrfTokenResponse } from '@features/csrf/CsrfService';
import { setCsrf } from '@features/csrf/CsrfSlice';
import { FetchArgs, FetchBaseQueryError, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';


const API_BASE: string = "http://localhost:8080/api/v1";

export interface ApiMessage {
    message: string
}

const baseQuery = fetchBaseQuery({
    baseUrl: API_BASE,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const { token, headerName } = (getState() as RootState).csrf
        if (token) {
            headers.set(headerName, token)
        }
        return headers
    },
})

const mutex = new Mutex()

export const AppBaseQuery: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {


    await mutex.waitForUnlock()
    let result = await baseQuery(args, api, extraOptions)

    const errorData = result.error?.data as ApiError


    if (result.error && result.error.status === 401 && errorData.cause.includes("Invalid CSRF Token")) {
        console.log("csrf error");

        if (!mutex.isLocked()) {
            const release = await mutex.acquire()

            try {
                const getCsrf = await baseQuery(
                    '/csrf/token',
                    api,
                    extraOptions
                )
                api.dispatch(setCsrf(getCsrf.data as CsrfTokenResponse))
                result = await baseQuery(args, api, extraOptions)


            } catch (error) {

            }
            finally {
                release()
            }

        }


    } else if (result.error && result.error.status === 401 && errorData.path.includes("auth")) {
        if (!mutex.isLocked()) {
            const release = await mutex.acquire()
            try {
                console.log("refreshing ....");
                const refreshResult = await baseQuery(
                    '/auth/refreshtoken',
                    api,
                    extraOptions
                )

                console.log(refreshResult);

                if (refreshResult.data) {
                    // api.dispatch(tokenReceived(refreshResult.data))
                    // retry the initial query

                    result = await baseQuery(args, api, extraOptions)
                    console.log(refreshResult.data);

                } else {
                    console.error("Refresh Failed Sign out");

                    // api.dispatch(loggedOut())
                }
            } finally {
                // release must be called once the mutex should be released again.
                release()
            }
        } else {
            // wait until the mutex is available without locking it
            await mutex.waitForUnlock()
            result = await baseQuery(args, api, extraOptions)
        }
    }
    return result
}

export const Api = createApi({
    reducerPath: "api",
    baseQuery: AppBaseQuery,
    endpoints: (build) => ({
        // injecting in features
    }),
})





