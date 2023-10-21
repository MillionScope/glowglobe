import "../styles.css"
import "nextra-theme-docs/style.css"
import Head from "next/head"
import { Analytics } from "@vercel/analytics/react"

export default function Nextra({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
    <>
      <Head>{}</Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
