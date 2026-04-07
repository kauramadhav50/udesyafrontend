const JobCard = ({ job }) => {

  return (

    <div className="flex justify-between items-center border-b py-4">

      <div className="flex gap-3">

        <div className="w-12 h-12 bg-gray-200 rounded"></div>

        <div>

          <p className="text-blue-600 font-semibold text-sm">
            {job.title}
          </p>

          <p className="text-xs text-gray-600">
            {job.company}
          </p>

          <p className="text-xs text-gray-500">
            {job.location}
          </p>

        </div>

      </div>

      <button className="text-gray-400 text-xl">
        ×
      </button>

    </div>

  )

}

export default JobCard