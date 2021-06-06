import type { AppProps } from "next/app"
import PropTypes from "prop-types"

import "../scss/main.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

MyApp.propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default MyApp
