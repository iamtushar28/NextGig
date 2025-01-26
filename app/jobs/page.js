"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import JobDetailsCard from "./components/JobDetailsCard";
import JobDetailsSection from "./components/JobDetailsSection";
import JobSearchBar from "./components/JobSearchBar";

export default function Home() {

  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchQuery, setSearchQuery] = useState("software developer india");

  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(false); // Loader state

  const fetchJobs = async (query) => {
    setLoading(true); // Set loading to true when fetching starts
    try {
      const options = {
        method: "GET",
        url: "https://jsearch.p.rapidapi.com/search",
        params: {
          query,
          page: "1",
          num_pages: "1",
          country: "in",
          date_posted: "all",
        },
        headers: {
          "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "x-rapidapi-host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      };
      const response = await axios.request(options);
      const fetchedJobs = response.data.data; // Assuming jobs are in `data.data`

      // Set the first job as the default selected job
      if (fetchedJobs.length > 0) {
        setJobs(fetchedJobs);
        // Set the first job as the default selected job for desktop as well
        if (!isMobile) {
          setSelectedJob(fetchedJobs[0]);
        }
      }
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
    } finally {
      setLoading(false); // Set loading to false when fetching is complete
    }
  };

  useEffect(() => {
    fetchJobs(searchQuery);
  }, [searchQuery]);

  // Detect screen size (mobile vs desktop)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the 768px breakpoint as needed
    };
    handleResize(); // Check screen size on initial load
    window.addEventListener("resize", handleResize); // Recheck when window is resized

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to go back to job list on mobile
  const handleBackToList = () => {
    setSelectedJob(null);
  };

  return (
    <section className="mt-32">
      {/* Job search bar */}
      <div className="w-full md:py-10 py-6 px-2 border-b flex justify-center bg-white">
        <JobSearchBar setSearchQuery={setSearchQuery}/>
      </div>

      {/* Job List Container */}
      <div className="py-4 md:px-4 px-0 flex gap-4">
        {/* Show loader while jobs are being fetched */}
        {loading && (
          <div className="w-full flex justify-center items-center">
            <div className="border-t-2 border-green-400 border-solid w-12 h-12 rounded-full animate-spin"></div> {/* Green loader */}
          </div>
        )}

        {/* Job list on mobile */}
        {!loading && isMobile && !selectedJob && (
          <div
            className={`md:min-w-[390px] w-[390px] h-[800px] overflow-y-scroll flex items-center flex-col gap-3 rounded-lg scrollbar-hidden`}
          >
            {jobs.map((job) => (
              <JobDetailsCard
                key={job.job_id}
                job={job}
                onViewDetails={() => setSelectedJob(job)} // When a job is clicked, show its details
              />
            ))}
          </div>
        )}

        {/* Job details section on mobile */}
        {!loading && isMobile && selectedJob && (
          <div className="w-full">
            <button
              onClick={handleBackToList}
              className="mb-4 p-2 bg-blue-500 text-white rounded-md"
            >
              Back to Job List
            </button>
            <JobDetailsSection job={selectedJob} />
          </div>
        )}

        {/* Job list and details section on desktop */}
        {!loading && !isMobile && (
          <div className="flex gap-4 w-full">
            {/* Job cards */}
            <div
              className={`md:min-w-[390px] w-[390px] h-[800px] overflow-y-scroll flex items-center flex-col gap-3 rounded-lg scrollbar-hidden`}
            >
              {jobs.map((job) => (
                <JobDetailsCard
                  key={job.job_id}
                  job={job}
                  onViewDetails={() => setSelectedJob(job)} // When a job is clicked, show its details
                />
              ))}
            </div>

            {/* Job details section */}
            {selectedJob && <JobDetailsSection job={selectedJob} />}
          </div>
        )}
      </div>
    </section>
  );
}
