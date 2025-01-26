import React from 'react'
import { VscSettings } from "react-icons/vsc";
import { IoChevronDownSharp } from "react-icons/io5";

const JobFilter = () => {
    const [openDateFilter, setOpenDateFilter] = useState(false);
    const [openSalaryFilter, setOpenSalaryFilter] = useState(false);
  
    // for toggle open Date Filter
    const toggleopenDateFilter = () => {
      setOpenDateFilter(!openDateFilter);
    };
  
    //for toggle open Salary Filter
    const toggleopenSalaryFilter = () => {
      setOpenSalaryFilter(!openSalaryFilter);
    };
  return (
    <div className="md:p-4 p-2 gap-4 flex items-cente">
        {/* filter icon */}
        <VscSettings className="text-3xl mt-1" />

        <div className="flex flex-wrap items-center md:gap-4 gap-2">
          <button className="px-3 text-sm py-2 capitalize rounded-full bg-zinc-100 hover:ring-2 hover:ring-green-300 transition-all duration-200">
            internship
          </button>
          <button className="px-3 py-2 text-sm capitalize rounded-full bg-zinc-100 hover:bg-zinc-200 transition-all duration-200 hover:ring-2 hover:ring-green-300">
            in office
          </button>
          <button className="px-3 py-2 text-sm capitalize rounded-full bg-zinc-100 hover:bg-zinc-200 transition-all duration-200 hover:ring-2 hover:ring-green-300">
            remote only
          </button>

          {/* salary range button */}
          <div className="relative">
            <button
              onClick={toggleopenSalaryFilter}
              className="px-3 py-2 text-sm capitalize rounded-full bg-zinc-100 transition-all duration-200 flex items-center gap-2 hover:ring-2 hover:ring-green-300"
            >
              salary range
              <IoChevronDownSharp
                className={`md:text-xl transition-all duration-300 ${
                  openSalaryFilter ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* salary filter options */}
            {openSalaryFilter && (
              <div className="w-fit py-2 bg-white absolute top-10 border z-10">
                <button className="capitalize text-start w-full py-2 px-4 hover:bg-slate-100">
                  upto 4,000
                </button>
                <button className="capitalize text-start w-full py-2 px-4 hover:bg-slate-100">
                  upto 10,000
                </button>
                <button className="capitalize text-start w-full py-2 px-4 hover:bg-slate-100">
                  upto 40,000
                </button>
                <button className="capitalize text-start w-full py-2 px-4 hover:bg-slate-100">
                  upto 1lakh
                </button>
              </div>
            )}
          </div>

          {/* date filter button */}
          <div className="relative">
            <button
              onClick={toggleopenDateFilter}
              className="px-3 py-2 text-sm capitalize rounded-full bg-zinc-100 transition-all duration-200 flex items-center gap-2 hover:ring-2 hover:ring-green-300"
            >
              date posted
              <IoChevronDownSharp
                className={`md:text-xl transition-all duration-300 ${
                  openDateFilter ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* date filter options */}
            {openDateFilter && (
              <div className="w-fit py-2 bg-white absolute top-10 border z-10">
                <button className="capitalize text-start w-full py-2 px-4 hover:bg-slate-100">
                  All
                </button>
                <button className="capitalize text-start w-full py-2 px-4 hover:bg-slate-100">
                  Last Day
                </button>
                <button className="capitalize text-start w-full py-2 px-4 hover:bg-slate-100">
                  Last 3 Day
                </button>
                <button className="capitalize text-start w-full py-2 px-4 hover:bg-slate-100">
                  Last week
                </button>
                <button className="capitalize text-start w-full py-2 px-4 hover:bg-slate-100">
                  Last 2 week
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
  )
}

export default JobFilter