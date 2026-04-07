import { useState } from "react";
import PuzzleSection from "./PuzzleSection";
import PeopleYouMayKnow from "./PeopleYouMayKnow";



const Grow = () => {

  const [activeTab, setActiveTab] = useState("grow");

  return (

    <div className="flex-1 space-y-4">

      {/* Tabs */}

      <div className="bg-white border rounded-lg flex">

        <button
          onClick={() => setActiveTab("grow")}
          className={`px-6 py-3 font-semibold ${
            activeTab === "grow"
              ? "border-b-2 border-green-600"
              : "text-gray-500"
          }`}
        >
          Grow
        </button>

        <button
          onClick={() => setActiveTab("catchup")}
          className={`px-6 py-3 font-semibold ${
            activeTab === "catchup"
              ? "border-b-2 border-green-600"
              : "text-gray-500"
          }`}
        >
          Catch up
        </button>

      </div>


      {/* Content */}

      {activeTab === "grow" && (

        <>
          {/* Invitations */}
          <div className="bg-white border rounded-lg p-4 flex justify-between">

            <p>No pending invitations</p>

            <button className="text-gray-600 hover:underline">
              Manage
            </button>

          </div>

          <PuzzleSection />

          <PeopleYouMayKnow />

        </>

      )}


      {activeTab === "catchup" && (

        <div className="bg-white border rounded-lg p-6 text-center text-gray-500">

          No new updates from your network.

        </div>

      )}

    </div>

  );

};

export default Grow;