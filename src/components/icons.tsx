import { FaBars } from 'react-icons/fa';
import { IoCloseSharp } from "react-icons/io5";



interface IconProps {
    icon: number;
}

export default function Icon({icon}: IconProps){

    const icons = [
    <FaBars size={25} color="white" />,
    
    <IoCloseSharp style={{
        marginRight: "-5px",
    }}  size={35} color="white" />
]

    return (
    <div>{icons[icon]}</div>
    )
}