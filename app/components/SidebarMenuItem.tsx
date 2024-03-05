"use client";

import Link from "next/link";
import { SideNavItem } from "../types/types";
import { BsChevronRight } from "react-icons/bs";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const SidebarMenuItem = ({ item }: { item: SideNavItem }) => {
  const linkStyle =
    "flex items-center min-h-[40px] h-full text-[#6e768e] py-2 px-4 hover:text-white rounded-md transition duration-200";
  const ddLinkStyle = linkStyle;
  const activeLinkStyle =
    "rounded-md text-white light:text-black light:bg-[#efefef] bg-[#3a3f48]";
  const navMenuDropdownItem =
    "text-[#6e768e] py-2 hover:text-white transition duration-200";

  // Event: Click on the submenu
  const pathName = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => setSubMenuOpen(!subMenuOpen);

  return (
    <>
      {item.subMenu ? (
        // Submenu link to the path
        <div className="rounded-md min-w-[18px]">
          <a
            className={`${ddLinkStyle} ${
              pathName.includes(item.path) ? activeLinkStyle : ""
            }`}
          >
            {item.icon && item.icon}
            <span className="ml-3 text-base leading-6 font-semibold">
              {item.title}
            </span>
            <BsChevronRight className="ml-auto stroke-2 text-xs" />
          </a>
          <div className="bg-[#3a3f48] border-l-4">
            <div className="grid gap-y-2 px-10 py-3 leading-5">
              {item.subMenuItems?.map((subItem, idx) => (
                <Link
                  href={subItem.path}
                  key={idx}
                  className={`${navMenuDropdownItem} ${
                    subItem.path === pathName ? activeLinkStyle : ""
                  }`}
                >
                  {subItem.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // Main link to the path
        <Link
          href={item.path}
          className={`${linkStyle} ${
            item.path === pathName ? activeLinkStyle : ""
          }`}
        >
          {item.icon && item.icon}
          <span className="ml-3 leading-6 font-semibold">{item.title}</span>
        </Link>
      )}
    </>
  );
};
