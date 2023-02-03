import { Container, Checkout, Card } from '../../styles/pages/checkoutData'
export default function getCheckoutData() {
    return (
        <Container>
            <Card>
                <form action="">
                    <Checkout>
                        <input type="text" placeholder='Nome completo' />
                    </Checkout>
                    <Checkout>
                        <input type="email" placeholder='E-mail' />
                    </Checkout>
                    <Checkout>
                        <input type="number" placeholder='CEP' />
                    </Checkout>
                    <Checkout>
                        <input type="text" placeholder='País' />
                    </Checkout>
                    <Checkout>
                        <input type="text" placeholder='Estado' />
                    </Checkout>
                    <Checkout>
                        <input type="text" placeholder='Cidade' />
                    </Checkout>
                    <Checkout>
                        <input type="text" placeholder='Endereço' />
                    </Checkout>
                    <Checkout>
                        <input type="number" placeholder='Númeor' />
                    </Checkout>
                    <Checkout>
                        <input type="text" placeholder='Complemento' />
                    </Checkout>
                    <Checkout>
                        <input type="text" placeholder='Bairro' />
                    </Checkout>
                </form>
            </Card>
        </Container>
    )
}