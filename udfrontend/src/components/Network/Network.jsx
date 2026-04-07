import NetworkSidebar from "./NetworkSidebar"
import Grow from "./Grow"

const Network = () => {

  return (

    <div className="pt-4">

      <div className="max-w-[1100px] mx-auto flex gap-5 px-2">

        <div className="hidden md:block w-[250px]">
          <NetworkSidebar />
        </div>

        <Grow />

      </div>

    </div>

  )

}

export default Network