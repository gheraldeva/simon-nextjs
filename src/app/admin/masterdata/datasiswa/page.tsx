"use client";

import Banner from "@/components/admin/Banner";
import { Tambahicon } from "@/components/icons/icons";
import WhiteTemplate from "@/components/WhiteTemplate";
import { get } from "@/utils/get";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import Link from "next/link";

export default function DataSiswa() {
  return (
    <div>
      <Banner title="Data Siswa" />
      <Link
        href={"/masterdata/datasiswa/tambahdata"}
        className="absolute bottom-10 right-10 p-2 rounded-full bg-blue-500"
      >
        <Tambahicon />
      </Link>
      <WhiteTemplate>
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn className="border-2 border-black">No.</TableColumn>
            <TableColumn className="border-2 border-black">
              Nama Siswa
            </TableColumn>
            <TableColumn className="border-2 border-black">NIS</TableColumn>
            <TableColumn className="border-2 border-black">
              Kelas/Jurusan
            </TableColumn>
            <TableColumn className="border-2 border-black">
              Guru Pembimbing
            </TableColumn>
            <TableColumn className="border-2 border-black">DU/DI</TableColumn>
            <TableColumn className="border-2 border-black">Act</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell className="border-2 border-black">1.</TableCell>
              <TableCell className="border-2 border-black">CEO</TableCell>
              <TableCell className="border-2 border-black">Active</TableCell>
              <TableCell className="border-2 border-black">Active</TableCell>
              <TableCell className="border-2 border-black">Active</TableCell>
              <TableCell className="border-2 border-black">Active</TableCell>
              <TableCell className="border-2 border-black">:</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </WhiteTemplate>
    </div>
  );
}
