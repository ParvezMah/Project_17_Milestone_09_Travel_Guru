import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div>
        <div>
            <div className="hero mx-auto w-[90vh] mt-10">
                <div className="bg-blue-300">

                    <div className="flex-shrink-0 w-full shadow-2xl bg-base-100 p-10">
                    <form className="flex-grow my- p-5">
                        <h2 className="text-4xl font-bold py-3">Create an account</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">First Name</span>
                            </label>
                            <input type="text" name="Firstname"  className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Last Name</span>
                            </label>
                            <input type="text" name="Lastname"  className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Username or Email</span>
                            </label>
                            <input type="email" name="email"  className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name="Password"  className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Confirm Password</span>
                            </label>
                            <input type="password" name="ConfirmPassword"  className="input input-bordered" required />
                        </div>
          
                        <div className="form-control mt-6">
                        <button className="btn bg-[#F9A51A]">Create an Account</button>
                        </div>
                    </form>
                    <p className="text-lg text-center">Already have an Account? <Link to="/login" className="underline text-[#F9A51A] text-lg font-bold">Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;