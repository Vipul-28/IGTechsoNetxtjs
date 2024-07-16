'use client'
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
 
const Login = () => {
     const router = useRouter();
    const { data: session, status: sessionStatus } = useSession();
 
    useEffect(() => {
        if (sessionStatus === "authenticated") {
            router.replace("/dashboard");
        }
    }, [sessionStatus, router]);
 
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        if (!password || password.length < 8) {
            alert("Password is invalid");
            return;
        }
 
        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });
        console.log("GGG",res);
        if (res?.error) {
            if (res?.url) router.replace("/dashboard");
        } else {
        }
 
    };
    if (sessionStatus === "loading") {
        return <h1>Loading...</h1>;
    }
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 max-w">
            Or
            <Link href="/register" className="font-medium text-blue-600 hover:text-blue-500">
                create an account
            </Link>
        </p>
    </div>

    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address
                    </label>
                    <div className="mt-1">
                        <input id="email" name="email" type="email" required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Enter your email address" />
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <div className="mt-1">
                        <input id="password" name="password" type="password" required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Enter your password" />
                    </div>
                </div>

                
                <div>
                    <button type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

                        Sign in
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

export default Login