import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Card from './components/Card';
import DateInput from './components/forms/DateInput';
import Form from './components/forms/Form';
import RadioInput from './components/forms/RadioInput';
import TextInput from './components/forms/TextInput';

const App = () => {
    const [users, setUsers] = useState([]);
    const [isHide, setIsHide] = useState(false);

    const form = useForm();
    const { handleSubmit, reset } = form;

    const saveData = async () => {
        const valid = await form.trigger();

        if (!valid) {
            return;
        }

        const values = form.getValues();

        setUsers((prev) => {
            return [...prev, values];
        });

        reset({ name: '', birthDate: '', place: '', status: undefined });
    };

    return (
        <div className="h-screen w-screen bg-slate-900 p-10 flex flex-col items-center space-y-4 overflow-auto">
            <h1 className="text-3xl font-bold text-white text-center">Social Tracker</h1>

            <Form
                form={form}
                onSubmit={handleSubmit(saveData)}
                className="flex flex-col w-full max-w-xl min-w-fit space-y-5"
            >
                <TextInput
                    name="name"
                    label="Name"
                    rules={{
                        required: 'Cannot be empty',
                        minLength: { value: 8, message: 'Must be at least 8 characters' },
                    }}
                    placeholder=" "
                />

                <DateInput
                    name="birthDate"
                    label="Date of Birth"
                    rules={{
                        required: 'Cannot be empty',
                    }}
                    placeholder=" "
                />

                <TextInput name="place" label="Place" placeholder=" " />

                <RadioInput
                    name="status"
                    options={[
                        { value: 'Online', label: 'Online' },
                        { value: 'Offline', label: 'Offline' },
                    ]}
                    rules={{
                        required: 'Cannot be empty',
                    }}
                />

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </Form>

            <div className="pt-4">
                {users.length > 0 ? (
                    <>
                        <div className="w-full flex justify-center pb-1">
                            <button
                                type="button"
                                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700"
                                onClick={() => {
                                    setIsHide(!isHide);
                                }}
                            >
                                {isHide ? '🙉 Show Data ' : '🙈 Hide Data'}
                            </button>

                            <button
                                onClick={() => {
                                    setUsers([]);
                                }}
                                type="button"
                                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700"
                            >
                                🗑️ Clean Data
                            </button>
                        </div>

                        {!isHide && (
                            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-content-center items-center justify-center">
                                {users.map((user, index) => {
                                    return <Card key={'user' + index} {...user} />;
                                })}
                            </div>
                        )}
                    </>
                ) : (
                    <p className="text-white italic">No Data</p>
                )}
            </div>
        </div>
    );
};

export default App;
