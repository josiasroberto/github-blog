import { Profile } from './components/Profile'
import { HomeContainer, SearchContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />

      <SearchContainer>
        <div>
          <p>Publicações</p>
          <span>6 publicações</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
      </SearchContainer>
    </HomeContainer>
  )
}
