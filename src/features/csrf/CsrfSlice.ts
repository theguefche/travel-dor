import { CsrfTokenResponse } from '@features/csrf/CsrfService';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'


export interface CsrfId {
    headerName: string
    token: string
}

const initialState: CsrfId = {
    headerName: "",
    token: ""
}

const CsrfSlice = createSlice({
    name: "Csrf",
    initialState,
    reducers: {
        setCsrf: (state, action: PayloadAction<CsrfTokenResponse>) => {
            const { headerName, token } = action.payload
            state.headerName = headerName
            state.token = token
        },
    }
});

export const { setCsrf } = CsrfSlice.actions

export default CsrfSlice.reducer