import {
  PostCardContainer,
  PostCardContentContainer,
  PostCardTitleContainer,
} from './styles'

export function PostCard() {
  return (
    <PostCardContainer>
      <PostCardTitleContainer>
        <h1>
          JavaScript data types and data
          structureshttp://localhost:5173/http://localhost:5173/
        </h1>
        <span>Há 99199 dias</span>
      </PostCardTitleContainer>

      <PostCardContentContainer>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned
        </p>
      </PostCardContentContainer>
    </PostCardContainer>
  )
}
