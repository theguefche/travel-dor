import Logo from '@components/brand/logo/Logo';
import OauthButton from '@components/button/OauthButton';
import SigninForm from '@components/form/SigninForm';
import SignupForm from '@components/form/SignupForm'; // Assuming you have a SignupForm component
import OauthButtonsWrapper from '@components/wrapper/OauthButtonsWrapper';
import { Divider } from '@nextui-org/react';
import { Link } from 'react-router-dom';

type AuthContentWrapper = {
    type: "signup" | "signin"
}

const AuthContentWrapper = ({ type }: AuthContentWrapper) => {
    return (
        <>
            <section className="flex justify-center text-center mr-1">
                <Logo />
            </section>
            <Divider className="mt-0" />
            <h1 className="text-center">{type === 'signup' ? 'Sign Up' : 'Sign In'}</h1>
            <h4 className="mb-6 text-center block sm:hidden">{type === 'signup' ? 'Join Our Platform with all-time access and free' : 'Welcome Back!'}</h4>

            <OauthButtonsWrapper>
                <OauthButton icon={"logos:google-icon"} link={"/go"} oauth={"Google"} log={type === 'signup' ? 'up' : 'in'} />
                <OauthButton icon={"logos:facebook"} link={"/fb"} oauth={"Facebook"} log={type === 'signup' ? 'up' : 'in'} />
            </OauthButtonsWrapper>

            <div className="mt-4 text-medium text-center">
                <p>Or With Email</p>
            </div>
            {type === 'signup' ? <SignupForm /> : <SigninForm />}

            <div className="mt-4 text-sm text-center">
                <p>{type === 'signup' ? 'Already have an account?' : "Don't have an account?"}
                    <Link to={type === 'signup' ? '/sign-in' : '/sign-up'} className="text-accent no-underline hover:underline pl-2">
                        {type === 'signup' ? 'Sign In Here' : 'Sign Up Here'}
                    </Link>
                </p>
            </div>
        </>
    );
};

export default AuthContentWrapper;
