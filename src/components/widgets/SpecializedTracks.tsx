"use client";
import Wrapper from "@/components/shared/Wrapper";
import { specializedTracksData } from "@/constants/Data";
import QuarterBox from "@/components/shared/QuarterBox";
import { ProgramData } from "@/constants/Data";
import Image from "next/image";
import { useState } from "react";
import { it } from "node:test";

const SpecializedTracks = () => {
  const [itemdData, setItemsData] = useState("wmd");

  const selectedItemData = ProgramData.find((item) => item.slug === itemdData);

  return (
    <section>
      <Wrapper>
        {/* Header */}
        <div className="">
          <h2 className="text-5xl font-bold whitespace-pre-line">
            Specialized Tracks:
          </h2>
          <p className="mt-3 text-xl text-slate-600 max-w-screen-sm">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:{" "}
          </p>
        </div>
        <div className="mt-10 flex flex-col-reverse lg:flex-row gap-x-8 gapy-y-8">
          {/* Content left */}
          <div className=" shadow-xl flex-1 self-start sticky top-28 basis-8/12 rounded-xl border border-slate-300 py-8 px-8">
            <h4 className="text-lg font-medium text-primary">
              Specialized Program
            </h4>
            <h3 className="text-3xl font-bold ">{selectedItemData?.header}</h3>
            <p className="text-xl text-slate-700 mt-4">
              {selectedItemData?.description}
            </p>
            <button className="text-teal-800 text-xl mt-4 underline flex gap-x-2 items-baseline">
              Learn More
              <svg
                width="10"
                height="13"
                viewBox="0 0 8 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994"
                  stroke="#00616C"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div>
              {selectedItemData?.quarters.map((item, id) => {
                return (
                  <QuarterBox
                    key={id}
                    header={item.header}
                    description={item.description}
                    number={id + 1}
                    haveBorder={false}
                  />
                );
              })}
            </div>
          </div>

          {/* Content Right */}
          <div className="px-4 py-8 space-y-8 basis-4/12 bg-slate-100 flex-1">
            {ProgramData.map((item, id) => (
              <div
                onClick={() => setItemsData(item.slug)}
                key={id}
                className=" flex gap-x-4 items-center"
              >
                {/* <div className="w-28 h-16 rounded bg-slate-600 cursor-pointer"></div> */}
                <div className="flex-shrink-0 hover:scale-105 hover:-translate-x-2  hover:-translate-y-3 duration-300 cursor-pointer ">
                  <Image
                    src={item.images}
                    alt="specialized tracks"
                    className="rounded-lg h-28 object-cover w-48"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#00616C]">
                    Specialized Program
                  </h4>
                  <h3 className="font-semibold text-xl">{item.header}</h3>
                </div>
                {/* underline */}

                {/* </div> */}
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecializedTracks;
