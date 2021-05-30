import { useEffect } from "react"
import {
  GlobalStateAction,
  useGlobalDispatch,
  useGlobalState,
} from "../src/store/GlobalStore"

export default function Home() {
  const globalState = useGlobalState()
  const globalDispatch = useGlobalDispatch()

  useEffect(
    () =>
      globalDispatch({
        type: GlobalStateAction.Busy,
      }),
    []
  )

  {
    if (globalState.busy)
      return (
        <div
          onClick={() => {
            alert("h")
            globalDispatch({
              type: GlobalStateAction.Idle,
            })
          }}
        >
          Tailwind is busy...
        </div>
      )
  }

  return <div>Tailwind NExt</div>
}
