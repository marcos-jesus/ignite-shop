import Image from 'next/image'
import { HomeContainer, Product } from '../styles/pages/home'
import { Roboto } from '@next/font/google'

import { useKeenSlider} from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets:['latin']
})

import camiseta1 from '../assets/Camisetas/camiseta1.png'
import camiseta2 from '../assets/Camisetas/camiseta2.png'
import camiseta3 from '../assets/Camisetas/camiseta3.png'


export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 38
    }
  })
  return (

    <HomeContainer ref={sliderRef} className='keen-slider'>
      <Product className='keen-slider__slide'>
        <Image src={camiseta1} width={520} height={480} alt='' />

        <footer>
          <strong>Camiseta Explorer Blue</strong>
          <span> R$ 79,90</span>
        </footer>
      </Product>

      <Product className='keen-slider__slide'>
        <Image src={camiseta2} width={520} height={480} alt='' />

        <footer>
          <strong>Camiseta Explorer Red</strong>
          <span> R$ 79,90</span>
        </footer>
      </Product>

      <Product className='keen-slider__slide'>
        <Image src={camiseta3} width={401} height={480} alt='' />

        <footer>
          <strong>Camiseta Ignite lab</strong>
          <span> R$ 99,90</span>
        </footer>
      </Product>

      <Product className='keen-slider__slide'>
        <Image src={camiseta2} width={401} height={480} alt='' />

        <footer>
          <strong>Camiseta Explorer Red Premium</strong>
          <span> R$ 99,90</span>
        </footer>
      </Product>
      
    </HomeContainer>

  )
}