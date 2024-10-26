"use client";

import { Badge, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import BellIcon from "./icons/icons";
import axios from "axios";
import { destroyCookie } from "nookies";


export default function Navbar() {
    const handleLogout = () => {
        destroyCookie(null, 'access_token', { path: '/' });
        destroyCookie(null, 'refresh_token', { path: '/' });
        axios.post("http://localhost:2008/auth/logout")
            .then((res) => {
            console.log(res);
            window.location.href = "/login";
            
        })

    }
    return (
        <nav className="bg-gradient-to-r fixed w-[100%] z-20 from-right-linear px-16 to-left-linear h-[10vh] flex justify-between">
            <div className="flex items-center">
                <Image src={"/images/logoSimon.svg"} alt="logo" priority width="70" height="100" />
                <div>
                    <Link href="/"><p className="text-white text-3xl">Simon<strong>PKL</strong></p></Link>
                    <p className="text-white text-[0.6rem]">Solusinya PKL!</p>
                </div>
            </div>
            <div className="flex flex-row items-center">
                <Link href="/notification">
                    <Badge content="2" color="danger" shape="circle" placement="top-right">
                        <BellIcon />
                    </Badge>
                </Link>
                <Dropdown>
                    <DropdownTrigger>
                        <div className="cursor-pointer flex items-center">
                            <Image className="ml-5" src={"/images/profileIcon.svg"} alt="profile and arrow" width="20" height="20" />
                            <Image className="ml-1  " src={"/images/leftArrowBlack.svg"} alt="profile and arrow" width="15" height="15" />
                        </div>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions" className="w-[100px] rounded-md bg-white">
                        <DropdownItem href="/login" key="new">Log In</DropdownItem>
                        <DropdownItem onClick={() => handleLogout()} key="copy">Log Out</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>


        </nav>
    );
}