import { InfoContainer, LinksContainer, PostInfoContainer } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function PostInfo() {
  return (
    <PostInfoContainer>
      <LinksContainer>
        <span>
          <FontAwesomeIcon icon={faChevronLeft} />
          <p>VOLTAR</p>
        </span>

        <span>
          <p>VER NO GITHUB</p>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </span>
      </LinksContainer>

      <h1>JavaScript data types and data structures</h1>

      <InfoContainer>
        <span>
          <FontAwesomeIcon icon={faGithub} />
          <p>josiasroberto</p>
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendarDay} />
          <p>Há 1 dia</p>
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} />
          <p>5 comentários</p>
        </span>
      </InfoContainer>
    </PostInfoContainer>
  )
}
