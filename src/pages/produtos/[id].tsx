import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'

import {
  ImageContainer,
  ProductContainer,
  ProductDescription,
  LinkButton,
} from '@/styles/pages/produto'

export interface ProductProps {
  id: string
  name: string
  imageUrl: string
  price: string
  description: string
  defaultPriceId: string
  defaultPriceProduct: string
}
export default function ProdutoId({ product }: ProductProps) {
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
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>

          <LinkButton href={`/checkoutData/${product.defaultPriceProduct}`}>
            Comprar agora
          </LinkButton>
        </ProductDescription>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_NAyJZEm29Szh6w' } },
      { params: { id: 'prod_NAyHSEWg6HOJpg' } },
      { params: { id: 'prod_NAyGRCKQc58KLv' } },
      { params: { id: 'prod_NAyFBdCrVH61lp' } },
      { params: { id: 'prod_NAyEo1A3tH0Me1' } },
    ],
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

  console.log(product)

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
        defaultPriceProduct: price.product,
      },
    },
    revalidate: 60 * 60 * 1,
  }
}
