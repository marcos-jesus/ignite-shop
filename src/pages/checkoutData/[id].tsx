import { Roboto } from '@next/font/google'

const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin'],
})

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



export default function getCheckoutData() {
  const { register, handleSubmit, setValue, setFocus } = useForm()

  function handleGetData(data) {
    alert('oie')
    console.log(data)
  }

  const checkCep = (e:any) => {
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
            <Input 
                type="email" 
                placeholder="E-mail" 
                {...register('email')} 
            />
          </Checkout>

          <Checkout>
            <Input
              type="text"
              placeholder="CEP"
              {...register('cep')}
              onBlur={checkCep}
            />

            <Input
              type="text"
              placeholder="Estado"
              {...register('estado')}
            />
            <Input type="text" placeholder="Cidade" {...register('cidade')} />

            <Input
              type="text"
              placeholder="Endereço"
              {...register('endereco')}
            />
          </Checkout>

          <Checkout>
          
            <Input
              placeholder="Número"
              {...register('numero')}
            />
            <Input
              type="text"
              placeholder="Complemento"
              {...register('complemento')}
            />
          </Checkout>
          
          <Checkout>
            <Input
              type="text"
              placeholder="Bairro"
              {...register('bairro')}
            />
          </Checkout>
          <ButtonBuy type="submit">
            <ShoppingCart size={22} />
            Confirmar compra
          </ButtonBuy>
        </form>
      </ContainerData>
    </Container>
  )
}
