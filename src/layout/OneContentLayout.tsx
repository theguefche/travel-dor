import { ReactNode } from 'react'

type OneContentLayoutProps = {
    children: ReactNode
    sideContent: ReactNode
    sideContentFirst: boolean
}


const OneContentLayout = ({ children, sideContent, sideContentFirst = false }: OneContentLayoutProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-5">
            <div className={`hidden md:flex flex-col gap-5 justify-center items-center col-span-3 p-20 h-screen prose m-auto ${sideContentFirst ? "order-1" : "order-2"}`}>
                {sideContent}
            </div>
            <div className="col-span-2 flex items-center justify-center prose bg-element my-20 sm:my-0">
                <div className="max-w-md w-full p-6">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default OneContentLayout;
