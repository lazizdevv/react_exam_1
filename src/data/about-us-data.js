import { nanoid } from "nanoid";
import { VeganFoodIcon } from "../assets/svg/VeganFoodIcon";
import { MailBoxIcon } from "../assets/svg/MailBoxIcon";
import { TractorIcon } from "../assets/svg/TractorIcon";
import { ChamicalPlantIcon } from "../assets/svg/ChamicalPlantIcon";

export const aboutUsHomeData = [
    {
        id:nanoid(),
        heading1:'About Us',
        heading2:'We Believe in Working Accredited Farmers',
        context:"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
        points:{
            point1:{
                icon: VeganFoodIcon,
                heading:'Organic Foods Only',
                context:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
            },
            point2:{
                icon: MailBoxIcon,
                heading:"Quality Standards",
                context:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
            }
        }

    }
]

export const aboutUsData = [
    {
        id:nanoid(),
        heading1:'About Us',
        heading2:'We Believe in Working Accredited Farmers',
        context:"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
        points:{
            point1:{
                icon: TractorIcon,
                heading:'Organic Foods Only',
                context:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
            },
            point2:{
                icon: ChamicalPlantIcon,
                heading:"Quality Standards",
                context:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
            }
        }

    }
]