import PasswordInput from "@components/input/PasswordInput";
import ErrorLabel from "@components/label/ErrorLabel";
import FormWrapper from "@components/wrapper/FormWrapper";
import { useSigninMutation } from "@features/auth/AuthService";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Checkbox, Input } from "@nextui-org/react";
import { useFormik } from 'formik';
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';

export interface SigninRequest {
    email: string;
    password: string;
}

const SigninForm = () => {


    const [signin, { isLoading }] = useSigninMutation();
    const navigate = useNavigate()

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    });

    const handleSingnIn = async (values: SigninRequest) => {

        const response = await signin({ email: values.email, password: values.password }).unwrap().then(() => navigate("/book", { replace: true }));
        console.log('User signed in:', response);

    };
    const { handleBlur, handleChange, handleSubmit, values, touched, errors } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: handleSingnIn,
    });


    return (
        <FormWrapper>
            <form onSubmit={handleSubmit} className="space-y-3" >
                <section>
                    <Input id="email" color="primary" value={values.email} onBlur={handleBlur} onChange={handleChange} type="email" label="Email" name="email" variant="bordered" autoComplete="email" />
                    <ErrorLabel touched={touched.email} error={errors.email} />
                </section>
                <section>
                    <PasswordInput id="password" color="primary" value={values.password} onBlur={handleBlur} onChange={handleChange} label="Password" name="password" variant="bordered" />
                    <ErrorLabel touched={touched.password} error={errors.password} />
                </section>
                <section className="flex flex-wrap justify-between">
                    <Checkbox>Remember Me !</Checkbox>
                    <Link to={"/forget-password"} className="text-accent no-underline hover:underline">
                        Forgot Password ?
                    </Link>
                </section>
                <Button isLoading={isLoading} type="submit" className="w-full" endContent={<Icon icon="mdi:login" fontSize={20} />} color="primary">Sign In</Button>

            </form>
        </FormWrapper>
    )
}

export default SigninForm