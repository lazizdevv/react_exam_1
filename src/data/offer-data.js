import { nanoid } from "nanoid";
import offer1 from "../assets/images/offers/offer1.png";
import offer2 from "../assets/images/offers/offer2.png";

import product1 from '../assets/images/offer-product/offer1.png'
import product2 from '../assets/images/offer-product/offer2.png'
import product3 from '../assets/images/offer-product/offer3.png'
import product4 from '../assets/images/offer-product/offer4.png'

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

export const offerProduct = [
    {
        type:'Vegetable',
        img:product1,
        name:'Calabrese Broccoli',
        oldPrice:'$20.00',
        price:'$13.00',
        id:nanoid()
    },
    {
        type:'Vegetable',
        img:product2,
        name:'Calabrese Broccoli',
        oldPrice:'$20.00',
        price:'$13.00',
        id:nanoid()
    },
    {
        type:'Vegetable',
        img:product3,
        name:'Calabrese Broccoli',
        oldPrice:'$20.00',
        price:'$13.00',
        id:nanoid()
    },
    {
        type:'Vegetable',
        img:product4,
        name:'Calabrese Broccoli',
        oldPrice:'$20.00',
        price:'$13.00',
        id:nanoid()
    },
]