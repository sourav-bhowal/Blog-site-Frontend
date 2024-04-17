"use client"
import {About} from "@/components/About";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import Posts from "@/components/Posts";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";


export default function Home() {

  const router = useRouter();

  useEffect(() => {
    const response = axios.post(`${process.env.API_URL}/api/v1/users/verifyUser`)
    response.then((res) => {
      console.log("verified")
    })
    response.catch((err) => {
      console.log(err)
      router.push("/login")
    })
  });
  
  return (
    <main className="min-h-screen bg-slate-500/15 antialiased">
      <HeroSection />
      <Posts />
      <About />
      {/* <Bloggers /> */}
      <Contact />
    </main>
  );
}
