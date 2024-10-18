"use client";

import React from "react";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 100,
    fill: "white",
  },
  {
    name: "Girls",
    count: 50,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 50,
    fill: "#C3EBFA",
  },
];
const CountChart = () => {
  return (
    <div className="bg-white  h-full w-full p-4 rounded-xl">
      {/* title sectin of the card */}
      <div className="flex justify-between align-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="w-full h-[75%] relative">
        {/* chart section */}
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
              // minAngle={15}
              background
              // clockWise
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        {/* bottom section of the card */}
        <Image
          className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2"
          alt=""
          src="/maleFemale.png"
          height={50}
          width={50}
        />
      </div>
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaSky rounded-full" />
          <h1 className="font-bold"> 234</h1>
          <h2 className="text-sm text-gray-300"> Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaYellow rounded-full" />
          <h1 className="font-bold"> 900</h1>
          <h2 className="text-sm text-gray-300"> Girl (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
