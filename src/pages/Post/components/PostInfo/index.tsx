import { InfoContainer, LinksContainer, PostInfoContainer } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useNavigate } from 'react-router-dom'
import { IPost } from '@/pages/Home'
import { Spinner } from '@/components/Spinner'
import { relativeDateFormatter } from '@/utils/formatter'

interface PostHeaderProps {
  postData: IPost
  isLoading: boolean
}

export function PostInfo({ postData, isLoading }: PostHeaderProps) {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  const formattedDate = relativeDateFormatter(postData?.created_at)

  return (
    <PostInfoContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <LinksContainer>
            <a onClick={goBack}>
              <FontAwesomeIcon icon={faChevronLeft} />
              <p>VOLTAR</p>
            </a>

            <a href={postData.html_url} target="_blank" rel="noreferrer">
              <p>VER NO GITHUB</p>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </LinksContainer>

          <h1>{postData.title}</h1>

          <InfoContainer>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              <p>{postData.user.login}</p>
            </span>
            <span>
              <FontAwesomeIcon icon={faCalendarDay} />
              <p>{formattedDate}</p>
            </span>
            <span>
              <FontAwesomeIcon icon={faComment} />
              <p>
                {postData.comments > 1
                  ? `${postData.comments} comentários`
                  : `${postData.comments} comentário`}{' '}
              </p>
            </span>
          </InfoContainer>
        </>
      )}
    </PostInfoContainer>
  )
}
