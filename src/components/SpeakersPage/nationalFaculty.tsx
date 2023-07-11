import React from 'react';

function Faculty() {
    
    const data = [
        {
            id: 3,
            name: 'Prof. Aditya Gupta ',
            bio: 'President',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Gurugram, India',
        },
        {
            id: 4,
            name: 'Prof Ayyadurai Rethnathankom  ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Kochi, India',
        },
        {
            id: 5,
            name: 'Dr. Ashok Bhanage   ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Pune, India',
        },
        {
            id: 6,
            name: 'Dr. Amit Jain  ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Meerut, India',
        },
        {
            id: 7,
            name: 'Dr. Anusheel Munshi  ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Delhi, India',
        },
        {
            id: 8,
            name: 'Dr Amitabh Roy   ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Kolkata, India',
        },
        {
            id: 9,
            name: 'Dr. Ashish Pathak  ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Chandigarh, India',
        },
        {
            id: 10,
            name: 'Prof Adesh Srivastava   ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Bhopal, India',
        },
        {
            id: 11,
            name: 'Prof Appu Thomas ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Kochi, India',
        },
        {
            id: 12,
            name: 'Prof Bhaskar Viswanathan  ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Delhi, India',
        },
        {
            id: 13,
            name: 'Dr. Bhusan Zade ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Pune, India',
        },
        {
            id: 14,
            name: 'Prof CS Madhu  ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Kochi, India',
        },
        {
            id: 16,
            name: 'Prof Dwarakanath Srinivas ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Bengaluru, India',
        },
        {
            id: 17,
            name: 'Prof Deepak Aggarwal  ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Delhi, India',
        },
        {
            id: 18,
            name: 'Prof Dilip Panikar ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Kochi, India',
        },
        {
            id: 19,
            name: 'Dr. Francis James  ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Trivandam, India',
        },
        {
            id: 20,
            name: 'Prof Ginil Kumar Pooleri  ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Kochi, India',
        },
        {
            id: 21,
            name: 'Dr. HV Easwer ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Trivandrum, India',
        },
        {
            id: 22,
            name: 'Prof Haresh K.P ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Delhi, India',
        },
        {
            id: 23,
            name: 'Prof Krish Sridhar ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Chennai, India',
        },
        {
            id: 24,
            name: 'Prof Kanwaljeet Garg ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Delhi, India',
        },
        {
            id: 25,
            name: 'Dr Kaustav Talapatra ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Mumbai, India',
        },
        {
            id: 26,
            name: 'Dr Kinjal Jani ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Ahmedabad, India',
        },
        {
            id: 27,
            name: 'Prof KL Jayakumar ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Nagerkoil, India',
        },
        {
            id: 28,
            name: 'Dr Makuny Dinesh ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Kozhikode, India',
        },
        {
            id: 29,
            name: 'Dr. Maheep Singh Gaur ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Meerut, India',
        },
        {
            id: 30,
            name: 'Prof Milind Sankhe ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Mumbai, India',
        },
        {
            id: 31,
            name: 'Dr. Maria Das ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Lucknow, India',
        },
        {
            id: 32,
            name: 'Prof Manmohan Singh ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Delhi, India',
        },
        {
            id: 33,
            name: 'Prof Manjul Tripathi ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Chandigarh, India',
        },
        {
            id: 34,
            name: 'Prof Nishant Sadashiva ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Bengaluru, India',
        },
        {
            id: 35,
            name: 'Prof Parsuraman Ayiramuthu ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Kochi, India',
        },
        {
            id: 37,
            name: 'Dr Rajesh Vashistha ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Bathinda, India',
        },
        {
            id: 38,
            name: 'Prof Rajesh Balakrishnan ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Vellore, India',
        },
        {
            id: 39,
            name: 'Dr. Rajesh Kinhikar ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Mumbai, India',
        },
        {
            id: 40,
            name: 'Dr. Ramesh S Bilimagga ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Bengaluru, India',
        },
        {
            id: 41,
            name: 'Prof Rahul Krishnamurthy ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Mumbai, India',
        },
        {
            id: 42,
            name: 'Prof Reena Engineer ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Mumbai, India',
        },
        {
            id: 43,
            name: 'Prof Sajesh Menon ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Kochi, India',
        },
        {
            id: 44,
            name: 'Dr. Shankar Vangipuram ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Chennai, India',
        },
        {
            id: 45,
            name: 'Dr. Sridhar Papaiah Susheela',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Bengaluru, India',
        },
        {
            id: 46,
            name: 'Dr. Sandip Vaishya ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Gurugram, India',
        },
        {
            id: 47,
            name: 'Dr. Srinivas Chilukuri ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Chennai, India',
        },
        {
            id: 51,
            name: 'Dr. Shirley Lewis ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Manipal, India',
        },
        {
            id: 49,
            name: 'Prof Suman Bhaskar ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Delhi, India',
        },
        {
            id: 50,
            name: 'Prof Subhash Gupta ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Delhi, India',
        },
        {
            id: 52,
            name: 'Prof Tejpal Gupta ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Mumbai, India',
        },
        {
            id: 53,
            name: 'Dr. Tejinder Kataria ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Delhi, India',
        },
        {
            id: 54,
            name: 'Dr. Tejpal Gupta ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Mumbai, India',
        },
        {
            id: 55,
            name: 'Dr. Tanweer Shahid ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Kolkata, India',
        },
        {
            id: 56,
            name: 'Dr. Uday Krishna  ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Chennai, India',
        },
        {
            id: 57,
            name: 'Dr. Venkatesan Srinivasan ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Chennai, India',
        },
        {
            id: 58,
            name: 'Prof Vedantam Rajshekhar ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Vellore, India',
        },
        {
            id: 59,
            name: 'Dr. Vineeta Goel ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Delhi, India',
        },
        {
            id: 60,
            name: 'Dr. Vellaiyan Subramani ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Delhi, India',
        },
        {
            id: 61,
            name: 'Prof Vedang Murthy ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Mumbai, India',
        },
        {
            id: 62,
            name: 'Prof VP Singh ',
            image: '/assets/faculty/Male_Avatar.jpg',
            country: 'Delhi, India',
        },
    ];

    return (
        <div className="bg-white pb-20 pt-4">
            <section className="py-8 px-6  body-font">
                <div className="container pt-8 mx-auto">
                    <div className="text-4xl font-bold text-gray-500/50 mb-8"> National Faculty </div>
                    <div className="grid lg:grid-cols-2 gap-8 mt-4 ">
                        {data.map((data, i) => (
                            <div key={i}>
                                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                    <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={data.image} />
                                    <div className="flex-grow sm:pl-4 mr-4">
                                        <h2 className="title-font font-medium text-lg text-gray-900">{data.name}</h2>
                                        {data.bio && (
                                            <p className="text-gray-800">
                                                {data.bio}
                                            </p>
                                        )}
                                        <h3 className="text-gray-500 mb-3">{data.country}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}



export default Faculty;