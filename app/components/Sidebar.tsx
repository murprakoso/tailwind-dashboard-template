import Image from "next/image";

import Logo from "../assets/logoipsum-329.svg";
import { SIDENAV_ITEMS } from "../constants/sidenav-items";
import { SidebarMenuItem } from "./SidebarMenuItem";

export default function Sidebar() {
  return (
    <aside className="fixed bg-[#31353d] text-gray z-50 h-full shadow-lg shadow-gray-900/20 transition duration-300 ease-in-out w-[20rem]">
      <div className="flex relative items-center py-5 px-3.5">
        <Image
          src={Logo}
          alt="Logo"
          className="w-10 mx-3.5 min-h-fit "
          width={35}
          height={35}
        />
        <h3 className="pl-2 font-bold text-2xl text-[#e6e9ee] min-w-max">
          DZ Dashboard
        </h3>
      </div>

      <nav className="flex flex-col gap-2 transition duration-300 ease-in-out">
        <div className="flex flex-col gap-2 px-4">
          {SIDENAV_ITEMS.map((item, index) => {
            return (
              <>
                <SidebarMenuItem item={item} />
              </>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
