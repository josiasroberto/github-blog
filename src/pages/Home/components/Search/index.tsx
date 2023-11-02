import { zodResolver } from '@hookform/resolvers/zod'
import { SearchContainer } from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchForm = z.infer<typeof searchFormSchema>

interface SearchInputProps {
  postsLength: number
  getPosts: (query?: string) => Promise<void>
}

export function Search({ postsLength, getPosts }: SearchInputProps) {
  const { register, handleSubmit } = useForm<SearchForm>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchForm) {
    await getPosts(data.query)
  }

  return (
    <SearchContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <div>
        <p>Publicações</p>
        <span>
          {postsLength > 1
            ? `${postsLength} publicações`
            : `${postsLength} publicação`}
        </span>
      </div>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchContainer>
  )
}
