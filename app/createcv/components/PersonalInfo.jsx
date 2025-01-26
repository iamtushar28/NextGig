import React from "react";

const PersonalInfo = ({ nextStep }) => {
  return (
    <section className="px-2">

      <h2 className="text-2xl font-semibold capitalize">personal information</h2>
      <div className="flex flex-col gap-5 mt-6">
        {/* name */}
        <div>
          <h6 className="text-sm text-zinc-400 font-semibold mb-2">Name</h6>
          <input
            type="text"
            name="name"
            id="name"
            className="h-10 md:w-96 w-[21rem] px-2 border border-green-400 hover:border-none outline-none rounded hover:ring-2 hover:ring-green-400 transition-all duration-300"
          />
        </div>
        {/* email */}
        <div>
          <h6 className="text-sm text-zinc-400 font-semibold mb-2">Email</h6>
          <input
            type="email"
            name="email"
            id="email"
            className="h-10 md:w-96 w-[21rem] px-2 border border-green-400 hover:border-none outline-none rounded hover:ring-2 hover:ring-green-400 transition-all duration-300"
          />
        </div>
        {/* phone number */}
        <div>
          <h6 className="text-sm text-zinc-400 font-semibold mb-2">
            Phone Number
          </h6>
          <input
            type="text"
            name="phoneNo"
            id="phoneNo"
            className="h-10 md:w-96 w-[21rem] px-2 border border-green-400 hover:border-none outline-none rounded hover:ring-2 hover:ring-green-400 transition-all duration-300"
          />
        </div>
        {/* linkedin url */}
        <div>
          <h6 className="text-sm text-zinc-400 font-semibold mb-2">
            Linkedin Url
          </h6>
          <input
            type="text"
            name="linkedinUrl"
            id="linkedinUrl"
            className="h-10 md:w-96 w-[21rem] px-2 border border-green-400 hover:border-none outline-none rounded hover:ring-2 hover:ring-green-400 transition-all duration-300"
          />
        </div>
        {/* github url */}
        <div>
          <h6 className="text-sm text-zinc-400 font-semibold mb-2">
            Github Url
          </h6>
          <input
            type="text"
            name="githubUrl"
            id="githubUrl"
            className="h-10 md:w-96 w-[21rem] px-2 border border-green-400 hover:border-none outline-none rounded hover:ring-2 hover:ring-green-400 transition-all duration-300"
          />
        </div>

<div className="flex gap-2">

        {/* next button */}
        <button
          onClick={nextStep}
          className="w-fit px-10 py-2 bg-[#00E676] text-black font-medium rounded-lg"
        >
          Next
        </button>
        </div>

      </div>
    </section>
  );
};

export default PersonalInfo;
