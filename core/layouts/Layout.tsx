import { Topbar } from "./Topbar";
import { Toat } from "core/components/Toat";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="font-nunito">
      <Topbar />
      <Toat />
      <div className="px-4 sm:px-6 lg:px-14 mx-auto bg-[#171717] min-h-screen">
        {children}
      </div>
    </div>
  );
};

export const getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default Layout;
