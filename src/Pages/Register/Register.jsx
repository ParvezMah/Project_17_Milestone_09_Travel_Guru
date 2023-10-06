import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TravelAuthContext } from "../../Components/AuthProvider/AuthProvider";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash, FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";


const Register = () => {
    const [showPassword1, setShowPasswrod1] = useState(false);
    const [showConfirmPasswrod, setShowConfirmPassword] = useState(false);
    const {createUser,user}  = useContext(TravelAuthContext);
    const [success, setSuccess] = useState('');
    const [registerError, setRegisterError] = useState('');


    const handleRegister = e => {
        e.preventDefault();
        console.log('e.currentTarget ', e.currentTarget);
        const form = new FormData(e.currentTarget);
        const firstName = form.get('firstname');
        const lastName = form.get('lastname');
        const email = form.get('email');
        const password = form.get('password');
        const confirmPassword = form.get('confirmPassword');
        const accepted = e.target.terms.checked;
        console.log(firstName, lastName, email, password, confirmPassword, accepted);

        //2. Password Validation
        if(password.length < 6){
            setRegisterError('Password should be at least 6 characters or longer');
            return; //so that Rest of code does not need to run
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError('Password should be at least One UpperCase Character');
            // Must use return while validation 
            return;
        }
        else if(!accepted){
            setRegisterError('Please Accept our terms and conditions');
            return;
        }
        else if(password !== confirmPassword){
            setRegisterError('Password Does not Matched');
            return;
        }


        //reset success message befor new user submit
        setSuccess('');
        //reset error message befor new user submit
        setRegisterError('');


        // creating User
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('Account Created successfully!')


                //1. updating user's profile
                updateProfile(result.user, {
                    displayName: firstName,
                    photoURL: user.photoURL || "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                })

                // 2. Send Verification mail
                sendEmailVerification(result.user)
                    .then(()=>{
                        alert('Please Check your mail Inbox');
                    })
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })
    }

    return (
    <div>
        <div>
            <div className="hero mx-auto mt-10">
                <div className="bg-blue-300">

                    <div className="flex-shrink-0 w-full shadow-2xl bg-base-100 p-10">
                    <form onSubmit={handleRegister} className="flex-grow my- p-5">
                        <h2 className="text-4xl font-bold py-3">Create an account</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">First Name</span>
                            </label>
                            <input type="text" name="firstname"  className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Last Name</span>
                            </label>
                            <input type="text" name="lastname"  className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" name="email"  className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                                <input type={showPassword1 ? "text" :"password"} name="password"  className="input input-bordered" required />
                                <span onClick={()=>setShowPasswrod1(!showPassword1)} className="absolute text-2xl top-12 right-3">
                                    {
                                        showPassword1 ? <FaEyeSlash></FaEyeSlash>
                                                     : <FaEye></FaEye>  
                                    }
                                </span>
                         </div>
                         <div className="form-control relative">
                            <label className="label">
                                <span className="label-text font-bold">Confirm Password</span>
                            </label>
                            <input type={showConfirmPasswrod ? "text" :"password"} name="confirmPassword"  className="input input-bordered" required />
                            <span onClick={()=>setShowConfirmPassword(!showConfirmPasswrod)} className="absolute text-2xl top-12 right-3">
                                {
                                    showConfirmPasswrod ? <FaEyeSlash></FaEyeSlash>
                                                : <FaEye></FaEye>  
                                }
                            </span>
                            <div className="pt-2">
                                <input type="checkbox" name="" id="terms" />
                                <label className="ml-2" htmlFor="terms">Accept Our <a href="https://policies.google.com/terms?hl=en-US">Terms and Conditions</a></label>
                            </div>
                        </div>
          
                        <div className="form-control mt-6">
                        <button className="btn bg-[#F9A51A]">Create an Account</button>
                        </div>
                    </form>
                    <p className="text-lg text-center">Already have an Account? <Link to="/login" className="underline text-[#F9A51A] text-lg font-bold">Login</Link> </p>
                    {
                        success && <p className="text-green-400 font-bold text-2xl pt-4">{success}</p>
                    }
                    {
                        registerError && <p className="text-red-400 font-bold text-2xl pt-4">{registerError}</p>
                    }
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col w-full border-opacity-50">
            <div>
                <div className="divider my-10 mx-auto w-1/2">OR</div>
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <div className="border-2 rounded-full w-[430px]"><Link className="btn rounded-full m-2 btn-error"><FaGoogle className="text-white text-lg"></FaGoogle></Link><span className="text-center font-bold">Continue with Google</span></div>
                        <div className="border-2 rounded-full w-[430px]"><Link className="btn rounded-full m-2 btn-neutral"><FaGithub className="text-white text-lg"></FaGithub></Link><span className="text-center font-bold">Continue with Github</span></div>
                        <div className="border-2 rounded-full w-[430px]"><Link className="btn rounded-full m-2 btn-info"><FaTwitter className="text-white text-lg"></FaTwitter></Link><span className="text-center font-bold">Continue with Twitter</span></div>
                        <div className="border-2 rounded-full w-[430px]"><Link className="btn rounded-full m-2 bg-blue-400"><FaFacebook className="text-white text-lg"></FaFacebook></Link><span className="text-center font-bold">Continue with Facebook</span></div>
                        <div className="border-2 rounded-full w-[430px]"><Link className="btn rounded-full m-2 bg-violet-500"><FaInstagram className="text-white text-lg"></FaInstagram></Link><span className="text-center font-bold">Continue with Instagram</span></div>
                    </div>
            </div>
        </div>
    </div>
    );
};

export default Register;