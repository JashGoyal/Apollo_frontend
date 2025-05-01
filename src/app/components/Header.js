import { FaSearch, FaMapMarkerAlt, FaUser } from "react-icons/fa";

export default function Header() {
    return (
        <header className="border-b shadow-sm border-gray-300">
            <div className="flex items-center border-b shadow-sm border-gray-300 mx-auto justify-evenly p-3 px-6 bg-white">

                <div className="flex items-center gap-6">
                    <div className="flex flex-col items-center text-xl font-bold text-cyan-800">
                        Apollo
                        <span className="bg-orange-500 text-white px-1 ml-1 rounded-sm text-m font-semibold ">24|7</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700 cursor-pointer">
                        <FaMapMarkerAlt className="mr-1 text-2xl" />
                        <div className="flex flex-col">
                            <span className="">Select Location</span>
                            <div>
                                <span className="font-semibold">Select Address</span>
                                <span className="ml-1 ">&#9660;</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 max-w-xl mx-6">
                    <div className="flex items-center bg-gray-100 rounded-md px-3 py-2">
                        <FaSearch className="text-gray-500 mr-2" />
                        <input
                            type="text"
                            placeholder="Search Doctors, Specialities, Conditions etc."
                            className="w-full bg-transparent outline-none text-sm"
                        />
                    </div>
                </div>


                <div>
                    <button className="flex items-center gap-2 border border-cyan-800 text-cyan-800 px-4 py-1.5 rounded-md text-sm hover:bg-cyan-50">
                        Login
                        <FaUser />
                    </button>
                </div>
            </div>


            <nav className="flex space-x-8 gap-6 px-6 py-2 text-sm font-semibold text-gray-800 bg-white justify-center align-between">
                <a href="#">Buy Medicines</a>
                <a href="#">Find Doctors</a>
                <a href="#">Lab Tests</a>
                <a href="#">Circle Membership</a>
                <a href="#">Health Records</a>
                <a href="#">Diabetes Reversal</a>
                <div className="flex items-center gap-1">
                    <a href="#">Buy Insurance</a>
                    <span className="text-xs bg-cyan-100 text-cyan-800 px-1 rounded-sm">New</span>
                </div>
            </nav>
        </header>
    );
}
