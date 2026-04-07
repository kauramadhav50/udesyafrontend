import JobsSidebar from "./JobSidebar";
import JobsFeed from "./JobFeed";

const Jobs = () => {
  return (
    <div className="pt-4">

      <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-5 px-3 sm:px-4">

        {/* ❌ Hidden on mobile, visible on lg+ */}
        <div className="hidden lg:block lg:w-[30%]">
          <JobsSidebar />
        </div>

        {/* ✅ Always visible */}
        <div className="w-full lg:w-[70%]">
          <JobsFeed />
        </div>

      </div>

    </div>
  );
};

export default Jobs;