import React from "react";
import { MdDashboard, MdListAlt, MdHotel } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const sidebarLinks = [
    { name: "Dashboard", path: "/owner", icon: MdDashboard },
    { name: "Add Room", path: "/owner/add-room", icon: MdHotel },
    { name: "List Room", path: "/owner/list-room", icon: MdListAlt },
  ];

  return (
    <aside className="md:w-64 w-16 shrink-0 self-stretch border-r border-gray-300 text-base pt-4 flex flex-col transition-all duration-300">
      {sidebarLinks.map((item, index) => {
        const IconComponent = item.icon;

        return (
          <NavLink
            to={item.path}
            key={index}
            end={item.path === "/owner"}
            className={({ isActive }) =>
              `flex items-center py-3 px-4 md:px-8 gap-3 ${
                isActive
                  ? "border-r-4 md:border-r-[6px] bg-blue-600/10 border-blue-600 text-blue-600"
                  : "hover:bg-gray-100/90 border-transparent text-gray-700"
              }`
            }>
            <IconComponent className="w-6 h-6 shrink-0" />
            <p className="hidden md:block text-center">{item.name}</p>
          </NavLink>
        );
      })}
    </aside>
  );
};

export default Sidebar;
