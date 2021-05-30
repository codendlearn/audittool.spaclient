import { CashIcon, ChevronRightIcon } from "@heroicons/react/outline"
import React from "react"
import PendingProjects from "../src/components/PendingProjects"
import ProjectList from "../src/components/ProjectList"
import { data } from "../src/data/data"
import { hasKey } from "../src/Utils/JSUtils"
import { classNames } from "../src/Utils/StyleUtls"

const Dashboard = () => {
  return (
    <div>
      <div className="pb-4 mx-auto ">
        <PendingProjects />
      </div>
      <div className="">
        <h2 className="text-lg font-medium leading-6 text-gray-900">
          Overview
        </h2>
        <div className="grid grid-cols-1 gap-5 mt-2 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card */}
          {data.cards.map((card) => (
            <div
              key={card.name}
              className="overflow-hidden bg-white rounded-lg shadow"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <card.icon
                      className="w-6 h-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-1 w-0 ml-5">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {card.name}
                      </dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">
                          {card.amount}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="px-5 py-3 bg-gray-50">
                <div className="text-sm">
                  <a
                    href={card.href}
                    className="font-medium text-cyan-700 hover:text-cyan-900"
                  >
                    View all
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="mt-8 text-lg font-medium leading-6 text-gray-900">
        Recent activity
      </h2>

      <ProjectList
        projects={data.transactions}
        statusStyles={data.statusStyles}
      />
    </div>
  )
}

export default Dashboard
