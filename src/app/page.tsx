'use client';

import Header from "./components/Header";
import FiltersSidebar from "./components/FilterSideBar";
import DoctorCards from "./components/DoctorCards";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from "next/link";

type Doctor = {
  _id: string;
  name: string;
  specialization: string;
  experience: number;
  qualifications: string[];
  fees: number;
  cashback: number;
  languagesSpoken: string[];
  profileImage: string;
  clinicName: string;
  rating: number;
  totalReviews: number;
  location: {
    city: string;
    state: string;
  };
  availability: {
    online: boolean;
    hospitalVisit: boolean;
    nextAvailableInMinutes: number;
  };
};

type Filters = {
  specialization: string;
  minExperience: string;
  maxFees: string;
  language: string;
  consultMode: {
    hospitalVisit: boolean;
    online: boolean;
  };
};

export default function Home() {
  const [apollo, setApollo] = useState<Doctor[]>([]);
  const [filters, setFilters] = useState<Filters>({
    specialization: '',
    minExperience: '',
    maxFees: '',
    language: '',
    consultMode: {
      hospitalVisit: false,
      online: false,
    },
  });
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    const url = "https://apollo-backend-rsst.onrender.com/api/doctors/all";
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
        doc.languagesSpoken &&
        doc.languagesSpoken.some(
          lang => lang.toLowerCase() === filters.language.toLowerCase()
        )
      );
    }

    if (filters.consultMode.hospitalVisit || filters.consultMode.online) {
      filtered = filtered.filter(doc => {
        if (!doc.availability) return false;
        if (filters.consultMode.hospitalVisit && filters.consultMode.online) {
          return doc.availability.hospitalVisit || doc.availability.online;
        } else if (filters.consultMode.hospitalVisit) {
          return doc.availability.hospitalVisit;
        } else if (filters.consultMode.online) {
          return doc.availability.online;
        }
        return true;
      });
    }

    setFilteredDoctors(filtered);
  }, [apollo, filters]);

  const handleFilter = (newFilters: Filters) => {
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
