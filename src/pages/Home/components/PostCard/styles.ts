import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostCardContainer = styled(Link)`
  width: 26rem;
  height: 16.25rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  cursor: pointer;

  border: 2px solid transparent;
  border-radius: 10px;
  background: ${({ theme }) => theme['base-post']};
  transition: border 0.7s;

  &:hover {
    border: 2px solid ${({ theme }) => theme['base-label']};
  }
`
export const PostCardTitleContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: first baseline;

  h1 {
    height: 4rem;
    flex: 1;

    font-size: 1.25rem;
    line-height: 160%;

    color: ${({ theme }) => theme['base-title']};

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    width: 4rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-span']};
  }
`
export const PostCardContentContainer = styled.div`
  height: 7rem;

  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
