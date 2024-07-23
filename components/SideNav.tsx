"use client"
import { signOut } from 'next-auth/react';
// import {signOut} from "next-auth/react"
import { useEffect, useRef, useState } from 'react';
const SideNav = () => {

  const loadingRef = useRef<HTMLDivElement>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (loadingRef.current) {
      loadingRef.current.classList.add('hidden');
    }
  }, []);

  return (
    <>
     
     <div className="flex h-screen " style={{backgroundColor:"gray"}}>
      {/* Loading screen */}
      <div
        ref={loadingRef}
        className="fixed inset-0 z-50 flex items-center justify-center text-2xl font-semibold text-white bg-blue-600"
      >
        Loading.....
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 z-10 flex w-[400px] ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300`}
      >
        {/* Curvy shape */}
        <svg
          className="absolute inset-0 w-full h-full text-[#111827]"
          style={{ filter: 'drop-shadow(10px 0 10px #00000030)' }}
          preserveAspectRatio="none"
          viewBox="0 0 309 800"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M268.487 0H0V800H247.32C207.957 725 207.975 492.294 268.487 367.647C329 243 314.906 53.4314 268.487 0Z" />
        </svg>
        
        {/* Sidebar content */}
        <div className="z-10 flex flex-col flex-1">
          <div className="flex items-center justify-between flex-shrink-0 w-64 p-4">
            <a href="#">
              <svg
                aria-hidden="true"
                viewBox="0 0 96 53"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.69141 34.7031L13.9492 28.1992L32.0898 52H40.1758L18.4492 23.418L38.5938 0.8125H30.4375L7.69141 26.125V0.8125H0.941406V52H7.69141V34.7031ZM35.3008 26.9102H52.457V21.6016H35.3008V26.9102ZM89.1914 13V35.5117C89.1914 39.2148 88.1719 42.0859 86.1328 44.125C84.1172 46.1641 81.1992 47.1836 77.3789 47.1836C73.6055 47.1836 70.6992 46.1641 68.6602 44.125C66.6211 42.0625 65.6016 39.1797 65.6016 35.4766V0.8125H58.9219V35.6875C58.9688 40.9844 60.6562 45.1445 63.9844 48.168C67.3125 51.1914 71.7773 52.7031 77.3789 52.7031L79.1719 52.6328C84.3281 52.2578 88.4062 50.5352 91.4062 47.4648C94.4297 44.3945 95.9531 40.4453 95.9766 35.6172V13H89.1914ZM89 8H96V1H89V8Z"
                />
              </svg>
            </a>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-1 rounded-lg focus:outline-none focus:ring"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="sr-only">Close sidebar</span>
            </button>
          </div>
          <nav className="flex flex-col flex-1 w-64 p-4 mt-4 ">
            <a href="#" className="flex items-center space-x-2 w-[250px] h-[40px] rounded-xl bg-blue-600 ">
              <svg
                className="w-6 h-6 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>Home</span>
            </a>
          </nav>
          <div className="flex-shrink-0 p-4">
            <button className="flex items-center space-x-2">
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span onClick={signOut}>Logout</span>
            </button>
          </div>
        </div>
      </div>
      <main className="flex flex-col items-center justify-center flex-1">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="fixed p-2 text-white bg-black rounded-lg top-5 left-5"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span className="sr-only">Open menu</span>
        </button>
        <h1 className="sr-only">Home</h1>
        <a href="https://github.com/kamona-ui" target="_blank" rel="noopener noreferrer">
          <svg
            aria-hidden="true"
            // className="w-20 h-auto text-blue-600"
            viewBox="0 0 96 53"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
                d="M7.69141 34.7031L13.9492 28.1992L32.0898 52H40.1758L18.4492 23.418L38.5938 0.8125H30.4375L7.69141 26.125V0.8125H0.941406V52H7.69141V34.7031ZM35.3008 26.9102H52.457V21.6016H35.3008V26.9102ZM89.1914 13V35.5117C89.1914 39.2148 88.1719 42.0859 86.1328 44.125C84.1172 46.1641 81.1992 47.1836 77.3789 47.1836C73.6055 47.1836 70.6992 46.1641 68.6602 44.125C66.6211 42.0625 65.6016 39.1797 65.6016 35.4766V0.8125H58.9219V35.6875C58.9688 40.9844 60.6562 45.1445 63.9844 48.168C67.3125 51.1914 71.7773 52.7031 77.3789 52.7031L79.1719 52.6328C84.3281 52.2578 88.4062 50.5352 91.4062 47.4648C94.4297 44.3945 95.9531 40.4453 95.9766 35.6172V13H89.1914ZM89 8H96V1H89V8Z"
              />
            </svg>
          </a>
        </main>
      </div>

    </>
  )
}

export default SideNav