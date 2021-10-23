import type { AppProps } from "next/app"

import "../scss/main.scss"

const MyApp: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props
  return <Component {...pageProps} />
}

export default MyApp
