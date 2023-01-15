import { Html, Head, Main, NextScript } from 'next/document'
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal']
})

export default function Document() {
  return (
    <Html lang="ptBR">
      <Head className={roboto.className} />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
