import React from 'react';
import { useFormContext } from 'react-hook-form';

const FormControl = ({ children, label, name }) => {
    const {
        formState: { errors },
    } = useFormContext();

    return (
        <div className="relative z-0 w-full group mb-2">
            {children}

            {label && (
                <label
                    htmlFor={name}
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    {label}
                </label>
            )}

            {typeof errors[name] !== 'undefined' && (
                <span className="text-red-400 text-sm italic">{errors[name].message}</span>
            )}
        </div>
    );
};

export default FormControl;
