import { relativeDateFormatter } from '@/utils/formatter'
import { IPost } from '../..'
import {
  PostCardContainer,
  PostCardContentContainer,
  PostCardTitleContainer,
} from './styles'

interface PostProps {
  post: IPost
}

export function PostCard({ post }: PostProps) {
  const formattedDate = relativeDateFormatter(post.created_at)
  return (
    <PostCardContainer to={`/post/${post.number}`}>
      <PostCardTitleContainer>
        <h1>{post.title}</h1>
        <span>{formattedDate}</span>
      </PostCardTitleContainer>

      <PostCardContentContainer>
        <p>{post.body}</p>
      </PostCardContentContainer>
    </PostCardContainer>
  )
}
