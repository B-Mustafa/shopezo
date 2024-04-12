import Header from "@/components/Header";
import Navbar from "@/components/Navbar";


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
