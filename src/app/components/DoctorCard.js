'use client';
// import Image from 'next/image';

export default function DoctorCard({ doctor }) {
  return (
    <div className="border border-gray-200 rounded-2xl p-6 bg-white flex items-start gap-6 shadow-md">

      <img
        src={doctor.profileImage}
        alt={doctor.name}
        width={100}
        height={100}
        className="rounded-lg object-cover"
      />
      <div className="flex-1 min-w-0">
        <h2 className="font-semibold text-2xl text-gray-900">{doctor.name}</h2>
        <p className="text-base text-gray-600">{doctor.specialization}</p>
        <p className="text-base text-blue-600 font-medium">
          {doctor.experience} YEARS • {doctor.qualifications.join(', ')}
        </p>
        <p className="text-base text-gray-500 break-words">
          {doctor.clinicName} - {doctor.location.state}, {doctor.location.city}
        </p>
      </div>
      
      <div className="flex flex-col items-end justify-between h-full gap-3">
        <p className="text-2xl font-bold text-gray-900 whitespace-nowrap">₹{doctor.fees}</p>
        <button className="border border-blue-500 text-blue-600 text-base font-semibold px-4 py-2 rounded hover:bg-blue-50">
          Consult Online
        </button>
      </div>
    </div>
  );
}
