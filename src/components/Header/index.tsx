import { HeaderContainer, LogoContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src="/icon.svg" alt="" />
        <p>GITHUB BLOG</p>
      </LogoContainer>
    </HeaderContainer>
  )
}
