import styled from 'styled-components'

export const PostContentContainer = styled.div`
  padding: 2.5rem 2rem;
  margin-bottom: 8rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  .line-break {
    white-space: pre-wrap;
  }

  img {
    width: 100%;
  }

  a {
    color: ${({ theme }) => theme.blue};
    text-decoration: underline;
  }

  ul {
    padding-left: 1.5rem;
  }

  pre {
    background: ${({ theme }) => theme['base-post']};
    padding: 1rem;

    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;

      code {
        font-family: 'FiraCode', monospace !important;
        line-height: 160% !important;
      }
    }
  }
`
