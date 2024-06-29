import { ReactNode } from 'react'

type OathButtonsWrapperProps = {
    children: ReactNode
}

const OauthButtonsWrapper = ({ children }: OathButtonsWrapperProps) => {
    return (
        <div className="mt-4 gap-1 flex flex-col lg:flex-row ">
            {children}
        </div>
    )
}

export default OauthButtonsWrapper