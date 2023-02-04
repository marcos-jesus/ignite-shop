import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../styles'
export default function Document() {
  return (
    <Html lang="ptBR">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
