import React, { FC } from 'react'

const Button:FC<{text:string}> = ({text}) => {

    return (
        <button 
        className="bg-[#00616C] text-white  px-5 py-3 mt-6 rounded-full  font-semibold hover:shadow-lg hover:scale-105 duration-300
        ">{text}</button>
      )
    }
     
    
    



export default Button

