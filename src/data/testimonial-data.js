import { nanoid } from 'nanoid'
import human from '../assets/images/human.png'

export const testimonialData = [
    {
        heading1:'Testimonial',
        heading2:'What Our Customer Saying?',
        img:human,
        content:'Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.',
        name:'Sara Taylor',
        type:'consumer',
        id:nanoid(),
    }
]        

export const countersData = [
    {
        name:'Organic',
        num:'100%',
        id:nanoid()
    },
    {
        name:'Active Product',
        num:'285',
        id:nanoid()
    },
    {
        name:'Organic Orchads',
        num:'350+',
        id:nanoid()
    },
    {
        name:'Years of Farming',
        num:'25+',
        id:nanoid()
    }
]