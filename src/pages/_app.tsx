import React from 'react'
import App from 'next/app'
import {AppProps} from 'next/app'
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import 'bootstrap/dist/css/bootstrap.min.css';

const  MyApp: React.FC <AppProps>= ({ Component, pageProps }) => {
  return (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    <GlobalStyle/>
  </ThemeProvider>

  )
}

export default MyApp
