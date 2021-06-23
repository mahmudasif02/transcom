import React from 'react';
import './Sidebar.css';
import SidebarItem from './SidebarItem/SidebarItem';
import { GrMonitor } from "react-icons/gr";
import { BiFridge, BiHeadphone, BiHome } from "react-icons/bi";
import { AiOutlineMobile } from "react-icons/ai";
import { CgToolbarBottom } from "react-icons/cg";


const categories =[
    {
        id:1,
        name: "Smart Tv",
        icon: <GrMonitor size={40}></GrMonitor>
    },
    {
        id:2,
        name: "Air Conditionar",
        icon: <CgToolbarBottom size={40}></CgToolbarBottom>
    },
    {
        id:3,
        name: "Refrigerators",
        icon: <BiFridge size={40}></BiFridge>
    },
    {
        id:4,
        name: "Mobile|Tabs",
        icon: <AiOutlineMobile size={40}></AiOutlineMobile>
    },
    {
        id:5,
        name: "Home & Kitchen",
        icon: <BiHome size={40}></BiHome>
    },
    {
        id:6,
        name: "Headphones",
        icon: <BiHeadphone size={40}></BiHeadphone>
    },
]

const Sidebar = () => {
    return (
        <div className="sidebar row mt-4 justify-content-center">
            {
                categories.map((category,index) => <SidebarItem key={index} category={category}></SidebarItem>)
            }
        </div>
    );
};

export default Sidebar;