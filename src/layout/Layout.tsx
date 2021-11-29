import React from 'react'
import * as PropTypes from 'prop-types'
import {InferPropTypes} from '../types/helper/react'
import {
  ContentColumn,
  NavColumn,
  Container,
  NavListItem,
  NavList,
  GlobalStyle,
  StyledNavLink,
} from './styles'
import {ROUTE_PAGE_A, ROUTE_PAGE_B} from '../routes/constants'

const propTypes = {
  children: PropTypes.node.isRequired,
}
const defaultProps = {}

type LayoutProps = InferPropTypes<typeof propTypes, typeof defaultProps>

const Layout: React.FC<LayoutProps> = ({children}) => (
  <Container>
    <GlobalStyle />
    <NavColumn>
      <h3>Navigation</h3>
      <NavList>
        <NavListItem>
          <StyledNavLink to={ROUTE_PAGE_A}>Page A</StyledNavLink>
        </NavListItem>
        <NavListItem>
          <StyledNavLink to={ROUTE_PAGE_B}>Page B</StyledNavLink>
        </NavListItem>
      </NavList>
    </NavColumn>
    <ContentColumn>{children}</ContentColumn>
  </Container>
)

Layout.propTypes = propTypes
Layout.defaultProps = defaultProps

export default Layout
