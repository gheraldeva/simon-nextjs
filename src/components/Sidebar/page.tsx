"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";

export default function SideBar() {
  return (
    <div className="w-64 h-[90vh] min-h-max bg-[#1B1D2A] py-10 px-5">
      <div className="flex items-center text-white gap-3 mb-5">
        <Image
          src={"/images/profile_admin.svg"}
          alt="logo"
          width={45}
          height={60}
        />
        <div>
          <h3 className="text-lg font-semibold">Admin</h3>
          <h6 className="text-sm">SMKN 2 MATARAM</h6>
        </div>
      </div>
      <hr />

      <Accordion isCompact>
        <AccordionItem className="text-white" key="1" aria-label="Accordion 1" title="Accordion 1">
          <p>almaka</p>
        </AccordionItem>
        <AccordionItem className="text-white" key="2" aria-label="Accordion 2" title="Accordion 2">
          <p>sihsn</p>
        </AccordionItem>
        <AccordionItem className="text-white" key="3" aria-label="Accordion 3" title="Accordion 3">
          <p>maka</p>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
