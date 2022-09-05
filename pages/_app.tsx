import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material';
import { UiProvider } from '../context';
import { defaultTheme } from '../themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <UiProvider>
        <Component {...pageProps} />
      </UiProvider>
    </ThemeProvider>
  )
}

export default MyApp
