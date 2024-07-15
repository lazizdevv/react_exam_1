import { nanoid } from "nanoid";
import offer1 from "../assets/images/offers/offer1.png";
import offer2 from "../assets/images/offers/offer2.png";

import aboutOffer1 from '../assets/images/about-offer/about-offer1.jpg'
import aboutOffer2 from '../assets/images/about-offer/about-offer2.jpg'
import aboutOffer3 from '../assets/images/about-offer/about-offer3.jpg'
import aboutOffer4 from '../assets/images/about-offer/about-offer4.jpg'

export const offerBanner = [
    {
        img:offer1,
        id:nanoid(),
        title:"Natural!!",
        titleColor:'text-white',
        name:"Get Garden Fresh Fruits",
        nameColor:'text-white',
    },
    {
        img:offer2,
        id:nanoid(),
        title:"Offer!!",
        titleColor:"text-secondary",
        name:"Get 10% off on Vegetables",
        nameColor:"text-primary",
    },
]

export const aboutOfferProduct = [
    {
        id:nanoid(),
        img:aboutOffer1,
        name:'Spicy',
    },
    {
        id:nanoid(),
        img:aboutOffer2,
        name:'Nuts & Feesd',
    },
    {
        id:nanoid(),
        img:aboutOffer3,
        name:'Fruits',
    },
    {
        id:nanoid(),
        img:aboutOffer4,
        name:'Vegetable',
    },
]