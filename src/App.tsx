import Navbar from "@/components/nav-bar";

export default function App() {
  return (
    <main className="flex flex-col-reverse md:flex-row min-h-screen">
      <aside className="border w-full md:w-72 min-h-[4rem]">
        <Navbar />
      </aside>
      <div className="border grow min-h-[10rem]"></div>
    </main>
  );
}
