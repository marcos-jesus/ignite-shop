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

import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import axios from 'axios'



const GetDataSchema = zod.object({
    name: zod.string().min(3, 'Nome obrigatório'),
    email: zod.string().min(3, 'Email obrigatório'),
    cep: zod.number().min(8).max(8, 'Cep obrigatório'),
    pais: zod.string().min(4, 'País obrigatório'),
    estado: zod.string().min(4, 'Estado obrigatório'),
    cidade: zod.string().min(4, 'Cidade obrigatório'),
    endereco: zod.string().min(4,'Endereço obrigatório'),
    number: zod.number().min(1, 'Número obrigatório'),
    bairro: zod.string().min(2, 'Bairro obrigatório'),
    complemento: zod.string().optional(),
})

type getDataFormData = zod.infer<typeof GetDataSchema>

export default function getCheckoutData() {
  const { register, handleSubmit, setValue } = useForm<getDataFormData>({
    resolver: zodResolver(GetDataSchema),
  })

  function handleGetData(data: getDataFormData) {
    console.log(data)
  }

  const checkCep = (e) => {
    const cep = e.target.value.replace(/\D/g, '')

    axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
        const datas = response.data
        const temp = []

        temp.push(datas)

        console.log(temp)

        temp.map((data) => {
            setValue('endereco', data.logradouro)
            setValue('bairro', data.bairro)
            setValue('cidade', data.localidade)
            setValue('estado', data.uf)
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
              type="number"
              placeholder="Número"
              {...register('number')}
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
