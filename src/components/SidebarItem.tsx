import { Disclosure } from "@headlessui/react"
import React from "react"
import { classNames } from "../Utils/StyleUtls"
import Link from "next/link"
import { INavigationItem } from "../model/INavigationItem"

const SidebarItem: React.FC<{ item: INavigationItem; current: boolean }> = (
  props
) => {
  return (
    <div>
      <Disclosure as="div" key={props.item.name} className="space-y-1">
        {({ open }) => (
          <>
            <Disclosure.Button
              className={classNames(
                props.current
                  ? "bg-gray-900 text-gray-200"
                  : " text-gray-400 hover:bg-gray-600 hover:text-gray-300",
                "group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              )}
            >
              <Link href={props.item.path ?? "/"}>
                <>
                  {props.item.icon && (
                    <props.item.icon
                      className="flex-shrink-0 w-6 h-6 mr-3 text-gray-400 group-hover:text-gray-300"
                      aria-hidden="true"
                    />
                  )}
                  <span className="flex-1 text-lg">{props.item.name}</span>
                  <svg
                    className={classNames(
                      open ? "text-gray-400 rotate-90" : "text-gray-300",
                      "ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                    )}
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                  </svg>
                </>
              </Link>
            </Disclosure.Button>
            <Disclosure.Panel className="space-y-1">
              {props.item.children &&
                props.item.children.map((subItem: INavigationItem) => (
                  <Link href={subItem.path ?? "/"}>
                    <a
                      key={subItem.name}
                      className="flex items-center w-full py-2 pr-2 font-medium text-gray-400 rounded-md text-md group pl-11 hover:text-gray-300 hover:bg-gray-600"
                    >
                      {subItem.name}
                    </a>
                  </Link>
                ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}

export default SidebarItem
