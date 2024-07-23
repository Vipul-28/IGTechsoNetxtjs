'use client'
import SideNav from '@/components/SideNav'
import UserCard from '@/components/UserCard'
import { redirect, useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import {  useSession } from "next-auth/react";

const Dashboard = () => {
   const router = useRouter();
   
  const { data: session, status: sessionStatus } = useSession();
  useEffect(() => {
      if (sessionStatus != "authenticated") {
          redirect("/login");
      }
  }, [sessionStatus, router]);

  useEffect(() => {
    if (sessionStatus != "authenticated") {
        router.replace("/login");
    }
}, []);


  return (
<section className="flex" > 
    <SideNav />
    <div className="ml-[500px] mt-10 grid grid-cols-1 gap-5">
     <UserCard /> 
    </div>
   </section>
  )
}

export default Dashboard