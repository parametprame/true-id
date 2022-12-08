import { Topbar } from "./Topbar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="font-nunito">
      <Topbar />
      <div className="px-4 sm:px-6 lg:px-14 mx-auto max-w-screen-2xl bg-[#171717]">
        {children}
      </div>
    </div>
  );
};

export const getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default Layout;
