import React from 'react';
import { useController, useFormContext } from 'react-hook-form';
import FormControl from './FormControl';

const TextInput = (props) => {
    const { name, rules, label, ...rest } = props;

    const { control } = useFormContext();

    const { field } = useController({
        control,
        name,
        shouldUnregister: true,
        rules,
    });

    return (
        <FormControl label={label} name={name}>
            <input
                {...field}
                {...rest}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                type="text"
            />
        </FormControl>
    );
};

export default TextInput;
