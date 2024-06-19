import Image from "next/image";
import NavBar from "./components/NavBar";
import SidBar from "./components/SidBar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative">
      <nav>
        <NavBar />
      </nav>
      <div className="flex flex-row flex-1">
        <SidBar />
        <div className="flex flex-1 justify-center items-center">
          <div className="h-auto w-auto bg-white rounded-md border-2 shadow-md p-12">
            Table Editor 
            <p>Select a table from the navigation <br /> panel on the left to
            view its data, or create a new one.</p>
            <button className="btn btn-md bg-green-400">Create a new table</button>
             
          </div>
        </div>
      </div>
    </main>
  );
}
