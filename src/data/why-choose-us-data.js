import { nanoid } from "nanoid"

import { ReturnIcon } from "../assets/svg/choose-us/ReturnIcon";
import { NaturalIcon } from "../assets/svg/choose-us/NaturalIcon";
import { PhoneTimeIcon } from "../assets/svg/choose-us/PhoneTimeIcon";
import { CardSecurityIcon } from "../assets/svg/choose-us/CardSecurityIcon";

import chooseContentBg from '../assets/images/choose-content-bg.jpg'


export const chooseUsContentData = [
    {
        id:nanoid(),
        heading1:'Why Choose us?',
        heading2:'We do not buy from the open market & traders.',
        content:"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown",
        type1:'100% Natural Product',
        info1:'Simply dummy text of the printing and typesetting industry Lorem Ipsum',
        type2:'Increases resistance',
        info2:'Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing',
        img:chooseContentBg,
    }
]

export const chooseUsCardData = [
    {
        id:nanoid(),
        name:'Return Policy',
        title:'Simply dummy text of the printintypesetting industry.',
        icon:ReturnIcon,
    },
    {
        id:nanoid(),
        name:'100% Fresh',
        title:'Simply dummy text of the printintypesetting industry.',
        icon:NaturalIcon,
    },
    {
        id:nanoid(),
        name:'Support 24/7',
        title:'Simply dummy text of the printintypesetting industry.',
        icon:PhoneTimeIcon,
    },
    {
        id:nanoid(),
        name:'Secured Payment',
        title:'Simply dummy text of the printintypesetting industry.',
        icon:CardSecurityIcon,
    },
]