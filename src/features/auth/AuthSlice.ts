import { authApi } from '@features/auth/AuthService';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
    user: User | null
    isLoggedIn: boolean
}

export enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
}

enum Role {
    ADMIN,
    CLIENT,
    OWNER
}

export interface User {
    firstname: string
    lastname: string
    gender: Gender
    role: Role
}

const initialState: AuthState = {
    user: null,
    isLoggedIn: false
};

export const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        signIn: (state, action: PayloadAction<User>) => {
            const { payload } = action
            const user: User = {
                firstname: payload.firstname,
                gender: payload.gender,
                lastname: payload.lastname,
                role: payload.role
            }
            state.user = user
            state.isLoggedIn = true
        },
        signOut: (state) => {
            state.user = null
            state.isLoggedIn = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                authApi.endpoints.signin.matchFulfilled,
                (state, action) => {
                    AuthSlice.caseReducers.signIn(state, action);
                },
            )
        // .addMatcher(
        //     authApi.endpoints.signout.matchFulfilled,
        //     (state) => {
        //         AuthSlice.caseReducers.signOut(state);
        //     },
        // )
    },
});

export const { signIn, signOut } = AuthSlice.actions;

export default AuthSlice.reducer;