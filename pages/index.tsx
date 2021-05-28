import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import {
  GlobalStateAction,
  useGlobalDispatch,
  useGlobalState,
} from "../src/store/GlobalStore";

export default function Home() {
  const globalState = useGlobalState();
  const globalDispatch = useGlobalDispatch();

  useEffect(() =>
    globalDispatch({
      type: GlobalStateAction.Busy,
    })
  );

  {
    if (globalState.busy) return <div>Tailwind is busy...</div>;
  }

  return <div>Tailwind NExt</div>;
}
