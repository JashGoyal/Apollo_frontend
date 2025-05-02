'use client';
import Header from "./components/Header";
import FiltersSidebar from "./components/FilterSideBar";
import DoctorCards from "./components/DoctorCards";
import AddDoctor from "./components/AddDoctor";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from "next/link";

export default function Home() {
  const [apollo, setApollo] = useState([]);

  useEffect(() => {
    const url = "http://192.168.1.3:5000/api/doctors/all";
    axios
      .get(url)
      .then((res) => setApollo(res.data))
      .catch((err) => console.error("Failed to fetch doctors:", err));
  }, []);

  return (
    <div className="pt-32">
      <Header />
      <div className="flex flex-col lg:flex-row justify-center gap-4 px-4">
        <FiltersSidebar />
        <DoctorCards apollo={apollo} />
        <Link href={'/adddoctor'}>
          <button className="flex items-center gap-2 bg-cyan-700 text-white px-4 py-2 rounded-md hover:bg-cyan-800 active:scale-95 transition-transform shadow-md"
          >Add Doctor</button>
        </Link>
      </div>
    </div>
  );
}
