import Navbar from "@/components/nav-bar";

export type MainLayoutProps = {
  children?: React.ReactElement | React.ReactElement[];
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col-reverse gap-4 md:gap-0 lg:flex-row min-h-screen">
      <aside className="w-full lg:w-72 min-h-[4rem] shrink-0">
        <Navbar />
      </aside>

      <main className="border grow min-h-[10rem] rounded-l-lg overflow-y-hidden">{children}</main>
    </div>
  );
};

export default MainLayout;
