import PasswordInput from '@components/input/PasswordInput';
import ErrorLabel from '@components/label/ErrorLabel';
import FormWrapper from '@components/wrapper/FormWrapper';
import { useSignUpMutation } from '@features/auth/AuthService';
import { Gender } from '@features/auth/AuthSlice';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Button, Input, Select, SelectItem } from '@nextui-org/react';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

export interface SignupRequest {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    gender: Gender | undefined;
    confirmPassword?: string;
}




const SignupForm = () => {
    const [signup, { isLoading }] = useSignUpMutation();
    const [currentStep, setCurrentStep] = useState(1); // State to manage current step

    const validationSchemaStep1 = Yup.object().shape({
        firstname: Yup.string()
            .min(2, 'First Name must be minimum 2')
            .max(100, 'First Name must not be more than 100 characters')
            .required('First Name is required'),
        lastname: Yup.string()
            .min(2, 'Last Name must be minimum 2')
            .max(100, 'Last Name must not be more than 100 characters')
            .required('Last Name is required'),
        gender: Yup.mixed<Gender>().oneOf(Object.values(Gender)).required('Gender is required'),
    });

    const validationSchemaStep2 = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    const handleSignup = async (values: SignupRequest) => {
        const response = await signup({
            email: values.email,
            password: values.password,
            firstname: values.firstname,
            lastname: values.lastname,
            gender: values.gender,
        }).unwrap();
        console.log(response);
    };

    const { handleBlur, handleChange, handleSubmit, values, touched, errors, isValid, setTouched } = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirmPassword: '',
            gender: undefined,
        },
        isInitialValid: false,

        validationSchema: currentStep === 1 ? validationSchemaStep1 : validationSchemaStep2,
        onSubmit: handleSignup,
    });

    const nextStep = () => {
        if (isValid) {
            setCurrentStep(currentStep + 1);
        }
        else {
            setTouched({
                firstname: true,
                lastname: true,
                gender: true,
            });
        }

    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };


    const renderStep = () => {

        switch (currentStep) {

            case 1:
                return (
                    <>

                        <section>
                            <Input
                                id="firstName"
                                color="default"
                                value={values.firstname}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type="text"
                                label="First Name"
                                name="firstname"
                                variant="bordered"
                                isInvalid={touched.firstname && errors.firstname != undefined}
                            />
                            <ErrorLabel touched={touched.firstname} error={errors.firstname} />
                        </section>
                        <section>
                            <Input
                                id="lastName"
                                color="default"
                                value={values.lastname}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type="text"
                                label="Last Name"
                                name="lastname"
                                variant="bordered"
                                isInvalid={touched.lastname && errors.lastname != undefined}

                            />
                            <ErrorLabel touched={touched.lastname} error={errors.lastname} />
                        </section>
                        <section>
                            <Select
                                selectionMode="single"
                                id="gender"
                                name="gender"
                                color="default"
                                variant="bordered"
                                label="Gender"
                                value={values.gender}
                                selectedKeys={new Set([values.gender]) as any}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                onSelectionChange={(s) => console.log(s)}
                                isInvalid={touched.gender && errors.gender != undefined}
                            >
                                {Object.values(Gender).map((gender) => (
                                    <SelectItem key={gender} >{gender}</SelectItem>
                                ))}
                            </Select>
                            <ErrorLabel touched={touched.gender} error={errors.gender} />
                        </section>
                        <Button onClick={nextStep} className="w-full" color="primary" endContent={<Icon icon="iconamoon:arrow-right-2-bold" fontSize={25} />}>
                            Next
                        </Button>
                    </>
                );
            case 2:
                return (
                    <>
                        <section>
                            <Input
                                id="email"
                                color="default"
                                value={values.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type="email"
                                label="Email"
                                name="email"
                                variant="bordered"
                                isInvalid={touched.email && errors.email != undefined}
                            />
                            <ErrorLabel touched={touched.email} error={errors.email} />
                        </section>
                        <section>
                            <PasswordInput
                                id="password"
                                color="default"
                                value={values.password}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="Password"
                                name="password"
                                variant="bordered"
                                isInvalid={touched.password && errors.password != undefined}
                            />
                            <ErrorLabel touched={touched.password} error={errors.password} />
                        </section>
                        <section>
                            <Input
                                id="confirmPassword"
                                color="default"
                                type="password"
                                value={values.confirmPassword}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="Confirm Password"
                                name="confirmPassword"
                                variant="bordered"
                                isInvalid={touched.confirmPassword && errors.confirmPassword != undefined}
                            />
                            <ErrorLabel touched={touched.confirmPassword} error={errors.confirmPassword} />
                        </section>
                        <section className='space-y-1'>
                            <Button onClick={prevStep} className="w-full" color="primary" variant='faded' startContent={<Icon icon="iconamoon:arrow-right-2-bold" className='rotate-180' fontSize={25} />}>
                                Back
                            </Button>
                            <Button isLoading={isLoading} onClick={()=> handleSubmit()} type="submit" className="w-full" endContent={<Icon icon="mdi:login" fontSize={20} />} color="primary">Sign Up</Button>
                        </section>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <FormWrapper>
            <form className="space-y-3">
                {renderStep()}
            </form>
        </FormWrapper>
    );
};

export default SignupForm;
