import { Link } from "react-router-dom";


const Login = () => {
    return (
            <div>
                <div>
                    <div className="hero mx-auto w-[90vh] mt-10">
                        <div className="bg-blue-300">

                            <div className="flex-shrink-0 w-full shadow-2xl bg-base-100 p-10">
                            <form className="flex-grow my- p-5">
                                <h2 className="text-4xl font-bold py-3">Login</h2>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Username</span>
                                </label>
                                <input type="text" name="Origin" placeholder="Username or Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Destination</span>
                                </label>
                                <input type="text" name="Destination" placeholder="password" className="input input-bordered" required />
                                <div className="flex items-center gap-20 my-2">
                                    <div className="flex items-center">
                                        <input className="mr-2" type="checkbox" name="Remember" id="Remember" />
                                        <label htmlFor="Remember">Remember Me</label>
                                    </div>
                                    <div>
                                        <Link className="underline">Forgot password?</Link>
                                    </div>
                                </div>
                                </div>
                  
                                <div className="form-control mt-6">
                                <button className="btn bg-[#F9A51A]">Login</button>
                                </div>
                            </form>
                            <p className="text-lg text-center">Dont have any Account? <Link to="/register" className="underline text-[#F9A51A] text-lg font-bold">Login</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Login;