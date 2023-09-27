import { InfoContainer, NameContainer, ProfileContainer } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import profileImg from '@/assets/profileImg.jpg'

export function Profile() {
  return (
    <ProfileContainer>
      <img src={profileImg} alt="" />

      <div>
        <NameContainer>
          <h1>Josias Roberto</h1>
          <span>
            <p>
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </p>
          </span>
        </NameContainer>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          neque minima cumque eaque, ullam quas laborum quia et esse. Sapiente
          nemo similique sint doloremque reiciendis assumenda et ipsam minima
          possimus.
        </p>

        <InfoContainer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            <p>josiasroberto</p>
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            <p>Rocketseat</p>
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            <p>30 seguidores</p>
          </span>
        </InfoContainer>
      </div>
    </ProfileContainer>
  )
}
