"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
import MasterData from "./icons/MasterData/page";
import Laporan from "./icons/Laporan/page";
import PelaksanaanPKL from "./icons/PelaksanaanPKL/page";
import Link from "next/link";
import Home from "./icons/Home/page";
import { SideArrow } from "./icons/SideArrow/page";
import ArrowDown from "./icons/ArrowDown/page";

interface SideBarProps {
  className?: string;
}

export function SidebarAdmin() {
  return (
    <div className="w-[18%] h-[100%] fixed top-[10vh] min-h-max bg-[#1B1D2A] py-10 px-4">
      <div className="flex items-center text-white gap-3 mb-5">
        <Image
          src={"/images/profileAdmin.svg"}
          alt="logo"
          width={45}
          height={60}
        />
        <div>
          <h3 className="text-lg font-semibold">Admin</h3>
          <h6 className="text-sm">SMKN 2 MATARAM</h6>
        </div>
      </div>
      <hr className="mb-8" />
      <div className="w-full">
        <Accordion isCompact>
          <AccordionItem
            startContent={<Home />}
            indicator
            isDisabled
            className="text-white"
            key="0"
            aria-label="Home"
            title={<p className="text-white">Home</p>}
          ></AccordionItem>
          <AccordionItem
            startContent={<MasterData />}
            className="text-white"
            key="1"
            aria-label="MasterData"
            title={<p className="text-white">MasterData</p>}
            indicator={({ isOpen }) => (isOpen ? <ArrowDown /> : <SideArrow />)}
          >
            <ul className="">
              <hr />
              <li>
                <Link href="/masterdata/datasiswa">
                  <p className="text-white">Data Siswa</p>
                  <p className="">Data Siswa</p>
                </Link>
              </li>
              <hr />
              <li>
                <Link href="/masterdata/dataguru">
                  <p>Data Guru</p>
                </Link>
              </li>
              <hr />
              <li>
                <Link href="/masterdata/datadudi">
                  <p>Data DU/DI</p>
                </Link>
              </li>
              <hr />
            </ul>
          </AccordionItem>
          <AccordionItem
            startContent={<PelaksanaanPKL />}
            className="text-white"
            key="2"
            aria-label="Pelaksanaan PKL"
            title={<p className="text-white">Pelaksanaan PKL</p>}
            indicator={({ isOpen }) => (isOpen ? <ArrowDown /> : <SideArrow />)}
          >
            <ul>
              <hr />
              <li>
                <Link href="/masterdata/datasiswa">
                  <p>Absen Siswa</p>
                </Link>
              </li>
              <hr />
            </ul>
          </AccordionItem>
          <AccordionItem
            startContent={<Laporan />}
            className="text-white"
            key="3"
            aria-label="Laporan"
            title={<p className="text-white">Laporan</p>}
            indicator={({ isOpen }) => (isOpen ? <ArrowDown /> : <SideArrow />)}
          >
            <ul>
              <hr />
              <li>
                <Link href="/masterdata/datasiswa">
                  <p>Laporan Siswa</p>
                </Link>
              </li>
              <hr />
              <li>
                <Link href="/masterlaporan/laporansiswa">
                  <p>Laporan DU/DI</p>
                </Link>
              </li>
              <hr />
            </ul>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export const SidebarSiswa: React.FC<SideBarProps> = ({ className }) => {
  return (
    <div
      className={`w-[18%] h-[90vh] fixed bottom-0 bg-[#1B1D2A] py-10 px-4 ${className}`}
    >
      <div className="flex items-center text-white gap-3 mb-5">
        <Image
          src="/images/profileAdmin.svg"
          alt="Admin Logo"
          width={45}
          height={60}
          className="w-12 h-12"
        />
        <div>
          <h3 className="text-lg font-semibold">Siswa</h3>
          <h6 className="text-sm">SMKN 2 MATARAM</h6>
        </div>
      </div>
      <hr className="mb-8" />
      <ul className="text-white space-y-6">
        <li>
          <Link href="/siswa/home" className="hover:text-gray-400">
            <div className="flex items-center gap-3">
              <Home />
              <span>Home</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/siswa/laporan" className="hover:text-gray-400">
            <div className="flex items-center gap-3">
              <Laporan />
              <span>Laporan</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/siswa/profile" className="hover:text-gray-400">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 18.364A9 9 0 0112 15c2.39 0 4.584.93 6.121 2.364M15 11a3 3 0 11-6 0 3 3 0 016 0zm-3 9a9 9 0 110-18 9 9 0 010 18z"
                />
              </svg>
              <span>Profile</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export const SidebarSiswaProfile: React.FC<SideBarProps> = ({ className }) => {
  return (
    <div
      className={`w-[18%] h-[100vh] fixed bottom-0 bg-[#1B1D2A] py-10 px-4 ${className}`}
    >
      <div className="flex items-center text-white gap-3 mb-5">
        <Image
          src="/images/profileAdmin.svg"
          alt="Admin Logo"
          width={45}
          height={60}
          className="w-12 h-12"
        />
        <div>
          <h3 className="text-lg font-semibold">Siswa</h3>
          <h6 className="text-sm">SMKN 2 MATARAM</h6>
        </div>
      </div>
      <hr className="mb-8" />
      <ul className="text-white space-y-6">
        <li>
          <Link href="/siswa/home" className="hover:text-gray-400">
            <div className="flex items-center gap-3">
              <Home />
              <span>Home</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/siswa/laporan" className="hover:text-gray-400">
            <div className="flex items-center gap-3">
              <Laporan />
              <span>Laporan</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/siswa/profile" className="hover:text-gray-400">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 18.364A9 9 0 0112 15c2.39 0 4.584.93 6.121 2.364M15 11a3 3 0 11-6 0 3 3 0 016 0zm-3 9a9 9 0 110-18 9 9 0 010 18z"
                />
              </svg>
              <span>Profile</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};
