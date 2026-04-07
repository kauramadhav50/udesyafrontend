import { useState } from "react";
import PuzzleSection from "./PuzzleSection";
import PeopleYouMayKnow from "./PeopleYouMayKnow";

const Grow = () => {
  const [activeTab, setActiveTab] = useState("grow");

  return (
    <div className="flex-1 space-y-4 px-2 sm:px-4 md:px-0">
      
      {/* Tabs */}
      <div className="bg-white border rounded-lg flex overflow-x-auto scrollbar-thin">
        
        <button
          onClick={() => setActiveTab("grow")}
          className={`flex-1 min-w-[120px] text-center px-4 sm:px-6 py-3 font-semibold transition ${
            activeTab === "grow"
              ? "border-b-2 border-green-600 text-black"
              : "text-gray-500 hover:text-black"
          }`}
        >
          Grow
        </button>

        <button
          onClick={() => setActiveTab("catchup")}
          className={`flex-1 min-w-[120px] text-center px-4 sm:px-6 py-3 font-semibold transition ${
            activeTab === "catchup"
              ? "border-b-2 border-green-600 text-black"
              : "text-gray-500 hover:text-black"
          }`}
        >
          Catch up
        </button>

      </div>

      {/* Content */}
      {activeTab === "grow" && (
        <div className="space-y-4">

          {/* Invitations */}
          <div className="bg-white border rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            
            <p className="text-sm sm:text-base">
              No pending invitations
            </p>

            <button className="text-gray-600 hover:underline text-sm sm:text-base self-start sm:self-auto">
              Manage
            </button>

          </div>

          {/* Sections */}
          <div className="space-y-4">
            <PuzzleSection />
            <PeopleYouMayKnow />
          </div>

        </div>
      )}

      {activeTab === "catchup" && (
        <div className="bg-white border rounded-lg p-4 sm:p-6 text-center text-gray-500 text-sm sm:text-base">
          No new updates from your network.
        </div>
      )}
    </div>
  );
};

export default Grow;