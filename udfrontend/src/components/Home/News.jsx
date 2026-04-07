import { FaChevronRight, FaChevronDown } from "react-icons/fa";

const News = () => {
return ( <div className="w-full bg-gray-100 rounded-xl shadow-md p-4">

  {/* Header */}
  <h2 className="font-semibold text-lg mb-2">LinkedIn News</h2>
  <p className="text-sm text-gray-600 mb-3">Top stories</p>

  {/* News List */}
  <div className="space-y-2 text-sm">

    <div className="cursor-pointer hover:bg-gray-200 p-2 rounded">
      <p className="font-medium">Karnataka bans social media for kids</p>
      <p className="text-gray-500 text-xs">5h ago • 18,350 readers</p>
    </div>

    <div className="cursor-pointer hover:bg-gray-200 p-2 rounded">
      <p className="font-medium">Top finance experts to follow</p>
      <p className="text-gray-500 text-xs">7d ago • 4,667 readers</p>
    </div>

    <div className="cursor-pointer hover:bg-gray-200 p-2 rounded">
      <p className="font-medium">Top tech & startup experts to follow</p>
      <p className="text-gray-500 text-xs">4h ago • 2,929 readers</p>
    </div>

    <div className="cursor-pointer hover:bg-gray-200 p-2 rounded">
      <p className="font-medium">How women power progress</p>
      <p className="text-gray-500 text-xs">10h ago • 2,205 readers</p>
    </div>

    <div className="cursor-pointer hover:bg-gray-200 p-2 rounded">
      <p className="font-medium">Top marketing experts to follow</p>
      <p className="text-gray-500 text-xs">7h ago • 851 readers</p>
    </div>

    <div className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-black">
      <span>Show more</span>
      <FaChevronDown />
    </div>

  </div>

  {/* Puzzle Section */}
  <div className="mt-6">
    <h3 className="font-semibold mb-3">Today's puzzle games</h3>

    <div className="space-y-2">

      <div className="flex items-center justify-between cursor-pointer hover:bg-gray-200 p-2 rounded">
        <div>
          <p className="font-medium">Zip #354</p>
          <p className="text-xs text-gray-500">19 connections played</p>
        </div>
        <FaChevronRight />
      </div>

      <div className="flex items-center justify-between cursor-pointer hover:bg-gray-200 p-2 rounded">
        <div>
          <p className="font-medium">Mini Sudoku #207</p>
          <p className="text-xs text-gray-500">5 connections played</p>
        </div>
        <FaChevronRight />
      </div>

      <div className="flex items-center justify-between cursor-pointer hover:bg-gray-200 p-2 rounded">
        <div>
          <p className="font-medium">Tango #515</p>
          <p className="text-xs text-gray-500">3 connections played</p>
        </div>
        <FaChevronRight />
      </div>

      <div className="flex items-center justify-between cursor-pointer hover:bg-gray-200 p-2 rounded">
        <div>
          <p className="font-medium">Queens #675</p>
          <p className="text-xs text-gray-500">6 connections played</p>
        </div>
        <FaChevronRight />
      </div>

      <div className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-black">
        <span>Show more</span>
        <FaChevronDown />
      </div>

    </div>
  </div>

</div>

);
};

export default News;
