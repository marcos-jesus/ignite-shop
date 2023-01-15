import { styled } from '@/styles'
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets:['latin']
})

const Button = styled('button', {
  backgroundColor: '$green500',
  borderRadius: 4,
  border: 0,
  width: 80,
  padding: ' 4px 8px',

  span: {
    fontWeight: 'bold',
  },

  '&:hover': {
    filter: 'brightness(0.8)'
  },
})


export default function Home() {
  return (

    <Button>
      <span>Teste</span>
      Enviar
    </Button>

  )
}