import { Menu, Transition } from "@headlessui/react"
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CashIcon,
  ChevronRightIcon,
  DotsVerticalIcon,
  DuplicateIcon,
  PencilAltIcon,
  TrashIcon,
  UserAddIcon,
} from "@heroicons/react/outline"
import React, { Fragment } from "react"
import { hasKey } from "../Utils/JSUtils"
import { classNames } from "../Utils/StyleUtls"

const ProjectList = (props: any) => {
  return (
    <div>
      <div className="shadow sm:hidden">
        <ul className="mt-2 overflow-hidden divide-y divide-gray-200 shadow sm:hidden">
          {props.projects.map((transaction: any) => (
            <li key={transaction.id}>
              <a
                href={transaction.href}
                className="block px-4 py-4 bg-white hover:bg-gray-50"
              >
                <span className="flex items-center space-x-4">
                  <span className="flex flex-1 space-x-2 truncate">
                    <CashIcon
                      className="flex-shrink-0 w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="flex flex-col text-sm text-gray-500 truncate">
                      <span className="truncate">{transaction.name}</span>
                      <span>
                        <span className="font-medium text-gray-900">
                          {transaction.amount}
                        </span>{" "}
                        {transaction.currency}
                      </span>
                      <time dateTime={transaction.datetime}>
                        {transaction.date}
                      </time>
                    </span>
                  </span>
                  <ChevronRightIcon
                    className="flex-shrink-0 w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <nav
          className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200"
          aria-label="Pagination"
        >
          <div className="flex justify-between flex-1">
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:text-gray-500"
            >
              Previous
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:text-gray-500"
            >
              Next
            </a>
          </div>
        </nav>
      </div>

      {/* Activity table (small breakpoint and up) */}
      <div className="hidden sm:block">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col mt-2">
            <div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                      Transaction
                    </th>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase bg-gray-50">
                      Amount
                    </th>
                    <th className="hidden px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50 md:block">
                      Status
                    </th>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase bg-gray-50">
                      Date
                    </th>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase bg-gray-50"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {props.projects.map((transaction: any) => (
                    <tr key={transaction.id} className="bg-white">
                      <td className="w-full px-6 py-4 text-sm text-gray-900 max-w-0 whitespace-nowrap">
                        <div className="flex">
                          <a
                            href={transaction.href}
                            className="inline-flex space-x-2 text-sm truncate group"
                          >
                            <CashIcon
                              className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            <p className="text-gray-500 truncate group-hover:text-gray-900">
                              {transaction.name}
                            </p>
                          </a>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-right text-gray-500 whitespace-nowrap">
                        <span className="font-medium text-gray-900">
                          {transaction.amount}{" "}
                        </span>
                        {transaction.currency}
                      </td>
                      <td className="hidden px-6 py-4 text-sm text-gray-500 whitespace-nowrap md:block">
                        <span
                          className={classNames(
                            hasKey(props.statusStyles, transaction.status)
                              ? props.statusStyles[transaction.status]
                              : "",
                            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
                          )}
                        >
                          {transaction.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-right text-gray-500 whitespace-nowrap">
                        <time dateTime={transaction.datetime}>
                          {transaction.date}
                        </time>
                      </td>
                      <td className="pr-6">
                        <Menu
                          as="div"
                          className="relative flex items-center justify-end"
                        >
                          {({ open }) => (
                            <>
                              <Menu.Button className="inline-flex items-center justify-center w-8 h-8 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
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
                                  className="absolute top-0 z-10 w-48 mx-3 mt-1 origin-top-right bg-white divide-y divide-gray-200 rounded-md shadow-lg right-7 ring-1 ring-black ring-opacity-5 focus:outline-none"
                                >
                                  <div className="py-1">
                                    <Menu.Item>
                                      {({ active }) => (
                                        <button
                                          className={classNames(
                                            active
                                              ? "bg-gray-100 text-gray-900"
                                              : "text-gray-700",
                                            "group w-full flex items-center px-4 py-2 text-sm"
                                          )}
                                        >
                                          <PencilAltIcon
                                            className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                          />
                                          Edit
                                        </button>
                                      )}
                                    </Menu.Item>
                                    <Menu.Item>
                                      {({ active }) => (
                                        <button
                                          className={classNames(
                                            active
                                              ? "bg-gray-100 text-gray-900"
                                              : "text-gray-700",
                                            "group w-full flex items-center px-4 py-2 text-sm"
                                          )}
                                        >
                                          <DuplicateIcon
                                            className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                          />
                                          Duplicate
                                        </button>
                                      )}
                                    </Menu.Item>
                                    <Menu.Item>
                                      {({ active }) => (
                                        <button
                                          className={classNames(
                                            active
                                              ? "bg-gray-100 text-gray-900"
                                              : "text-gray-700",
                                            "group w-full flex items-center px-4 py-2 text-sm"
                                          )}
                                        >
                                          <UserAddIcon
                                            className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                          />
                                          Share
                                        </button>
                                      )}
                                    </Menu.Item>
                                  </div>
                                  <div className="py-1">
                                    <Menu.Item>
                                      {({ active }) => (
                                        <button
                                          className={classNames(
                                            active
                                              ? "bg-gray-100 text-gray-900"
                                              : "text-gray-700",
                                            "group w-full flex items-center px-4 py-2 text-sm"
                                          )}
                                        >
                                          <TrashIcon
                                            className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                          />
                                          Delete
                                        </button>
                                      )}
                                    </Menu.Item>
                                  </div>
                                </Menu.Items>
                              </Transition>
                            </>
                          )}
                        </Menu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination */}
              <nav
                className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6"
                aria-label="Pagination"
              >
                <div className="hidden sm:block">
                  <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">1</span> to{" "}
                    <span className="font-medium">10</span> of{" "}
                    <span className="font-medium">20</span> results
                  </p>
                </div>
                <div className="flex justify-between flex-1 space-x-4 sm:justify-end">
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 space-x-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    <ArrowLeftIcon
                      className="w-5 h-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span>Previous</span>
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 space-x-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    <ArrowRightIcon
                      className="w-5 h-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span>Next</span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectList
