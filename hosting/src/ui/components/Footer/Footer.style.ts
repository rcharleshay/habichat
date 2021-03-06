import styled from 'styled-components'
import LogoTwitter from 'react-ionicons/lib/LogoTwitter'
import LogoLinkedIn from 'react-ionicons/lib/LogoLinkedIn'
import LogoGithub from 'react-ionicons/lib/LogoGithub'
import theme from 'ui/assets/theme'

export const Footer = styled('header')(P => ({
  zIndex: 100,
  height: theme.FOOTER_HEIGHT,
  width: `100%`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `stretch`,
  background: theme.DIRTY_BACKGROUND,
  padding: `0 15px`,
  borderTop: `1px solid ${theme.BRAND_COLOR}`,
  ...P.style
}))

export const AppFooter = styled('header')(P => ({
  zIndex: 10000,
  height: theme.FOOTER_HEIGHT,
  width: `100%`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `stretch`,
  background: `rgba(255, 255, 255, 0.8)`,
  padding: `0 15px`,
  borderTop: `1px solid ${theme.BRAND_COLOR}`,
  ...P.style
}))

export const NewPostButton = styled('div')({
  cursor: 'pointer',
  position: 'absolute',
  background: theme.BRAND_COLOR,
  borderRadius: `50%`,
  bottom: `${theme.FOOTER_HEIGHT + 20}px`,
  right: 0,
  padding: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `0 2px 2px rgba(0,0,0,0.4)`,
  '&:hover': {
    animation: `pulse`,
    animationDuration: `1s`
  },
  '&:focus': {
    outlineWidth: '1px'
  }
})

const iconStyle = {
  border: `1px solid ${theme.BRAND_COLOR}`,
  background: theme.PRIMARY_COLOR,
  borderRadius: `50%`,
  height: theme.FONT_S,
  width: theme.FONT_S,
  padding: 5,
  margin: 5,
  [`&:hover`]: { opacity: 0.7 }
}

export const Twitter = styled(LogoTwitter)({ ...iconStyle })
export const LinkedIn = styled(LogoLinkedIn)({ ...iconStyle })
export const Github = styled(LogoGithub)({ ...iconStyle })
