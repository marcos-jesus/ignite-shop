import Image from 'next/image'
import { HomeContainer, Product } from '../styles/pages/home'
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets:['latin']
})

import camiseta1 from '../assets/Camisetas/camiseta1.png'
import camiseta2 from '../assets/Camisetas/camiseta2.png'
import camiseta3 from '../assets/Camisetas/camiseta3.png'


export default function Home() {
  return (

    <HomeContainer className={roboto.className}>
      <Product>
        <Image src={camiseta1} width={520} height={480} alt='' />

        <footer>
          <strong>Camiseta Maratona Explorer Red</strong>
          <span> R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={camiseta2} width={520} height={480} alt='' />

        <footer>
          <strong>Camiseta Maratona Explorer Blue</strong>
          <span> R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>

  )
}