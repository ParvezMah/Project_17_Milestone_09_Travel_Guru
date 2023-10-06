import { Link } from "react-router-dom";


const Destination = () => {
    return (
        <div className="flex flex-col gap-5 w-[100vw] h-[100vh] justify-center items-center">
            <h2 className="text-5xl  font-bold">This page is not ready yet</h2>
            <div>
                <Link to="/"><button className="btn btn-accent text-white">Go back</button></Link>
            </div>
        </div>
    );
};

export default Destination;