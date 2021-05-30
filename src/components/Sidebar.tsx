import { useRouter } from "next/dist/client/router"
import React from "react"
import { INavigationItem } from "../model/INavigationItem"
import { classNames } from "../Utils/StyleUtls"
import SidebarItem from "./SidebarItem"

const Sidebar: React.FC<{ navigation: INavigationItem[] }> = (props) => {
  const { asPath } = useRouter()

  return (
    <div className="flex flex-col w-64">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-cyan-700">
        <div className="flex items-center flex-shrink-0 px-4 text-4xl select-none text-cyan-100">
          <h1>Audit Tool</h1>
        </div>
        <nav
          className="flex flex-col flex-1 mt-5 overflow-y-auto divide-y divide-cyan-800"
          aria-label="Sidebar"
        >
          <div className="px-1 space-y-2">
            {props.navigation.map((item: INavigationItem) => (
              <>
                {!item.children ? (
                  <a
                    key={item.name}
                    href={item.path}
                    className={classNames(
                      item
                        ? "bg-cyan-800 text-white"
                        : "text-cyan-100 hover:text-white hover:bg-cyan-600",
                      "group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    <item.icon
                      className="flex-shrink-0 w-6 h-6 mr-4 text-cyan-200"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ) : (
                  <SidebarItem item={item} current={asPath === item.path} />
                )}
              </>
            ))}
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
