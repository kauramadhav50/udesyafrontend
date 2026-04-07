import Postview from "./Postview.jsx";
import Profileinfo from "./Profileinfo.jsx";
import News from "./News.jsx";

const Home = () => {
  return (
    <div className="flex justify-center gap-7 px-4 mt-4 max-w-7xl mx-auto">

      {/* Left Sidebar - only on large screens */}
      <div className="hidden lg:block lg:w-[300px] flex-shrink-0">

      <div className="hidden lg:block lg:w-[250px] flex-shrink-0">
        <Profileinfo />
      </div>
      </div>

      {/* Main Feed */}
      <div className="flex-1 max-w-[600px] w-full">
        <Postview />
      </div>

      {/* Right Sidebar - only on large screens */}
      <div className="hidden lg:block lg:w-[300px] flex-shrink-0">
        <News />
      </div>

    </div>
  );
};

export default Home;