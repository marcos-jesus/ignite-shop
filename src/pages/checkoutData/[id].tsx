import { Roboto } from '@next/font/google'

import {
  Container,
  Checkout,
  Input,
  ContainerData,
  ButtonBuy,
} from '../../styles/pages/checkoutData'

import { ShoppingCart } from 'phosphor-react'

import { useForm } from 'react-hook-form'

import axios from 'axios'

import { useState } from 'react'
import { ProductProps } from '../produtos/[id]'
import { GetStaticPaths, GetStaticProps } from 'next'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
})

export default function useGetCheckoutData({ product }: ProductProps) {
  const { register, handleSubmit, setValue, setFocus } = useForm()

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const [dataForm, setDataForm] = useState([])

  function handleGetData(data) {
    const passData = data
    setDataForm(passData)

    handleBuyProduct(data)
  }

  function nodeMail() {
    console.log(dataForm)
  }

  async function handleBuyProduct(data) {
    nodeMail()

    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)

      alert('Falha ao redirecionar ao checkout!')
    }
  }

  const checkCep = (e: any) => {
    const cep = e.target.value.replace(/\D/g, '')

    axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
      const datas = response.data
      const temp = []
      temp.push(datas)

      temp.map((data) => {
        setValue('endereco', data.logradouro)
        setValue('bairro', data.bairro)
        setValue('cidade', data.localidade)
        setValue('estado', data.uf)
        setFocus('numero')

        return setValue
      })
    })
  }

  return (
    <Container className={roboto.className}>
      <ContainerData>
        <form onSubmit={handleSubmit(handleGetData)}>
          <Checkout>
            <Input
              type="text"
              placeholder="Nome completo"
              {...register('name')}
            />
            <Input type="email" placeholder="E-mail" {...register('email')} />
          </Checkout>

          <Checkout>
            <Input
              type="text"
              placeholder="CEP"
              {...register('cep')}
              onBlur={checkCep}
            />

            <Input type="text" placeholder="Estado" {...register('estado')} />
            <Input type="text" placeholder="Cidade" {...register('cidade')} />

            <Input
              type="text"
              placeholder="Endereço"
              {...register('endereco')}
            />
          </Checkout>

          <Checkout>
            <Input placeholder="Número" {...register('numero')} />
            <Input
              type="text"
              placeholder="Complemento"
              {...register('complemento')}
            />
          </Checkout>

          <Checkout>
            <Input type="text" placeholder="Bairro" {...register('bairro')} />
          </Checkout>
          <ButtonBuy disabled={isCreatingCheckoutSession}>
            <ShoppingCart size={22} />
            Confirmar compra
          </ButtonBuy>
        </form>
      </ContainerData>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_NAyJZEm29Szh6w' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        defaultPriceId: price.id,
      },
    },
  }
}
