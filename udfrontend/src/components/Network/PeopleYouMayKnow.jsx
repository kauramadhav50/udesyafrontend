const PeopleYouMayKnow = () => {

  const users = [
    { id:1, name:"Rahul Sharma", role:"Frontend Developer"},
    { id:2, name:"Amit Verma", role:"Backend Developer"},
    { id:3, name:"Karan Singh", role:"Software Engineer"},
    { id:4, name:"Priya Mehta", role:"UI Designer"}
  ]

  return (

    <div className="bg-white border rounded-lg p-4">

      <div className="flex justify-between mb-4">

        <p className="font-semibold">
          People you may know
        </p>

        <button className="text-sm text-gray-600">
          Show all
        </button>

      </div>


      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {users.map((user)=> (

          <div key={user.id} className="border rounded-lg p-3 text-center">

            <div className="h-16 bg-gray-200 rounded mb-2"></div>

            <img
              src="/logo.png"
              className="w-16 h-16 rounded-full mx-auto -mt-8 border-4 border-white"
            />

            <p className="font-semibold text-sm mt-2">
              {user.name}
            </p>

            <p className="text-xs text-gray-500 mb-3">
              {user.role}
            </p>

            <button className="border border-blue-600 text-blue-600 px-3 py-1 rounded-full text-sm">
              Connect
            </button>

          </div>

        ))}

      </div>

    </div>

  )

}

export default PeopleYouMayKnow