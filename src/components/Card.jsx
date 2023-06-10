import React from 'react';
import formatDate from '../utils/formatDate';

const NormalText = ({ style, children }) => {
    return <p className={`text-sm font-normal text-gray-400 ${style}`}>{children}</p>;
};

const Card = ({ name, place, birthDate, status }) => {
    return (
        <div className="flex flex-col space-y-4 w-72 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="w-full flex justify-between items-center">
                <div className="flex-grow">
                    <h6 className="mb-2 text-lg font-bold tracking-tight text-white">{name}</h6>
                    <NormalText>{place}</NormalText>
                    <NormalText>{formatDate(birthDate)}</NormalText>
                </div>

                <h1 className="text-7xl">🤓</h1>
            </div>

            <hr />

            <div className="w-full flex justify-between">
                <NormalText>Status</NormalText>
                <NormalText style={`${status === 'Online' && 'text-green-500'}`}>
                    {status}
                </NormalText>
            </div>
        </div>
    );
};

export default Card;
