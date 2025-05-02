import AddDoctorButton from "./AddDoctor.js";

export default function DoctorsPage() {
  const handleAddDoctor = () => {
    console.log("Add Doctor clicked");
  };

  return (
    <div className="p-6">
      <div className="flex justify-end mb-4">
        <AddDoctorButton onClick={handleAddDoctor} />
      </div>
    </div>
  );
}
