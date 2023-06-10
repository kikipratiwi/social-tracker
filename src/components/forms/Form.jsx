import React from 'react';
import { FormProvider } from 'react-hook-form';

const Form = ({ children, form, className, ...rest }) => {
    return (
        <FormProvider {...form}>
            <form {...rest} onChange={() => form.trigger()} className={className}>
                {children}
            </form>
        </FormProvider>
    );
};

export default Form;
