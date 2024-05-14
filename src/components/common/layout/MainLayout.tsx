import { Toaster } from "@/components/ui/toaster";

type MainLayoutProps = {
  children?: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="max-w-7xl m-auto p-5" suppressHydrationWarning={true}>
        {children}
        <Toaster />
      </div>
    </>
  );
};

export default MainLayout;
