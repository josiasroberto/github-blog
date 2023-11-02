import { useCallback, useEffect, useState } from 'react'
import { PostContent } from './components/PostContent'
import { PostInfo } from './components/PostInfo'
import { PostContainer } from './styles'
import { IPost } from '../Home'
import { api } from '@/lib/axios'
import { useParams } from 'react-router-dom'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export function Post() {
  const [postData, setPostData] = useState<IPost>({} as IPost)
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true)

      const response = await api.get(
        `/repos/${username}/${repoName}/issues/${id}`,
      )

      setPostData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [id])

  useEffect(() => {
    getPostDetails()
  }, [getPostDetails])

  return (
    <PostContainer>
      <PostInfo isLoading={isLoading} postData={postData} />
      {!isLoading && <PostContent content={postData.body} />}
    </PostContainer>
  )
}
