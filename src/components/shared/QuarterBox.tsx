import React, { FC } from 'react'

interface IProps{
    header:string;
    description:string;
    number:number;
    key:number
    haveBorder?:boolean

    
}
const QuarterBox:FC<IProps> = ({header, description, number,haveBorder=true}) => {
  return (

    <div  className={` rounded-md flex-1 px-8 py-16 relative flex flex-col justify-center ${haveBorder && "border"}`}>
        
    <h4 className='font-bold text-lg'>{header}</h4>
 <p className='mt-2 text-slate-600 '>{description}</p>
   <div className='absolute text-[150px] font-bold text-slate-200 right-10 -top-10 -z-10'>{number}</div>
</div>)
  
}

export default QuarterBox