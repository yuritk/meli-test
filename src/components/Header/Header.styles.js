import React from 'react';
import styled from 'styled-components'

import { theme, breakpoints } from '../../lib/styled';

const MLLogo = '/static/logo.png'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${theme('spacing.appBar')}px;
  background-color: ${theme('palette.primary.main')};
  color: ${theme('palette.white')};
`
export const LinkWrapper = styled.a`
  fill: white;
  display: flex;
  align-items: center;
`

export const MLIcon = styled.img.attrs({
  src: MLLogo
})`
  margin: 0 ${theme('spacing.double')}px;

  ${breakpoints('sm')} {
    position: absolute;
    left: 0;
  }
`

export const Title = styled.h1`
  ${breakpoints('xs')} {
    display: none;
  }
  ${breakpoints('sm')} {
    display: block;
  }
`