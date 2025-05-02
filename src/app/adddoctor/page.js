'use client';

import AddDoctor from "../components/AddDoctor";
import Link from "next/link";

export default function AddDoctorPage() {
  return (
    <div className="min-h-screen pt-32 px-4">
      <div className="mb-4">
        <Link href="/">
          <button className="text-blue-600 underline hover:text-blue-800">← Back to Home</button>
        </Link>
      </div>
      <AddDoctor />
    </div>
  );
}
