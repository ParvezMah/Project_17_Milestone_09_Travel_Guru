

const StartBooking = () => {
    return (
        <div>
        <div>
            
        </div>
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="flex justify-between gap-20 ">
                    <div className=" lg:text-left">
                        <h1 className="text-8xl font-bold">Coxs bazar</h1>
                        <p className="py-6">Coxs Bazar is a city, fishing port, tourism centre and district headquarters <br /> in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, <br /> and it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cupiditate atque <br />  libero ab dignissimos ullam impedit quisquam necessitatibus voluptate voluptatum. ...</p>    
                    </div>
                    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form  className="flex-grow my- p-5">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Origin</span>
                        </label>
                        <input type="text" name="Origin" placeholder="Dhaka" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Destination</span>
                        </label>
                        <input type="text" name="Destination" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control">
                            <div className="flex gap-3">
                                <div>
                                    <label className="label">
                                        <span className="label-text font-bold">From</span>
                                    </label>
                                    <input type="date" name="From" placeholder="Dhaka" className="input input-bordered" required />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text font-bold">To</span>
                                    </label>
                                    <input type="date" name="To" placeholder="Dhaka" className="input input-bordered" required />
                                </div>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn bg-[#F9A51A]">Start Booking</button>
                        </div>
                    </form>
                    </div>
                </div>
        </div>
        </div>
    </div>
    );
};

export default StartBooking;