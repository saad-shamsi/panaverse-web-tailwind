import React from "react";
import Wrapper from "@/components/shared/Wrapper";
import Button from "@/components/shared/button";
import QuarterBox from "@/components/shared/QuarterBox";
import { coreTracksData } from "@/constants/Data";

const CoreTracks = () => {
  const header = "Core Courses \n (Common in All Specializations):";
  return (
    <Wrapper>
      <section className=" lg:mt-28 ">
        {/* Content */}
        <div className="max-w-screeen-md">
          <h4 className="text-teal-700 font-semibold text-lg mt-4">
            Program of Studies
          </h4>
          <h2 className=" text-5xl font-bold whitespace-pre-line">{header}</h2>

          <div className=" relative -top-20 w-44 h-36  bg-[#05c19b78] blur-3xl rounded-full z-0"></div>
          <h4 className=" -mt-24 text-slate-600 lg:text-xl sm:text-lg ">
            Every participant of the program will start by completing the
            following three core courses:
          </h4>
          <div className="mt-3">
            <Button text="Learn More" />
          </div>
        </div>
        {/* Boxes */}
        <div className="my-20 flex flex-col md:flex-row gap-y-6 gap-x-8">
          {coreTracksData.map((item, id) => {
            return (
              <QuarterBox
                header={item.header}
                description={item.description}
                number={id + 1}
                key={id}
              />
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

export default CoreTracks;

//  {/* <div className='border rounded-md w-4/12 px-8 py-8'>
//         <h4 className='font-bold text-lg'>Quarter I</h4>
//         <p className='mt-2 text-slate-600 '>CS-101: Object-Oriented Programming using TypeScript</p>
//         <span>1</span>
//       </div>
//       <div className='border rounded-md w-4/12 px-8'>
//         <h4 className='font-bold text-lg'>Quarter I</h4>
//         <p>CS-101: Object-Oriented Programming using TypeScript</p>
//         <span >1</span>
//       </div>*/
