//import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider,ColorModeProvider} from '@chakra-ui/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ColorModeProvider>
      <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  )
}
