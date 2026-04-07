const PuzzleSection = () => {
  const puzzles = [
    { name: "Zip #354", plays: "21 connections played" },
    { name: "Mini Sudoku #207", plays: "5 connections played" },
    { name: "Tango #515", plays: "3 connections played" }
  ];

  return (
    <div className="bg-white border rounded-lg p-4">
      
      <p className="text-sm mb-3">
        21 connections proved their puzzle skills. Join in.
      </p>

      {/* Grid instead of flex */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {puzzles.map((puzzle, index) => (
          
          <div
            key={index}
            className="flex items-center justify-between gap-3 border rounded-lg p-3 hover:shadow-sm transition"
          >
            
            {/* Left */}
            <div className="flex items-center gap-3">
              
              <div className="w-10 h-10 bg-orange-400 rounded flex-shrink-0"></div>

              <div>
                <p className="font-semibold text-sm">
                  {puzzle.name}
                </p>

                <p className="text-xs text-gray-500">
                  {puzzle.plays}
                </p>
              </div>

            </div>

            {/* Button */}
            <button className="border border-blue-600 text-blue-600 px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap">
              Solve
            </button>

          </div>

        ))}

      </div>

    </div>
  );
};

export default PuzzleSection;