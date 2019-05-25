import styled, { css } from 'styled-components'

export default styled.div`
  padding: 0 17vw;
  
  ${({ theme }) => css`
    ${theme.breakpoints.down('sm')} {
      padding: 0 ${theme.spacing.double}px;
    }
  `}
`