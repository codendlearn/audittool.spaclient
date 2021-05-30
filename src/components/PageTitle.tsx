import { useRouter } from "next/dist/client/router"
import React from "react"
import { useGlobalState } from "../store/GlobalStore"

const PageTitle = () => {
  const globalState = useGlobalState()
  const { asPath } = useRouter()

  return (
    <div>
      <h1 className="text-lg font-bold leading-6 text-gray-900 sm:truncate">
        {globalState.pageTitle} - {asPath}
      </h1>
    </div>
  )
}

export default PageTitle
