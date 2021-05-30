import "../styles/globals.css"
import type { AppProps } from "next/app"
import { GlobalStateProvider } from "../src/store/GlobalStore"
import Layout from "../src/components/Layout"
import React from "react"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalStateProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalStateProvider>
  )
}
export default MyApp
