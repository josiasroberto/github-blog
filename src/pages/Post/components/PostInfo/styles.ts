import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  margin: -5.625rem auto 0;
  padding: 2rem 2rem 2rem 2.5rem;

  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  h1 {
    margin-top: 2.5rem;
    font-size: 1.5rem;
    line-height: 130%;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    gap: 0.5rem;
    color: ${({ theme }) => theme.blue};
    cursor: pointer;

    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;

    transition: border-bottom 0.7s;

    p {
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
    }
    svg {
      width: 0.75rem;
      height: 0.75rem;
      margin: auto;
    }

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.blue};
    }
  }
`
export const InfoContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${({ theme }) => theme['base-label']};
    }
    p {
      color: ${({ theme }) => theme['base-subtitle']};
    }
  }
`
