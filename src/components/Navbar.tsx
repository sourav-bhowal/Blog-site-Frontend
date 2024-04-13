"use client"
import React, { useState } from 'react'
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import axios from 'axios';


const Navbar = ({ className }: { className?: string }) => {

  const router = useRouter();
  
  const [active, setActive] = useState<string | null>(null);
  return (
      <div className=''>
          <Menu setActive={setActive}>

            <Link href={"/"}>
                <MenuItem setActive={setActive} active={active} item="Home"/>   
            </Link>

            <Link href={"#posts"}>
              <MenuItem setActive={setActive} active={active} item="Blogs" />
            </Link>

            <Link href={"#about"}>
              <MenuItem setActive={setActive} active={active} item="Testimonials" />
            </Link>

            <Link href={"#bloggers"}>
              <MenuItem setActive={setActive} active={active} item="Bloggers" />
            </Link>
          
            <Link href={"#contact"}>
              <MenuItem setActive={setActive} active={active} item="About" />
            </Link>

          </Menu>

      </div>
  )
};

export default Navbar