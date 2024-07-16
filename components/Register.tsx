'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

// import { useRouter } from "next/router";

const Register = () => {
    const router = useRouter();
    const data={
        name:"",
        email:"",
        password:""
    }
    const RegisterUser=async(e:any)=>{
        if(e.target[3].value===e.target[2].value)
        {
            data.name=e.target[0].value;
            data.email=e.target[1].value;
            data.password=e.target[2].value;
            // alert(data)
            localStorage.setItem("data",data.email)
            try {
                const res = await fetch("/api/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      name:data.name,
                      email:data.email,
                      password:data.password
                    }),
                });
                alert(res.status)
                if (res.status === 400) {
                    console.log("This email is already registered");
                }
                if (res.status === 200) {
                    router.push("/login");
                }
            } catch (error) {
                console.log("Error, try again");
                console.log(error);
            }
        }
    }
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Register in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 max-w">
              Or
              <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                  Login an account
              </Link>
          </p>
      </div>
  
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form onSubmit={RegisterUser} className="space-y-6" action="#" method="POST">
              <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        User-Name 
                      </label>
                      <div className="mt-1">
                          <input id="name" name="name" type="text" required
                              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                              placeholder="Enter your Name"  />
                      </div>
                  </div>
                  <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email address
                      </label>
                      <div className="mt-1">
                          <input id="email" name="email" type="email" required
                              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                              placeholder="Enter your email address"    />                   </div>
                  </div>
  
                  <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                          Password
                      </label>
                      <div className="mt-1">
                          <input id="password" name="password" type="password"  required
                              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                              placeholder="Enter your password" />
                      </div>
                  </div>
                  <div>
                      <label htmlFor="confirmpassword" className="block text-sm font-medium text-gray-700">
                         Confirm Password
                      </label>
                      <div className="mt-1">
                          <input id="confirmpassword" name="confirmpassword" type="password"  required
                              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                              placeholder="Enter your password"  />
                      </div>
                  </div>

                  <div>
                      <button type="submit" 
                          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Register
                      </button>
                  </div>
              </form>
              <div className="mt-6">
  
                  <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-300"></div>
                      </div>
                  
                  </div>     
                         </div>
          </div>
      </div>
  </div>
    )
  }
  
  export default Register