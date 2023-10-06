import { useContext } from "react";
import { Link, NavLink } from "react-router-dom"
import { TravelAuthContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {
    const {user, logOut} = useContext(TravelAuthContext);

    const handlLogOut = () =>{
        logOut()
            .then(()=>{
                console.log('User Logged Out Successfully');
            })
            .catch(error => console.log(error));
    }
        

    const navLinks = <>
                        <li><NavLink className="text-lg" to="/">Home</NavLink></li>
                        <li><NavLink className="text-lg" to="/news">News</NavLink></li>
                        <li><NavLink className="text-lg" to="/destination">Destination</NavLink></li>
                        <li><NavLink className="text-lg" to="/blog">Blog</NavLink></li>
                        <li><NavLink className="text-lg" to="/contact">Contact</NavLink></li>
                    </>
    return (
            <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLinks}
                </ul>
                
                </div>
                <Link to="/"><img className="mr-10 sm:hidden md:inline" src="../../../public/logo.png" width={120} alt="" /></Link>
                <div className="">
                    <input type="text" placeholder="Search" className="input input-bordered w-[40px] md:w-[370px] " />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">

            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
                {
                    user ? <Link onClick={handlLogOut} to="/login"><a className="btn bg-[#F9A51A] font-bold ">Sign Out</a></Link>
                         : <Link to="/login"><a className="btn bg-[#F9A51A] font-bold">Login</a></Link>
                }
            </div>
            </div>
    );
};

export default Navbar;