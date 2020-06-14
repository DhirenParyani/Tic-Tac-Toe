import React from "react"
import { icons } from "react-icons"
import {FaTimes,FaPen,FaRegCircle} from "react-icons/fa"

const Icon = ({name}) =>{
   switch(name){
       case 'circle':
           return <FaRegCircle className="icons" />;
       case 'cross':
             return <FaTimes className="icons" />;
        case 'empty':
            return <FaPen className="icons" />;



   }
};

export default Icon;