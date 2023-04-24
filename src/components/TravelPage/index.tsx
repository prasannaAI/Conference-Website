import React from "react";
import {it} from "node:test";

const TravelPage = () => {


    const data = [
        {
            id:1,
            place: "Kerala Kathakali Centre",
            description: "The Kerala Kathakali centre was founded in 1990 and aims to popularize the traditional art form of Kerala, discover new talents and train the existing performers with rigorous discipline and dedication. Kathakali is a combination of literature, painting, music, dance and acting and all the five forms culminate to this charming dance form done with grace and command.",
            location: "KB Jacob Rd, Fort Nagar, Fort Kochi, Kochi",
            src: "/assets/images/Places/Kathakali_.jpg",
            href: "https://www.google.com/maps/place/Kerala+Kathakali+Centre/@9.9640226,76.2407029,17z/data=!3m1!4b1!4m6!3m5!1s0x3b086d338b0a6e45:0x53e6d1d96e61d161!8m2!3d9.9640226!4d76.2428916!16s%2Fg%2F1tlqnf0f"
        },
        {
            id:2,
            place: "Willingdon Island",
            description: "The largest artificial island of India named after the Viceroy of India, Lord Willingdon, is a part of Kochi formed by filling in dredged soil around an already existing tiny island. The island takes pride in housing several landmark offices, especially of the Navy, Customs, Port Trust and fisheries department.",
            location: "3 km from Ernakulam Railway station.",
            src: "/assets/images/Places/Willingdon_Island_kochi.jpg",
            href: "https://www.google.com/maps/place/Willingdon+Island/@9.9478912,76.2586701,14z/data=!3m1!4b1!4m6!3m5!1s0x3b086d717e8a04af:0x38d861edb4c9c90a!8m2!3d9.9483095!4d76.2753761!16zL20vMDd4d3Q2"
        },
    ]


    return (
        <div className="py-20 bg-gray-50">
            <section className="px-8 py-24 mx-auto max-w-7xl">
                <div className="flex justify-between pb-8 mb-12 text-2xl font-extrabold leading-tight text-gray-900 border-b border-gray-200 md:text-4xl">
                <h2 className="">
                     Tourist Places</h2>
                    <div className=""> I ❤️ KOCHI </div>
                </div>
                <div className="w-full xl:w-4/6">
                    <div className="flex flex-col space-y-16">
                        {data.map((item, id) => (

                        <div key={item.id} className="grid grid-cols-1 gap-6 md:grid-cols-4">
                            <img src={item.src} className="object-cover w-full h-40 col-span-1 bg-center"
                                 alt="Kutty"
                                 loading="lazy"/>
                            <div className="col-span-1 md:col-span-3">
                                <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                                    <a href="#" className="text-gray-900 hover:text-purple-700">
                                        {item.place}
                                    </a>
                                </h2>
                                <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">{item.location}</p>
                                <p className="mb-3 text-sm font-normal text-gray-500">
                                    {item.description}
                                </p>
                                <a href={item.href} target="_blank" className="btn btn-light btn-sm">Read More</a>
                            </div>
                        </div>
                        ))}






                    </div>

                </div>
            </section>

        </div>
    );
}
export default TravelPage;