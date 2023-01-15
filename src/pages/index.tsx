import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets:['latin']
})


export default function Home() {
  return <h1 className={roboto.className}>Hello World</h1>
}