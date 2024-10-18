import AttendanceChart from "@/app/components/AttendanceChart";
import CountChart from "@/app/components/CountChart";
import EventCalendar from "@/app/components/EventCalendar";
import { FinanceChart } from "@/app/components/FinanceChart";
import UserCard from "@/app/components/UserCard";
import React from "react";

const AdminPage = () => {
  return (
    <div className=" p-4 flex flex-col gap-4 md:flex-row">
      {/* LEFT */}
      <div className="w-full  lg:w-2/3  flex flex-col gap-8">
        {/* usecard */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* middle chart section */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* count chart section */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* attendance chart */} {/* count chart section */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/* bottom chart section */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>

      {/* right */}
      <div className="w-full lg:w-1/3 flex flex-col">
        <EventCalendar />
      </div>
    </div>
  );
};

export default AdminPage;
