import { styled } from "..";

export const Container = styled('div', {
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    marginLeft: 'auto',
    minHeight: 656,
    padding: '1.5rem',

    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
})

export const ContainerData = styled('div', {
    margin: '0 auto',
    background: '$gray800',
    borderRadius: 8,
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    maxWidth: 650,
    minHeight: 500,
    padding: '2rem',
    margin: 0,
    
    
})
export const Input = styled('input', {
    margin: '1rem',
    padding: '1rem',
    borderRadius: '6px',
    width: '15rem',
    height: '1.5rem',
    border: 0,
    outline: '$blue100',
    background:'$gray900',

    color: '$gray300',
    fontWeight: 'bold',

    '&:hover': {
        border: '1px solid $green300',
    },

    '&:focus': {
        border: '1px solid $green300',
    },

})

export const ButtonBuy = styled('button', {
    padding: '1rem',
    marginTop: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', 
    color: '$gray300',
    fontWeight: 'bold',
    background: '$green500',
    fontSize: '16px',

    borderRadius: '8px',
    border: 0,

    '&:hover': {
        background: '$green300'
    }

})

export const Checkout = styled('div', {
    marginTop: '1rem',
})

