import React from "react"
import { INavigationItem } from "../model/INavigationItem"
import SidebarItem from "./SidebarItem"

const Sidebar: React.FC<{ navigation: INavigationItem[] }> = (props) => {
  return (
    <div className="flex flex-col flex-grow w-64 h-full pt-5 pb-4 overflow-y-auto bg-cyan-700">
      <div className="flex items-center flex-shrink-0 px-4 text-4xl select-none text-cyan-100">
        <h1>Audit Tool</h1>
      </div>
      <nav
        className="flex flex-col flex-1 p-1 mt-5 overflow-y-auto divide-y divide-cyan-800"
        aria-label="Sidebar"
      >
        <div className="px-1 space-y-2">
          {props.navigation.map((item: INavigationItem) => (
            <SidebarItem key={item.name} item={item} />
          ))}
        </div>
      </nav>
    </div>
  )
}

export default Sidebar
