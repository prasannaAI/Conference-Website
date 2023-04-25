import React from "react";
import {it} from "node:test";

const TravelPage = () => {


    const data = [
        {
            id: 1,
            place: "Kerala Kathakali Centre",
            description: "The Kerala Kathakali centre was founded in 1990 and aims to popularize the traditional art form of Kerala, discover new talents and train the existing performers with rigorous discipline and dedication. Kathakali is a combination of literature, painting, music, dance and acting and all the five forms culminate to this charming dance form done with grace and command.",
            location: "KB Jacob Rd, Fort Nagar, Fort Kochi, Kochi",
            src: "/assets/images/Places/Kathakali_.jpg",
            href: "https://www.google.com/maps/place/Kerala+Kathakali+Centre/@9.9640226,76.2407029,17z/data=!3m1!4b1!4m6!3m5!1s0x3b086d338b0a6e45:0x53e6d1d96e61d161!8m2!3d9.9640226!4d76.2428916!16s%2Fg%2F1tlqnf0f"
        },
        {
            id: 2,
            place: "Willingdon Island",
            description: "The largest artificial island of India named after the Viceroy of India, Lord Willingdon, is a part of Kochi formed by filling in dredged soil around an already existing tiny island. The island takes pride in housing several landmark offices, especially of the Navy, Customs, Port Trust and fisheries department.",
            location: "3 km from Ernakulam Railway station.",
            src: "/assets/images/Places/Willingdon_Island_kochi.jpg",
            href: "https://www.google.com/maps/place/Willingdon+Island/@9.9478912,76.2586701,14z/data=!3m1!4b1!4m6!3m5!1s0x3b086d717e8a04af:0x38d861edb4c9c90a!8m2!3d9.9483095!4d76.2753761!16zL20vMDd4d3Q2"
        },
        {
            id: 3,
            place: "Lulu Shopping Mall",
            description: "The Lulu Shopping Mall which is one of the largest shopping malls in India is an invite to the world of happiness. With 225 outlets, 2,500 seater food court and the presence of top 100 brands and 11 fine-dining restaurants, this is definitely a place to pamper yourself. The mall also houses a 9 screen Cineplex, amusement rides, one of the largest ice skating rink and a 12-lane bowling alley making it a destination for every age group, especially during the weekends.",
            location: " N.H 47, Nethaji Nagar, Edappally, Kochi",
            src: "/assets/images/Places/mall.jpg",
            href: "https://www.google.com/maps/search/lulu+mall+kochi/@10.02723,76.3060156,17z/data=!3m1!4b1?hl=en"
        },
        {
            id: 4,
            place: "Malayattoor",
            description: "Malayattoor holds a special relevance amongst all tourist places in Kochi as it is a meeting point for land, river and mountain. The Malayattoor Hill has the famous Malayattoor Church dedicated to St. Thomas, who as per belief had prayed at this shrine. This important holy place for Christians in Kochi draws a lot of pilgrims through the southern part of the country around the year.",
            location: " 47 km from Kochi in Ernakulam district.",
            src: "/assets/images/Places/chruch.jpg",
            href: "https://www.google.com/maps/place/St.+Thomas+Grotto/@10.2003507,76.4927031,15z/data=!4m15!1m8!3m7!1s0x3b07fc89a6c87f67:0x93ee46ae47b28f50!2sMalayattoor,+Kerala!3b1!8m2!3d10.1954877!4d76.4967919!16zL20vMDYybmww!3m5!1s0x3b07fdab41d733f5:0x5e5a70e45bd01d2b!8m2!3d10.2055805!4d76.501218!16s%2Fg%2F1tfw1gkp"
        },
        {
            id: 5,
            place: "Andhakaranazhi Beach",
            description: "This beach drawing several tourists is located in a coastal village, located 4km of Pattanakkad. The tall lighthouse in white and red grabs attention as it helps navigate the seamen at night. The Andhakaranazhi Beach happens to be a site for frequent shooting for Malayalam films, thus drawing more attention from the locals.",
            location: " 4 km west of Pattanakkad under Cherthala Taluk",
            src: "/assets/images/Places/AndhakaranazhiBeach.webp",
            href: "https://www.google.com/maps/place/Andhakaranazhi+Beach/@9.7468346,76.2821531,17z/data=!3m1!4b1!4m6!3m5!1s0x3b087b250c77555d:0x39f12f7d2e8ed0ff!8m2!3d9.7487249!4d76.2842964!16s%2Fg%2F1w0qzbrs"
        },
        {
            id: 6,
            place: "Athirapally Falls",
            description: "At a height of 80m, this is the largest waterfall of Kerala and is often regarded as the“ Niagra of India”. The Athirapally Falls is a charming cascade of frothy waters emerging from the Anamudi mountains of the western ghats. The Athirapally gushes across the lush green forest of Vazhachal towards the Arabian sea creating an exquisite panoramic spectacle.",
            location: " 4 km west of Pattanakkad under Cherthala Taluk",
            src: "/assets/images/Places/Falls.jpg",
            href: "https://www.google.com/maps/place/Athirappilly+Water+Falls/@10.2849458,76.5672554,17z/data=!3m1!4b1!4m6!3m5!1s0x3b07f923c2abb0d1:0x1e7af75aa13af78!8m2!3d10.2851072!4d76.5697643!16zL20vMGcxaHg3"
        },
        {
            id: 7,
            place: "Museum of Kerala History",
            description: "One of the oldest art and history museum of Kerala is in Kochi founded by philanthropist and entrepreneur Mr Madhavan Nayar. The museum is divided into three sections, the doll museum, museum of Kerala history and gallery of modern art.The statue of Parasurama has been strategically placed outside the hall to pay reverence to the saint who is believed to have brought forth the land of Kerala from the mighty ocean.",
            location: " 4 km west of Pattanakkad under Cherthala Taluk",
            src: "/assets/images/Places/mamankam.jpg",
            href: "https://www.google.com/maps/place/Museum+Of+Kerala+History/@10.0379599,76.3128062,17z/data=!3m1!4b1!4m6!3m5!1s0x3b080db504444075:0x8cf7531f9e8b202f!8m2!3d10.0379599!4d76.3149949!16s%2Fg%2F11c47zwc89"
        },

    ]


    return (
        <div className="py-20 bg-gray-50">
            <section className="px-8 py-24 mx-auto max-w-7xl">
                <div
                    className="flex justify-between pb-8 mb-12 text-2xl font-extrabold leading-tight text-gray-900 border-b border-gray-200 md:text-4xl">
                    <h2 className="">
                        Tourist Places</h2>
                    <div className="mr-4"> I ❤️ KOCHI</div>
                </div>
                <div className="w-full xl:w-4/6">
                    <div className="flex flex-col space-y-16">
                        {data.map((item, id) => (

                            <div key={item.id} className="grid grid-cols-1 gap-6 md:grid-cols-4">
                                <img src={item.src} className="object-cover  w-full rounded h-40 col-span-1 bg-center"
                                     alt="Kutty"
                                     loading="lazy"/>
                                <div className="col-span-1 md:col-span-3">
                                    <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                                        <a className="text-gray-900 ">
                                            {item.place}
                                        </a>
                                    </h2>
                                    <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">{item.location}</p>
                                    <p className="mb-3 text-sm font-normal text-gray-500">
                                        {item.description}
                                    </p>
                                    <a href={item.href} target="_blank"
                                       className="btn btn-light text-gray-500 hover:text-gray-400 btn-sm"> View in Map </a>
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