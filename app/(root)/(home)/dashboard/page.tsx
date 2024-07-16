'use client'
import SideNav from '@/components/SideNav'
import UserCard from '@/components/UserCard'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import {  useSession } from "next-auth/react";

const PersonalRoom = async() => {
   const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();
  useEffect(() => {
      if (sessionStatus !== "authenticated") {
          router.replace("/login");
      }
  }, [sessionStatus, router]);


  return (
<section className="flex" > 
    <SideNav  />
    <div className="ml-[300px] mt-10 grid grid-cols-3 gap-5">
     <UserCard />
    
    </div>
   </section>
  )
}

export default PersonalRoom