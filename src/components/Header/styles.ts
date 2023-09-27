import styled from 'styled-components'
import coverImg from '@/assets/cover.png'

export const HeaderContainer = styled.header`
  display: flex;
  background: url(${coverImg}) no-repeat center;
  background-size: cover;
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  margin: 4rem auto 8.375rem;

  img {
    height: 2.5rem;
    width: 2.8125rem;
  }

  p {
    font-family: Coda, sans-serif;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.blue};
  }
`
