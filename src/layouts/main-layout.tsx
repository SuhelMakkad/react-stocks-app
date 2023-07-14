import Navbar from "@/components/nav-bar";

export type MainLayoutProps = {
  children?: React.ReactElement;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col-reverse md:flex-row min-h-screen">
      <aside className="w-full md:w-72 min-h-[4rem]">
        <Navbar />
      </aside>

      <main className="border grow min-h-[10rem] rounded-l-lg">{children}</main>
    </div>
  );
};

export default MainLayout;
