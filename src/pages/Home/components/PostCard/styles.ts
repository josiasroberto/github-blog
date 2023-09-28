import styled from 'styled-components'

export const PostCardContainer = styled.div`
  width: 26rem;
  height: 16.25rem;
  padding: 2rem;

  border-radius: 10px;
  background: ${({ theme }) => theme['base-post']};
`
