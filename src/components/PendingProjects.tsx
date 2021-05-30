import { Dialog, Menu, Transition } from "@headlessui/react"
import { DotsVerticalIcon } from "@heroicons/react/outline"
import React, { Fragment } from "react"
import { data } from "../data/data"
import { classNames } from "../Utils/StyleUtls"

const PendingProjects = () => {
  return (
    <div className="">
      <h2 className="text-lg font-medium leading-6 tracking-wide text-gray-900 ">
        Pinned Projects
      </h2>
      <ul className="grid grid-cols-1 gap-4 mt-3 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {data.pinnedProjects.map((project) => (
          <li
            key={project.id}
            className="relative flex col-span-1 rounded-md shadow-sm"
          >
            <div
              className={classNames(
                project.bgColorClass,
                "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md"
              )}
            >
              {project.initials}
            </div>
            <div className="flex items-center justify-between flex-1 truncate bg-gray-100 border-t border-b border-r border-gray-200 rounded-r-md">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <a
                  href="#"
                  className="font-medium text-gray-900 hover:text-gray-600"
                >
                  {project.title}
                </a>
                <p className="text-gray-500">{project.totalMembers} Members</p>
              </div>
              <Menu as="div" className="flex-shrink-0 pr-2">
                {({ open }) => (
                  <>
                    <Menu.Button className="inline-flex items-center justify-center w-8 h-8 text-gray-400 bg-gray-100 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                      <span className="sr-only">Open options</span>
                      <DotsVerticalIcon
                        className="w-5 h-5"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="absolute z-10 w-48 mx-3 mt-1 origin-top-right bg-gray-100 divide-y divide-gray-200 rounded-md shadow-lg right-10 top-3 ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                View
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Removed from pinned
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Share
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PendingProjects
