"use client";


import axios from "axios";
import React, { useEffect } from "react";

const Laporan = () => {
  useEffect(() => {
    axios.get
  }, []);

  return (
    <div className="">
      <h1 className="flex justify-center text-center text-xl font-bold">Laporan Saya</h1>
      <div className="">
        <span >Juni</span>
      </div>
    </div>
  );
};

export default Laporan;
