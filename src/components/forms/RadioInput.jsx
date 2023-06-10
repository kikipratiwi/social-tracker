import React from 'react';
import { useController, useFormContext } from 'react-hook-form';
import FormControl from './FormControl';

const RadioInput = (props) => {
    const { name, rules, options, ...rest } = props;

    const { control } = useFormContext();

    const { field } = useController({
        control,
        name,
        shouldUnregister: true,
        rules,
    });

    return (
        <FormControl name={name}>
            <fieldset className="flex flex-col space-y-4">
                <legend className="sr-only">{name}</legend>

                {options.map(({ value, label }, index) => (
                    <div key={'radio-' + index} className="flex items-center ">
                        <input
                            {...field}
                            {...rest}
                            value={value}
                            className="w-4 h-4 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                            type="radio"
                        />

                        <label
                            htmlFor={label}
                            className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            {label}
                        </label>
                    </div>
                ))}
            </fieldset>
        </FormControl>
    );
};

export default RadioInput;
