'use client';
import Image from 'next/image';

export default function DoctorCard({ doctor }) {
  return (
    <div className="border rounded-lg shadow-sm p-4 bg-white flex flex-col gap-2">
      <div className="flex items-start gap-4">
        <Image
          src={doctor.profileImage}
          alt={doctor.name}
          width={80}
          height={80}
          className="rounded-full"
        />
        <div>
          <h2 className="font-bold text-lg text-gray-800">{doctor.name}</h2>
          <p className="text-sm text-gray-600">{doctor.specialization}</p>
          <p className="text-sm text-gray-500">
            {doctor.clinicName} — {doctor.location.city}, {doctor.location.state}
          </p>
          <p className="text-sm text-green-600">
            {doctor.availability.online ? 'Online' : 'Offline'} | Next available in {doctor.availability.nextAvailableInMinutes} mins
          </p>
          <p className="text-sm text-gray-700">Rating: {doctor.rating} ⭐ ({doctor.totalReviews} reviews)</p>
          <p className="text-sm text-gray-700">Fees: ₹{doctor.fees} (₹{doctor.cashback} cashback)</p>
          <p className="text-sm text-gray-500">Languages: {doctor.languagesSpoken.join(', ')}</p>
          <p className="text-sm text-gray-500">Experience: {doctor.experience} years</p>
          <p className="text-sm text-gray-500">Qualifications: {doctor.qualifications.join(', ')}</p>
        </div>
      </div>
    </div>
  );
}
