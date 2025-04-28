import { Outlet } from "react-router-dom";
import SideBar from "../components/Sidebar";
import { Toaster } from "../components/ui/sonner";
import image from "../assets/A6043158-845C-4B3A-99D8-C497A2789229_1_105_c.jpeg"

const Layout = () => {
  return (
    <div className="flex h-screen flex-col md:flex-row">
        <aside className="w-full md:w-64 bg-blue-800 text-white">
            <SideBar />
        </aside>
     
        <div className="flex-1 bg-gray-100">
            <div className="flex flex-rol p-3 items-center justify-end border-b border-gray-300">
                <button className="rounded-lg border border-[#CDD7F6] bg-white p-2 mx-3 pointer"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.53 14.394c-.213 1.353.738 2.292 1.902 2.76c4.463 1.795 10.673 1.795 15.136 0c1.164-.468 2.115-1.407 1.902-2.76c-.13-.832-.777-1.524-1.256-2.2c-.627-.897-.689-1.874-.69-2.915C19.525 5.26 16.157 2 12 2S4.475 5.26 4.475 9.28c0 1.04-.062 2.018-.69 2.914c-.478.676-1.124 1.368-1.255 2.2M9 21c.796.622 1.848 1 3 1s2.204-.378 3-1" color="blue"/></svg> </button>
                <img className="mx-2 h-10 w-10 rounded-[50%]" src={image} alt="profile picture" />
                <p className="mx-2">Jones Charles</p>
                <svg className="mx-2"xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 1024 1024"><path fill="currentColor" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496"/></svg>
            </div>
            <Outlet />
        </div>
      <Toaster position="top-center" />
    </div>
  );
};

export default Layout;