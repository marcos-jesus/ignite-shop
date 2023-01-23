import { GetStaticPaths, GetStaticProps } from "next" 
import Image from "next/image"
import Head from "next/head"
import { useRouter } from 'next/router'
import Stripe from "stripe"
import { stripe } from "@/lib/stripe"


import { ImageContainer, ProductContainer, ProductDescription } from "@/styles/pages/produto"
import axios from "axios"
import { useState } from "react"

interface ProductProps {
  product: {
    id: string,
    name: string,
    imageUrl: string,
    price: string,
    description: string,
    defaultPriceId: string;
  }
}
export default function ProdutoId({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  async function handleBuyProduct() {
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
  
  const { query, isFallback } = useRouter()

  if(isFallback) {
    return <h1> Loading...</h1>
  }

  return (
    <>
      <Head>
        <title> {product.name}</title>
      </Head>

      <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={380} height={480} alt="" />
      </ImageContainer>

      <ProductDescription>
        <h1>{product.name }</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>
      
        <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>
          Comprar agora
        </button>
      </ProductDescription>
    </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_NAyJZEm29Szh6w'}}
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price
  
  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 2
  }
}

