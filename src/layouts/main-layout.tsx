import ScrollToTop from "@/components/scroll-to-top";
import Navbar from "@/components/nav-bar";

export type MainLayoutProps = {
  children?: React.ReactElement | React.ReactElement[];
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row min-h-screen">
      <aside className="z-10 border-t lg:border-none sticky bottom-0 left-0 right-0 md:top-0 w-full lg:w-72 min-h-[4rem] shrink-0 max-h-screen">
        <Navbar />
      </aside>

      <main className="max-lg:border-none border-l grow min-h-[10rem] rounded-l-lg overflow-y-hidden mb-8">
        {children}
      </main>

      <ScrollToTop />
    </div>
  );
};

export default MainLayout;
