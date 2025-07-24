import { m } from "framer-motion";

export const housing = [
    {
        title: "Tamuning Apartments",
        location: "133 Tan Chong Sablan, Guam",
        status: "Available",
        price: "$2,423,016",
        size: "1400 sqft",
        stories: 2,
        bed: 3,
        bath: 3,
        contact: "Chris Guerrero",
        yrbuilt: 2018,
        thumbnail:"https://cdn.resize.sparkplatform.com/gar/1280x1024/true/20241206071537591687000000-o.jpg",
        images:[
            "/tamApt/master.jpg",
            "/tamApt/masterReverse.jpg",
            "/tamApt/IMG_4283.jpg",
            "/tamApt/livingRoom.jpg",
            "/tamApt/livinKitchen.jpg",
            "/tamApt/room2.jpg",
            "/tamApt/bathroom.jpg"
        ],
        description:"This is a dummy text in place of the actual description of the project. This will include more details of the project, the project scope, and what we tried to accomplish."
    },
    {
        title: "Tamuning Single Housing",
        location: "133 Tan Chong Sablan, Guam",
        status: "Available",
        price: 2423016,
        size: 1400,
        stories: 2,
        bed: 3,
        bath: 3,
        contact: "Chris Guerrero",
        yrbuilt: 2018,
        thumbnail:"/Subdivision/front.jpg",
        images:[
            "/Subdivision/front2.jpg",
            "/Subdivision/livingRoom.jpg",
            "/Subdivision/kitchen.jpg",
            "/Subdivision/otherKitchen.jpg",
            "/Subdivision/sideStairs.jpg",
            "/Subdivision/stairway.jpg",
            "/Subdivision/balcony.jpg",
            "/Subdivision/heavenStairs.jpg"
        ],
        description:"This is a dummy text in place of the actual description of the project. This will include more details of the project, the project scope, and what we tried to accomplish."
    }
]

export function getHousingByTitle(title){
    const cleanTitle = title.startsWith(":") ? title.slice(1) : title;
    return housing.find(obj=>obj.title === cleanTitle);
}