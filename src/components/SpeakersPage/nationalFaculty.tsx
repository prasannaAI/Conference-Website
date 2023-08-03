import React from 'react';

function Faculty() {
    
    const data = [
        {
            id: 3,
            name: 'Prof. Aditya Gupta ',
            bio: 'President',
            image: '/assets/nationalFaculty/aditya.jpg',
            country: 'Gurugram, India',
        },
        {
            id: 4,
            name: 'Prof Ayyadurai Rethnathankom  ',
            image: '/assets/nationalFaculty/ayyadurai.jpg',
            country: 'Kochi, India',
        },
        {
            id: 5,
            name: 'Dr. Ashok Bhanage   ',
            image: '/assets/nationalFaculty/ashok.jpg',
            country: 'Pune, India',
        },
        {
            id: 6,
            name: 'Dr. Amit Jain  ',
            image: '/assets/nationalFaculty/amit.jpg',
            country: 'Meerut, India',
        },
        {
            id: 7,
            name: 'Dr. Anusheel Munshi  ',
            image: '/assets/nationalFaculty/anusheel.jpg',
            country: 'Delhi, India',
        },
        {
            id: 8,
            name: 'Dr Amitabh Roy   ',
            image: '/assets/nationalFaculty/Amitabh Roy.jpeg',
            country: 'Kolkata, India',
        },
        {
            id: 9,
            name: 'Dr. Ashish Pathak  ',
            image: '/assets/nationalFaculty/ashish.jpg',
            country: 'Chandigarh, India',
        },
        {
            id: 10,
            name: 'Prof Adesh Srivastava   ',
            image: '/assets/nationalFaculty/AdeshSrivastava.jpeg',
            country: 'Bhopal, India',
        },
        {
            id: 11,
            name: 'Prof Appu Thomas ',
            image: '/assets/nationalFaculty/appu.jpg',
            country: 'Kochi, India',
        },
        {
            id: 12,
            name: 'Prof Bhaskar Viswanathan  ',
            image: '/assets/nationalFaculty/bhaskar.jpg',
            country: 'Delhi, India',
        },
        {
            id: 13,
            name: 'Dr. Bhusan Zade ',
            image: '/assets/nationalFaculty/bhooshan.jpg',
            country: 'Pune, India',
        },
        {
            id: 14,
            name: 'Prof CS Madhu  ',
            image: '/assets/nationalFaculty/madhu.jpg',
            country: 'Kochi, India',
        },
        {
            id: 16,
            name: 'Prof Dwarakanath Srinivas ',
            image: '/assets/nationalFaculty/dwarakanth.jpg',
            country: 'Bengaluru, India',
        },
        {
            id: 18,
            name: 'Prof Dilip Panikar ',
            image: '/assets/nationalFaculty/Dilip Panikar.jpeg',
            country: 'Kochi, India',
        },
        {
            id: 19,
            name: 'Dr. Francis James  ',
            image: '/assets/nationalFaculty/francis.jpg',
            country: 'Trivandam, India',
        },
        {
            id: 20,
            name: 'Prof Ginil Kumar Pooleri  ',
            image: '/assets/nationalFaculty/ginil.jpg',
            country: 'Kochi, India',
        },
        {
            id: 21,
            name: 'Dr. HV Easwer ',
            image: '/assets/nationalFaculty/HV Easwer.jpeg',
            country: 'Trivandrum, India',
        },
        {
            id: 22,
            name: 'Prof Haresh K.P ',
            image: '/assets/nationalFaculty/hareshcrop1.jpg',
            country: 'Delhi, India',
        },
        {
            id: 23,
            name: 'Prof Krish Sridhar ',
            image: '/assets/nationalFaculty/krish.jpg',
            country: 'Chennai, India',
        },
        {
            id: 24,
            name: 'Prof Kanwaljeet Garg ',
            image: '/assets/nationalFaculty/KanwaljeetGarg.jpeg',
            country: 'Delhi, India',
        },
        {
            id: 25,
            name: 'Dr Kaustav Talapatra ',
            image: '/assets/nationalFaculty/kaustav.jpg',
            country: 'Mumbai, India',
        },
        {
            id: 26,
            name: 'Dr Kinjal Jani ',
            image: '/assets/nationalFaculty/kinjal.jpg',
            country: 'Ahmedabad, India',
        },
        {
            id: 27,
            name: 'Prof KL Jayakumar ',
            image: '/assets/nationalFaculty/jayakumar.jpg',
            country: 'Nagerkoil, India',
        },
        {
            id: 28,
            name: 'Dr Makuny Dinesh ',
            image: '/assets/nationalFaculty/makuny.jpg',
            country: 'Kozhikode, India',
        },
        {
            id: 29,
            name: 'Dr. Maheep Singh Gaur ',
            image: '/assets/nationalFaculty/maheep.jpg',
            country: 'Meerut, India',
        },
        {
            id: 31,
            name: 'Dr. Maria Das ',
            image: '/assets/nationalFaculty/maria das.jpg',
            country: 'Lucknow, India',
        },
        {
            id: 32,
            name: 'Prof Manmohan Singh ',
            image: '/assets/nationalFaculty/manmohan.jpg',
            country: 'Delhi, India',
        },
        {
            id: 33,
            name: 'Prof Manjul Tripathi ',
            image: '/assets/nationalFaculty/manjul.jpg',
            country: 'Chandigarh, India',
        },
        {
            id: 34,
            name: 'Prof Nishant Sadashiva ',
            image: '/assets/nationalFaculty/nishant.jpg',
            country: 'Bengaluru, India',
        },
        {
            id: 35,
            name: 'Prof Parsuraman Ayiramuthu ',
            image: '/assets/nationalFaculty/parasuraman.jpg',
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
            image: '/assets/nationalFaculty/Rajesh_Balakrishnan.jpg',
            country: 'Vellore, India',
        },
        {
            id: 39,
            name: 'Dr. Rajesh Kinhikar ',
            image: '/assets/nationalFaculty/Rajesh Kinhikar.jpeg',
            country: 'Mumbai, India',
        },
        {
            id: 40,
            name: 'Dr. Ramesh S Bilimagga ',
            image: '/assets/nationalFaculty/Ramesh Bilimagga.jpeg',
            country: 'Bengaluru, India',
        },
        {
            id: 41,
            name: 'Prof Rahul Krishnatry ',
            image: '/assets/nationalFaculty/rahul.jpg',
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
            image: '/assets/nationalFaculty/shankar.jpg',
            country: 'Chennai, India',
        },
        {
            id: 45,
            name: 'Dr. Sridhar Papaiah Susheela',
            image: '/assets/nationalFaculty/sridhar.jpg',
            country: 'Bengaluru, India',
        },
        {
            id: 47,
            name: 'Dr. Srinivas Chilukuri ',
            image: '/assets/nationalFaculty/srinivas.jpg',
            country: 'Chennai, India',
        },
        {
            id: 51,
            name: 'Dr. Shirley Lewis ',
            image: '/assets/nationalFaculty/shirley.jpg',
            country: 'Manipal, India',
        },
        {
            id: 49,
            name: 'Prof Suman Bhaskar ',
            image: '/assets/nationalFaculty/suman.jpg',
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
            image: '/assets/nationalFaculty/tejpal.jpg',
            country: 'Mumbai, India',
        },
        {
            id: 53,
            name: 'Dr. Tejinder Kataria ',
            image: '/assets/nationalFaculty/tejinder.jpg',
            country: 'Delhi, India',
        },
        {
            id: 55,
            name: 'Dr. Tanweer Shahid ',
            image: '/assets/nationalFaculty/tanveer.jpg',
            country: 'Kolkata, India',
        },
        {
            id: 56,
            name: 'Dr. Uday Krishna  ',
            image: '/assets/nationalFaculty/uday.jpg',
            country: 'Chennai, India',
        },
        {
            id: 57,
            name: 'Dr. Venkatesan Srinivasan ',
            image: '/assets/nationalFaculty/venkateshan.jpg',
            country: 'Chennai, India',
        },
        {
            id: 58,
            name: 'Prof Vedantam Rajshekhar ',
            image: '/assets/nationalFaculty/vedantam.jpg',
            country: 'Vellore, India',
        },
        {
            id: 59,
            name: 'Dr. Vineeta Goel ',
            image: '/assets/nationalFaculty/vineeta.jpg',
            country: 'Delhi, India',
        },
        {
            id: 60,
            name: 'Dr. Vellaiyan Subramani ',
            image: '/assets/nationalFaculty/vellaiyan.jpg',
            country: 'Delhi, India',
        },
        {
            id: 61,
            name: 'Prof Vedang Murthy ',
            image: '/assets/nationalFaculty/vedang.jpg',
            country: 'Mumbai, India',
        },
        {
            id: 62,
            name: 'Prof VP Singh ',
            image: '/assets/nationalFaculty/vpsingh.jpg',
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
                                    <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-top sm:mb-0 mb-4" src={data.image} />
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