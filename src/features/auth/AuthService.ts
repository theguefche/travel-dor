import { SigninRequest } from '@components/form/SigninForm';
import { SignupRequest } from '@components/form/SignupForm';
import { Api, ApiMessage } from '@config/Api';
import { User } from '@features/auth/AuthSlice';



export const authApi = Api.injectEndpoints({
    endpoints: (builder) => ({
        signin: builder.mutation<User, SigninRequest>({
            query: (credentials) => ({
                url: '/auth/signin',
                method: 'POST',
                body: credentials,
            }),
        }),
        signUp: builder.mutation<ApiMessage, SignupRequest>({
            query: (payload) => ({
                url: '/auth/signup',
                method: "POST",
                body: payload
            })
        }),
        signout: builder.mutation<ApiMessage, void>({
            query: () => ({
                url: '/auth/signout',
                method: 'POST',
            }),
        }),
        // refreshToken: builder.mutation<ApiMessage, void>({
        //     query: () => ({
        //         url: "/auth/refreshToken",
        //         method: "GET"
        //     })
        // })
    }),
});

export const { useSigninMutation, useSignoutMutation, useSignUpMutation } = authApi;
