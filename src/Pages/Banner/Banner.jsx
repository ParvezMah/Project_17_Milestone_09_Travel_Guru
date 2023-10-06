import { Link } from "react-router-dom";


const Banner = () => {
    return (
            <div className="flex  min-h-[90vh] bg-base-200">
            <div className="hero-content flex flex-col justify-between lg:flex-row-reverse">
                <div className="flex gap-5">
                    <img width={200} height={60} src="../../../public/images/Rectangle 1.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <img width={200} height={60} src="../../../public/images/Sreemongol.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <img width={200} height={60} src="../../../public/images/sundorbon.png" className="max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div className="flex-1">
                    <h1 className="text-8xl font-bold">Coxs bazar</h1>
                    <p className="py-6">Coxs Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    <Link to='/booking'><button className="btn bg-[#F9A51A]">Booking</button></Link>
                </div>
            </div>
            </div>  
    );
};

export default Banner;