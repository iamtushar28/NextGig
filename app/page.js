import Hero from "./components/main/Hero";
import ExclusiveJobs from "./components/main/ExclusiveJobs";
import TopCompanies from "./components/main/TopCompanies";
import Banner from "./components/main/Banner";

export default function Home() {
  return (
    <>
      <Hero />
      <ExclusiveJobs />
      <Banner />
      <TopCompanies />
    </>
  );
}
