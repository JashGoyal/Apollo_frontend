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
  const [filters, setFilters] = useState({
    specialization: '',
    minExperience: '',
    maxFees: '',
    language: '',
    consultMode: {
      hospitalVisit: false,
      online: false,
    },
  });
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    const url = "http://192.168.1.3:5000/api/doctors/all";
    const fetchDoctors = async () => {
      try {
        const res = await axios.get(url);
        setApollo(res.data);
      } catch (err) {
        console.error("Failed to fetch doctors:", err);
      }
    };

    fetchDoctors();
  }, []);

  useEffect(() => {
    let filtered = apollo;

    if (filters.specialization) {
      filtered = filtered.filter(doc =>
        doc.specialization.toLowerCase().includes(filters.specialization.toLowerCase())
      );
    }

    if (filters.minExperience !== '') {
      filtered = filtered.filter(doc =>
        doc.experience >= Number(filters.minExperience)
      );
    }

    if (filters.maxFees !== '') {
      filtered = filtered.filter(doc =>
        doc.fees <= Number(filters.maxFees)
      );
    }

    if (filters.language) {
      filtered = filtered.filter(doc =>
        doc.languagesSpoken && doc.languagesSpoken.some(lang => lang.toLowerCase() === filters.language.toLowerCase())
      );
    }

    if (filters.consultMode.hospitalVisit || filters.consultMode.online) {
      filtered = filtered.filter(doc => {
        if (filters.consultMode.hospitalVisit && filters.consultMode.online) {
          return (doc.availability && (doc.availability.hospitalVisit || doc.availability.online));
        } else if (filters.consultMode.hospitalVisit) {
          return doc.availability && doc.availability.hospitalVisit;
        } else if (filters.consultMode.online) {
          return doc.availability && doc.availability.online;
        }
        return true;
      });
    }

    setFilteredDoctors(filtered);
  }, [apollo, filters]);

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="pt-32">
      <Header />
      <div className="flex flex-col lg:flex-row justify-center gap-4 px-4">
        <FiltersSidebar onFilter={handleFilter} />
        <DoctorCards apollo={filteredDoctors} />
        <Link href={'/adddoctor'}>
          <button className="flex items-center gap-2 bg-cyan-700 text-white px-4 py-2 rounded-md hover:bg-cyan-800 active:scale-95 transition-transform shadow-md">
            Add Doctor
          </button>
        </Link>
      </div>
    </div>
  );
}
