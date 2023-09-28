import styled from 'styled-components'

export const HomeContainer = styled.div`
  padding: 0 2rem;
  width: 58rem;
  margin: 0 auto;
`

export const SearchContainer = styled.div`
  margin-top: 4.5rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 1.125rem;
      font-weight: 700;
      color: ${({ theme }) => theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme['base-span']};
    }
  }

  input {
    margin-top: 0.75rem;
    width: 100%;
    padding: 0.75rem 1rem;
    cursor: pointer;

    background: ${({ theme }) => theme['base-input']};
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme['base-border']};
    color: ${({ theme }) => theme['base-text']};

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }
  }
`
