import JobCard from "./JobCard";

const JobsFeed = () => {

  const jobs = [
    {
      id:1,
      title:"Frontend Developer – HTML/CSS",
      company:"Soul AI",
      location:"Hyderabad (Remote)"
    },
    {
      id:2,
      title:"Frontend Developer",
      company:"GoodSpace AI",
      location:"India (Remote)"
    }
  ]

  return (

    <div className="flex-1 bg-white border rounded-lg p-4">

      <p className="font-semibold mb-4">
        Top job picks for you
      </p>

      {jobs.map((job)=>(
        <JobCard key={job.id} job={job}/>
      ))}

      <div className="text-center text-sm text-gray-600 mt-3 cursor-pointer">
        Show all →
      </div>

    </div>

  )

}

export default JobsFeed