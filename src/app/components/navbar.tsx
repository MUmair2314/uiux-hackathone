import React from "react";
import { LuPhone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
export default function navbar() {
    return (
        <header>

            <div className="bg-black text-white py-2 flex justify-between items-centerw-full px-6 font-bold">
                <div className=" hidden md:flex space-x-8 items-center">
                    <div className="text-left flex-1 hidden md:flex space-x-2 items-center text-sm  ">

                        <LuPhone />  <div >(225)555-0118 </div> </div>

                    <div className="text-left flex-1 hidden md:flex space-x-2 items-center text-sm   ">  <TfiEmail />
                        <div> michele.rivera@example.com</div>
                    </div>
                </div>
                <div className="text-center flex-1 text-sm ">

                    Follow Us to get a chance to win 80% off   </div>

                <div className="text-sm px-2">Follow Us : </div>
                <div className=" text-left flex-2 hidden md:flex space-x-4 ">
                    <FaInstagram />
                    <FaYoutube />
                    <FaFacebook />
                    <FaTwitter />
                </div>
            </div>
            <div className="flex justify-between items-center px-8 py-4">
                    <h1 className="text-2xl font-bold text-black ">Bandage</h1>
                    <nav className="hidden md:flex space-x-6 items-center ">

                        <a href="#" className="text-slate-600 hover:text-black ">Home</a>

                        <a href="#" className="text-slate-600 hover:text-black md:flex ">Shop <IoIosArrowDown /> </a>
                       

                        <a href="#" className="text-slate-600 hover:text-black ">About</a>

                        <a href="#" className="text-slate-600 hover:text-black ">Blog</a>

                        <a href="#" className="text-slate-600 hover:text-black ">Contact</a>

                        <a href="#" className="text-slate-600 hover:text-black ">Pages</a>

                    </nav>
                    <div className="flex items-center space-x-6">
                        
                          <div className="text-sky-400 font-bold flex mx:auto space-x-2">
                    <IoPersonOutline /> <p>Login / Resgister </p>  </div>

                <div className="text-sky-400 flex item-center space-x-4">
                <BsSearch />
                <BsCart /> 1
                <AiOutlineHeart /> 1






                </div>

                </div>



            </div>

        </header>
    )
}