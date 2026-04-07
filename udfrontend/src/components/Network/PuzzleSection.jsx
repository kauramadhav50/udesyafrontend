
const PuzzleSection = () => {

  const puzzles = [
    { name: "Zip #354", plays: "21 connections played" },
    { name: "Mini Sudoku #207", plays: "5 connections played" },
    { name: "Tango #515", plays: "3 connections played" }
  ]

  return (

    <div className="bg-white border rounded-lg p-4">

      <p className="text-sm mb-3">
        21 connections proved their puzzle skills. Join in.
      </p>

      <div className="flex gap-4">

        {puzzles.map((puzzle, index) => (

          <div key={index} className="flex items-center gap-3 border rounded-lg p-3">

            <div className="w-10 h-10 bg-orange-400 rounded"></div>

            <div>

              <p className="font-semibold text-sm">
                {puzzle.name}
              </p>

              <p className="text-xs text-gray-500">
                {puzzle.plays}
              </p>

            </div>

            <button className="ml-4 border border-blue-600 text-blue-600 px-3 py-1 rounded-full text-sm">
              Solve
            </button>

          </div>

        ))}

      </div>

    </div>

  )

}

export default PuzzleSection