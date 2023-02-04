import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'

import { Container, Header } from '../styles/pages/app'

import Image from 'next/image'

import logoImg from '../assets/logo.png'

import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container className={roboto.className}>
      <Header>
        <Image src={logoImg} width={32} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
