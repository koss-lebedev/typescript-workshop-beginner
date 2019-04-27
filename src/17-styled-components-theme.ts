import styled from 'styled-components'

const theme = {
  color: {
    text: '#141414',
    border: '#D8DCE3',
  },
  fontSize: {
    header: '2rem',
    regular: '1.6rem',
    small: '1.2rem',
  },
}

export const Container = styled.section`
  display: flex;
  font-size: ${theme.fontSize.regular};
`
