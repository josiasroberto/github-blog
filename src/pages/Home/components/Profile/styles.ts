import styled from 'styled-components'

export const ProfileContainer = styled.div`
  margin: -5.625rem auto 0;
  padding: 2rem 2rem 2rem 2.5rem;
  /* width: 54rem; */
  display: flex;
  gap: 2rem;

  background: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`
export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  h1 {
    font-size: 1.5rem;
    line-height: 130%;
  }

  span {
    display: flex;
    align-items: flex-start;
    color: ${({ theme }) => theme.blue};

    p {
      font-size: 0.75rem;
      font-weight: 700;

      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;
      transition: border-bottom 0.7s;
    }
    svg {
      margin-left: 0.5rem;
      width: 0.75rem;
      height: 0.75rem;
    }

    p:hover {
      border-bottom: 1px solid ${({ theme }) => theme.blue};
    }
  }
`
export const InfoContainer = styled.div`
  margin-top: 1.5rem;
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
