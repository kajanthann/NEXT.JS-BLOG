import { assets } from "@/Assets/assets";
import Sidebar from "@/components/AdminComponents/Sidebar";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';

export default function Layout({ children }) {
  return (
    <div className="flex">
      <ToastContainer theme="dark"/>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col w-full">
        {/* Top Navbar */}
        <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
          <h3 className="font-medium border border-black rounded-full px-2 bg-slate-50">
            Admin Panel
          </h3>
          <Image src={assets.profile_icon} width={40} height={40} alt="profile" />
        </div>

        {/* Page Content */}
        <div className="">{children}</div>
      </div>
    </div>
  );
}
