import { nanoid } from "nanoid";
import { AdminIcon } from "../assets/svg/AdminIcon";
import blogImg1 from '../assets/images/blog/blogImg1.png';
import blogImg2 from '../assets/images/blog/blogImg2.png';

export const blogData = [
    {
        id:nanoid(),
        data:"25 nov",
        admin:'By Rachi Card',
        adminImg:AdminIcon,
        heading:'The Benefits of Vitamin D & How to Get It',
        title:'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        img:blogImg1,
    },
    {
        id:nanoid(),
        data:"25 nov",
        admin:'By Rachi Card',
        adminImg:AdminIcon,
        heading:'Our Favourite Summertime Tommeto',
        title:'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        img:blogImg2,
    },
]