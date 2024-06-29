import { Api } from "@config/Api";
import { setCsrf } from "@features/csrf/CsrfSlice";

export interface CsrfTokenResponse {
    parameterName: string
    token: string
    headerName: string
}

export const csrfApi = Api.injectEndpoints({
    endpoints: (builder) => ({
        getToken: builder.query<CsrfTokenResponse, void>({
            query: () => ({
                url: "/csrf/token",
                method: "GET"
            }),
            onQueryStarted: async (arg, api) => {
                const { dispatch, queryFulfilled } = api;
                const { data } = await queryFulfilled;
                dispatch(setCsrf(data));
            },
        })
    }),
});

export const { useGetTokenQuery } = csrfApi