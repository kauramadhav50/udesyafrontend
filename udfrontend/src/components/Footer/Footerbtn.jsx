import {Link} from 'react-router-dom'

const Footerbtn = ({ Name,icon, path }) => {
    console.log(Name);
    return (
        <div>
            <Link to={path} className="flex flex-col items-center gap-1">
                {icon}
                <p className="text-[12px] font-bold">{Name}</p>
            </Link>
        </div>
    )
}

export default Footerbtn
