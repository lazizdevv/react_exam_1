import { nanoid } from "nanoid";
import gallery1 from '../assets/images/gallery/gallery1.png';
import gallery2 from '../assets/images/gallery/gallery2.jpg';
import gallery3 from '../assets/images/gallery/gallery3.jpg';

export const galleryData = [
    {
        id:nanoid(),
        img:gallery1,
        title:'Organic Juice'
    },
    {
        id:nanoid(),
        img:gallery2,
        title:'Organic Food'
    },
    {
        id:nanoid(),
        img:gallery3,
        title:'Nuts Cookis'
    },
]