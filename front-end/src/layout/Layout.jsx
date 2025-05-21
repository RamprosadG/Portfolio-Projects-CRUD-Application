import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="p-6 bg-white text-gray-700">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
