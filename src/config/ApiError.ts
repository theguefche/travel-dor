import type { Middleware, MiddlewareAPI } from '@reduxjs/toolkit';
import { isRejectedWithValue } from '@reduxjs/toolkit';

export interface ApiError {
    cause: string;
    message: string;
    path: string;
    status: string;
    trace: string;
    // Add more fields as needed from your error response
}

export const ApiErrorHandler: Middleware =
    (api: MiddlewareAPI) => (next) => (action) => {
        
        if (isRejectedWithValue(action)) {
            const payload : any = action.payload    
            const error : ApiError = payload.data as ApiError;
            
            const errorMessage = error.message || 'Something Went Wrong!';
            alert(errorMessage);
        }

        return next(action);
    };
