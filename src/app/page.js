import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header/>
      <Navbar/>
      <section className="h-screen bg-gray-500 flex justify-center items-center">
        <h1 className="font-bold text-4xl">Home Banner</h1>
      </section>
      <section className="h-screen">
        home 2
      </section>
    </>
  );
}
