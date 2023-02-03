import { Container, Checkout, Input, ContainerData, ButtonBuy } from '../../styles/pages/checkoutData'

import { Roboto } from '@next/font/google'

const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal'],
    subsets:['latin']
  })

  
import { ShoppingCart} from 'phosphor-react'

import { useForm } from 'react-hook-form'

export default function getCheckoutData() {

    const { register, handleSubmit, watch, formState: {errors}} = useForm()

    function sendAddress(userData) {
        console.log(userData)
    }

    console.log(errors)

    return (
        <Container className={roboto.className}>
            <ContainerData>
                <form onSubmit={handleSubmit(sendAddress)}>
                    <Checkout>
                        <Input type="text" placeholder='Nome completo' {...register('name', { required: true})} />
                        <Input type="email" placeholder='E-mail' {...register('email')} />
                    </Checkout>


                    <Checkout>
                        <Input type="number" placeholder='CEP' {...register('cep', { required: true})} />
                        <Input type="text" placeholder='País' {...register('pais', { required: true})} />
                        <Input type="text" placeholder='Estado' {...register('estado', { required: true})} />
                        <Input type="text" placeholder='Cidade' {...register('cidade')}/>
                    </Checkout>
            
                    <Checkout>
                        
                    </Checkout>
              
                    <Checkout>
                        <Input type="text" placeholder='Endereço' {...register('endereco', { required: true})}/>
                        <Input type="number" placeholder='Número' {...register('number', { required: true})} />
                        <Input type="text" placeholder='Complemento' {...register('complement', { required: true})} />
                    </Checkout>
          
                    <Checkout>
                        
                    </Checkout>
                    <Checkout>
                        <Input type="text" placeholder='Bairro' {...register('bairro', { required: true})}/>
                    </Checkout>
                    <ButtonBuy type='submit'>
                        <ShoppingCart size={22} />
                        Confirmar compra
                    </ButtonBuy>
                </form>
                
      

            </ContainerData>
        </Container>
    )
}