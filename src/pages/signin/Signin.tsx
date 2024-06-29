import LoginIll from "@assets/login-ill.svg";
import AuthContentWrapper from "@components/wrapper/AuthContentWrapper";
import OneContentLayout from "@layout/OneContentLayout";



const Signin = () => {


    return (
        <OneContentLayout
            sideContent={
                <>
                    <h1>Welcome Back!</h1>
                    <LoginIll />
                </>
            }
            sideContentFirst >
            <AuthContentWrapper type="signin" />
        </OneContentLayout>
    )
}

export default Signin