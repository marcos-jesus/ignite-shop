import { styled } from '@/styles'
export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$lg',
    color: '$gray300',
    maxWidth: 500,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.6,
  },

  a: {
    marginTop: '5rem',
    color: '$green500',
    textDecoration: 'none',
    fontSize: '$lg',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ImageContainer = styled('main', {
  width: '100%',
  maxWidth: 130,
  height: 145,
  background: 'linear-gradient(180deg, $pink900 10%, $blue300 90%)',
  borderRadius: 8,
  padding: '0.25rem',
  marginTop: '3rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})
