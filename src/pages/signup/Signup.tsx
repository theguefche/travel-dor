import SignupIll from "@assets/signup-ill.svg"
import AuthContentWrapper from "@components/wrapper/AuthContentWrapper"
import OneContentLayout from "@layout/OneContentLayout"

const Signup = () => {
    return (
        <OneContentLayout
            sideContent={
                <>
                    <h1>Join to Our Platform with all time access and free </h1>
                    <SignupIll />
                </>
            }
            sideContentFirst={false} >
            <AuthContentWrapper type="signup" />
        </OneContentLayout>
    )
}

export default Signup