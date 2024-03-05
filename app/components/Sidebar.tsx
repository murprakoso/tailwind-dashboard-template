import Image from "next/image";

import Logo from "../assets/logoipsum-329.svg";
import { SIDENAV_ITEMS } from "../constants/sidenav-items";
import { SidebarMenuItem } from "./SidebarMenuItem";
import classNames from "classnames";

export default function Sidebar({
  toggleCollapse,
}: {
  toggleCollapse: boolean;
}) {
  const asideStyle = classNames(
    "fixed bg-[#31353d] text-gray-500 z-50 h-full shadow-lg shadow-gray-900/20 transition duration-300 ease-in-out w-[20rem]",
    {
      ["sm:w-[5.4rem] sm:left-0 left-[-100%]"]: toggleCollapse,
      ["w-[20rem]"]: !toggleCollapse,
    }
  );

  return (
    <aside className={asideStyle}>
      <div className="flex relative items-center py-5 px-3.5">
        <Image
          src={Logo}
          alt="Logo"
          className="w-10 mx-3.5 min-h-fit "
          width={35}
          height={35}
        />
        {!toggleCollapse && (
          <h3 className="pl-2 font-bold text-2xl text-[#e6e9ee] min-w-max">
            DZ Dashboard
          </h3>
        )}
      </div>

      <nav className="flex flex-col gap-2 transition duration-300 ease-in-out">
        <div className="flex flex-col gap-2 px-4">
          {SIDENAV_ITEMS.map((item, idx) => {
            return (
              <SidebarMenuItem
                key={idx}
                item={item}
                toggleCollapse={toggleCollapse}
              />
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
