import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TravelAuthContext } from "../../Components/AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash, FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../Firebase/firebase.config";


const Login = () => { 
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const {signInUser, signInWithGoogle} = useContext(TravelAuthContext);
    const [success, setSuccess] = useState('');
    const [registerError, setRegisterError] = useState('');
    const emailRef = useRef(null);
    const navigate = useNavigate()

    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);


        //reset success message befor new user submit
        setSuccess('');
        //reset error message befor new user submit
        setRegisterError('');

        //sign in user
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User logged In Successfully')
                e.target.reset();
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message)
            })
    }

    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        console.log('forgetPasswowrd Mail : ', email);
        if(!email){
            console.log('Please Provide an Email');
            return;
        }
        if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)){
            console.log('Please Write a valid email');
            return;
        }

        //password reset mail
        sendPasswordResetEmail(auth, email)
            .then(()=>{
                alert('Please check your email inbox')
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
            <div>
                <div>
                    <div className="hero mx-auto w-[90vh] mt-10">
                        <div className="bg-blue-300">

                            <div className="flex-shrink-0 w-full shadow-2xl bg-base-100 p-10">
                            <form onSubmit={handleLogin} className="flex-grow my- p-5">
                                <h2 className="text-4xl font-bold py-3">Login</h2>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Username or Email</span>
                                </label>
                                <input type="email" ref={emailRef} name="email" placeholder="Username or Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text font-bold">Password</span>
                                    </label>
                                    <input  type={showLoginPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                                    <span onClick={()=>setShowLoginPassword(!showLoginPassword)} className="absolute text-2xl top-12 right-3">
                                        {
                                            showLoginPassword ? <FaEyeSlash></FaEyeSlash>
                                                            : <FaEye></FaEye>
                                        }
                                    </span>
                                </div>
                                <div className="flex items-center gap-20 my-2">
                                    <div className="flex items-center">
                                        <input className="mr-2" type="checkbox" name="Remember" id="Remember" />
                                        <label htmlFor="Remember">Remember Me</label>
                                    </div>
                                    <label className="label">
                                    <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                  
                                <div className="form-control mt-6">
                                <button className="btn bg-[#F9A51A]">Login</button>
                                </div>
                            </form>
                            <p className="text-lg text-center">Dont have any Account? <Link to="/register" className="underline text-[#F9A51A] text-lg font-bold">Register</Link> </p>
                            {
                                success && <p className="text-green-500 text-xl font-bold text-center pt-4">{success}</p>
                            }
                            {
                                registerError && <p className="text-red-500 text-xl font-bold text-center pt-4">{registerError}</p>
                            }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full border-opacity-50">
                    <div>
                        <div className="divider my-10 mx-auto w-1/2">OR</div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <div className="border-2 rounded-full w-[430px]"><Link onClick={handleGoogleSignIn} className="btn rounded-full m-2 btn-error"><FaGoogle className="text-white text-lg"></FaGoogle></Link><span className="text-center font-bold">Continue with Google</span></div>
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

export default Login;