import React from 'react';

function RegistrationPriceTable() {

    const headerData = [
        {
            date: 'Date',
            first: 'Before 30th June',
            second: 'After 30th June ',
            third: 'Spot registration'
        },
    ];

    const data = [
        {
            title: 'Students',
            first: '4000 INR',
            second: '5000 INR ',
            third: '6000 INR'
        },
        {
            title: 'Indian delegates',
            first: '6000 INR',
            second: '7000 INR ',
            third: '8000 INR'
        },
        {
            title: 'SAARC country delegates',
            first: '80 USD',
            second: '100 USD',
            third: '110 USD'
        },
        {
            title: 'Other country delegates',
            first: '100 USD',
            second: '120 USD',
            third: '130 USD'
        },
        {
            title: 'ISRS members',
            first: '80 USD',
            second: '100 USD',
            third: '100 USD'
        },
    ];

    return (
        <div className="bg-background p-10">
            <div className="flex justify-center text-color pb-4 mb-4 text-lg uppercase ">
                Registration Fees
            </div>
            <div className="relative overflow-x-auto shadow-md rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    {headerData.map((data, i) => (
                        <thead key={i} className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>

                                <th scope="col" className="px-6 py-3">
                                    {data.date}
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    {data.first}
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    {data.second}
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    {data.third}
                                </th>
                            </tr>
                        </thead>
                        ))}
                    <tbody>
                        {data.map((data, i) => (
                            <tr key={i} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {data.title}
                                </th>
                                <td className="px-6 py-4">
                                    {data.first}
                                </td>
                                <td className="px-6 py-4">
                                    {data.second}
                                </td>
                                <td className="px-6 py-4">
                                    {data.third}
                                </td>

                            </tr>

                    ))}
                    </tbody>
                </table>
            </div>

            <div className="max-w-md mx-auto pt-8">
                <div className="bg-white shadow-md rounded-lg px-6 py-8">
                    <h2 className="text-lg font-semibold mb-6 uppercase">  Registration Information </h2>
                    <p className="mb-4">
                        Registration includes full program attendance, program dinners and lunches, and a welcome kit.
                    </p>
                    <p>
                        For hotel reservation support, please contact us at
                        {' '}
                        <a href="mailto:isrs2023@aims.amrita.edu" className="text-purple-600 font-medium">
                            isrs2023@aims.amrita.edu
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RegistrationPriceTable;