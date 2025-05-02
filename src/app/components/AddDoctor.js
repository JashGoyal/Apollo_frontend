'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function AddDoctor() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: '',
        specialization: '',
        experience: '',
        qualifications: '',
        fees: '',
        cashback: '',
        languagesSpoken: '',
        profileImage: '',
        clinicName: '',
        city: '',
        state: '',
        online: false,
        hospitalVisit: false,
        nextAvailableInMinutes: '',
        rating: '',
        totalReviews: '',
        feesError: '',
        experienceError: '',
        ratingError: '',
        totalReviewsError: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === 'fees' && value < 0) {
            setFormData((prev) => ({
                ...prev,
                [name]: 0,
                feesError: 'Fees cannot be negative.'
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : value,
                feesError: '',
                experienceError: '',
                ratingError: '',
                totalReviewsError: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.fees < 0) {
            setFormData((prev) => ({ ...prev, feesError: 'Fees cannot be negative.' }));
            return;
        }

        if (formData.experience <= 0) {
            setFormData((prev) => ({ ...prev, experienceError: 'Experience must be a positive number.' }));
            return;
        }

        if (formData.rating < 0 || formData.rating > 5) {
            setFormData((prev) => ({ ...prev, ratingError: 'Rating must be between 0 and 5.' }));
            return;
        }

        if (formData.totalReviews < 0) {
            setFormData((prev) => ({ ...prev, totalReviewsError: 'Total reviews cannot be negative.' }));
            return;
        }

        const payload = {
            name: formData.name,
            specialization: formData.specialization,
            experience: parseInt(formData.experience),
            qualifications: formData.qualifications.split(',').map((q) => q.trim()),
            fees: parseInt(formData.fees),
            cashback: parseInt(formData.cashback),
            languagesSpoken: formData.languagesSpoken.split(',').map((l) => l.trim()),
            profileImage: formData.profileImage,
            clinicName: formData.clinicName,
            location: {
                city: formData.city,
                state: formData.state
            },
            availability: {
                online: formData.online,
                hospitalVisit: formData.hospitalVisit,
                nextAvailableInMinutes: parseInt(formData.nextAvailableInMinutes)
            },
            rating: parseFloat(formData.rating),
            totalReviews: parseInt(formData.totalReviews)
        };

        try {
            await axios.post('https://apollo-backend-rsst.onrender.com/api/doctors/adddoctor', payload);
            alert('Doctor added successfully!');
            setFormData({
                name: '',
                specialization: '',
                experience: '',
                qualifications: '',
                fees: '',
                cashback: '',
                languagesSpoken: '',
                profileImage: '',
                clinicName: '',
                city: '',
                state: '',
                online: false,
                hospitalVisit: false,
                nextAvailableInMinutes: '',
                rating: '',
                totalReviews: '',
                feesError: '',
                experienceError: '',
                ratingError: '',
                totalReviewsError: ''
            });
            router.push('/');
        } catch (err) {
            console.error('Error adding doctor:', err.message);
            alert('Failed to add doctor');
        }
    };

    const inputClass =
        'w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-800 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-150 ease-in-out';

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-8 shadow-md rounded-lg max-w-2xl w-full mx-auto space-y-6"
        >
            <h2 className="text-2xl font-bold text-gray-800">Add New Doctor</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input required name="name" value={formData.name} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Specialization</label>
                    <input required name="specialization" value={formData.specialization} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Experience (years)</label>
                    <input required name="experience" type="number" value={formData.experience} onChange={handleChange} className={inputClass} />
                    {formData.experienceError && <p className="text-sm text-red-500 mt-1">{formData.experienceError}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Profile Image URL</label>
                    <input required name="profileImage" value={formData.profileImage} onChange={handleChange} className={inputClass} />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Clinic Name</label>
                <input required name="clinicName" value={formData.clinicName} onChange={handleChange} className={inputClass} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">City</label>
                    <input required name="city" value={formData.city} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">State</label>
                    <input required name="state" value={formData.state} onChange={handleChange} className={inputClass} />
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Fees</label>
                    <input required name="fees" type="number" value={formData.fees} onChange={handleChange} className={inputClass} />
                    {formData.feesError && <p className="text-sm text-red-500 mt-1">{formData.feesError}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Cashback</label>
                    <input required name="cashback" type="number" value={formData.cashback} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Rating</label>
                    <input required name="rating" type="number" step="0.1" value={formData.rating} onChange={handleChange} className={inputClass} />
                    {formData.ratingError && <p className="text-sm text-red-500 mt-1">{formData.ratingError}</p>}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-4">
                    <label className="inline-flex items-center space-x-2 text-sm text-gray-700">
                        <input type="checkbox" name="online" checked={formData.online} onChange={handleChange} className="form-checkbox h-4 w-4 text-cyan-600" />
                        <span>Online</span>
                    </label>
                    <label className="inline-flex items-center space-x-2 text-sm text-gray-700">
                        <input type="checkbox" name="hospitalVisit" checked={formData.hospitalVisit} onChange={handleChange} className="form-checkbox h-4 w-4 text-cyan-600" />
                        <span>Hospital Visit</span>
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Next Available (min)</label>
                    <input required name="nextAvailableInMinutes" type="number" value={formData.nextAvailableInMinutes} onChange={handleChange} className={inputClass} />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Languages Spoken</label>
                <input required name="languagesSpoken" value={formData.languagesSpoken} onChange={handleChange} placeholder="e.g. English, Hindi" className={inputClass} />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Qualifications</label>
                <input required name="qualifications" value={formData.qualifications} onChange={handleChange} placeholder="e.g. MBBS, MD" className={inputClass} />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Total Reviews</label>
                <input required name="totalReviews" type="number" value={formData.totalReviews} onChange={handleChange} className={inputClass} />
                {formData.totalReviewsError && <p className="text-sm text-red-500 mt-1">{formData.totalReviewsError}</p>}
            </div>

            <div className="pt-4">
                <button type="submit" className="bg-cyan-700 text-white px-6 py-2 rounded-md hover:bg-cyan-800 shadow-md">
                    Add Doctor
                </button>
            </div>
        </form>
    );
}
