import Header from "./components/Header";
import FiltersSidebar from "./components/FilterSideBar"

export default function Home() {
  return (
    <div>
      <Header />
      <div className=" flex justify-center"><FiltersSidebar /><div></div></div>
      
    </div>
  );
}
