"use client"
import {getServerSession} from "next-auth";
import {signOut} from "next-auth/react"
import { redirect } from "next/navigation";
const SideNav = () => {
 
  return (
    <>
     <div
      className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900"
    >
      <div className="text-gray-100 text-xl">
        <div className="p-2.5 mt-1 flex items-center">
          <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
          {/* <h1 className="font-bold text-gray-200 text-[30px] ml-3">Welcome {session?.user?.name}</h1> */}
        </div>
          {/* <h1 className="font-bold text-gray-200 text-[15px] ml-3">Your Email : {session?.user?.email}</h1> */}
        <div className="my-2 bg-gray-600 h-[1px]"></div>
      </div>
      <div
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-blue-600 text-white">
        <i className="bi bi-house-door-fill"></i>
        <span className="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
      </div> 
      <div
        className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer text-white"
      >
        <i className="bi bi-box-arrow-in-right"></i>
        <button className="text-[15px] ml-4 text-gray-200 font-bold" onClick={signOut}>Logout</button>
      </div>
    </div>

    </>
  )
}

export default SideNav