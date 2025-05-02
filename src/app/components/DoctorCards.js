import DoctorCard from "./DoctorCard";

export default function DoctorCards({ apollo }) {
  if (!apollo || apollo.length === 0) return <div>Loading doctors...</div>;

  return (
    <div className="flex flex-col gap-4 max-w-3xl w-full">
      {apollo.map((doctor) => (
        <DoctorCard key={doctor._id} doctor={doctor} />
      ))}
    </div>
  );
}