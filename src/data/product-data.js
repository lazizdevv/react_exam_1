import { nanoid } from 'nanoid';
import product1 from '../assets/images/products/product1.png';
import product2 from '../assets/images/products/product2.png';
import product3 from '../assets/images/products/product3.png';
import product4 from '../assets/images/products/product4.png';
import product5 from '../assets/images/products/product5.png';
import product6 from '../assets/images/products/product6.png';
import product7 from '../assets/images/products/product7.png';
import product8 from '../assets/images/products/product8.png';

export const productData = [
    {
        type:'Vegetable',
        img:product1,
        name:'Calabrese Broccoli',
        oldPrice:'$20.00',
        price:'$13.00',
        id:nanoid()
    },
    {
        type:'Fresh',
        img:product2,
        name:'Fresh Banana Fruites',
        oldPrice:'$20.00',
        price:'$14.00',
        id:nanoid()
    },
    {
        type:'Millets',
        img:product3,
        name:'White Nuts',
        oldPrice:'$20.00',
        price:'$15.00',
        id:nanoid()
    },
    {
        type:'Vegetable',
        img:product4,
        name:'Vegan Red Tomato',
        oldPrice:'$20.00',
        price:'$17.00',
        id:nanoid()
    },
    {
        type:'Health',
        img:product5,
        name:'Mung Bean',
        oldPrice:'$20.00',
        price:'$11.00',
        id:nanoid()
    },
    {
        type:'Nuts',
        img:product6,
        name:'Brown Hazelnut',
        oldPrice:'$20.00',
        price:'$12.00',
        id:nanoid()
    },
    {
        type:'Fresh',
        img:product7,
        name:'Eggs',
        oldPrice:'$20.00',
        price:'$17.00',
        id:nanoid()
    },
    {
        type:'Fresh',
        img:product8,
        name:'Zelco Suji Elaichi Rusk',
        oldPrice:'$20.00',
        price:'$15.00',
        id:nanoid()
    },
]