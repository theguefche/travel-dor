import { useGetTokenQuery } from '@features/csrf/CsrfService';
import React from 'react';

interface FormWrapperProps {
    children: React.ReactNode;
}

const FormWrapper = ({ children }: FormWrapperProps) => {
    useGetTokenQuery();

    return (
        <>
            {children}
        </>
    );
};

export default FormWrapper;
