import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material';
import { UiProvider } from '../context';
import { defautlTheme } from '../themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defautlTheme}>
      <UiProvider>
        <Component {...pageProps} />
      </UiProvider>
    </ThemeProvider>
  )
}

export default MyApp
