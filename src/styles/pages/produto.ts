import { styled } from '@/styles'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: '1180',
  margin: '0 auto',
  padding: '5rem',
})
export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 'calc(656px - 10rem)',
  background: 'linear-gradient(180deg, $pink900 10%, $blue300 90%)',
  borderRadius: 8,

  padding: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
export const ProductDescription = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
  },

  button: {
    marginTop: 'auto',
    background: '$green500',
    border: 0,
    borderRadius: 8,
    padding: '1.5rem',
    color: '$gray500',
    fontSize: '$md',
    fontWeight: 'bold',
    cursor: 'pointer',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
      transition: '0.2s',
    },
  },
})
