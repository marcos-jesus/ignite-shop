import { GetStaticProps } from "next"
import Stripe from "stripe"
import { stripe } from "@/lib/stripe"


import { ImageContainer, ProductContainer, ProductDescription } from "@/styles/pages/produto"

interface ProductProps {
  product: {
    id: string,
    name: string,
    imageUrl: string,
    price: string,
    description: string,
  }
}
export default function ProdutoId({ product }: ProductProps) {
  return (
    <ProductContainer>
      <pre>
        {JSON.stringify(product)}
      </pre>
      <ImageContainer>
      
      </ImageContainer>

      <ProductDescription>
        <h1>Camiseta X</h1>
        <span>R$ 79,00</span>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque facilis sed doloremque placeat, saepe sit alias, quisquam exercitationem provident illum numquam assumenda, tempora obcaecati enim cum recusandae nesciunt nam ullam?</p>
      
        <button>
          Comprar agora
        </button>
      </ProductDescription>
    </ProductContainer>
  )
}



export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
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
      }
    },
    revalidate: 60 * 60 * 2
  }
}

