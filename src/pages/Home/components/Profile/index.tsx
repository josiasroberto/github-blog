import { InfoContainer, NameContainer, ProfileContainer } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { useCallback, useEffect, useState } from 'react'
import { api } from '@/lib/axios'
import { Spinner } from '@/components/Spinner'

interface ProfileData {
  login: string
  bio: string
  avatar_url: string
  html_url: string
  name: string
  company?: string
  followers: number
}

const username = import.meta.env.VITE_GITHUB_USERNAME

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData)
  const [isLoading, setIsLoading] = useState(true)

  const getProfileData = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`/users/${username}`)
      setProfileData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [profileData])

  useEffect(() => {
    getProfileData()
  }, [])

  return (
    <ProfileContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <img src={profileData.avatar_url} alt="" />

          <div>
            <NameContainer>
              <h1>{profileData.name}</h1>
              <span>
                <a href={profileData.html_url} target="_blank" rel="noreferrer">
                  GITHUB
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </span>
            </NameContainer>

            <p>{profileData.bio}</p>

            <InfoContainer>
              <span>
                <FontAwesomeIcon icon={faGithub} />
                <p>{profileData.login}</p>
              </span>
              {profileData?.company && (
                <span>
                  <FontAwesomeIcon icon={faBuilding} />
                  <p>{profileData.company}</p>
                </span>
              )}
              <span>
                <FontAwesomeIcon icon={faUserGroup} />
                <p>
                  {profileData.followers > 1
                    ? `${profileData.followers} seguidores`
                    : `${profileData.followers} seguidor`}
                </p>
              </span>
            </InfoContainer>
          </div>
        </>
      )}
    </ProfileContainer>
  )
}
