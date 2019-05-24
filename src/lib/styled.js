import get from 'lodash/get'

export function theme(path) {
  return props => get(props, `theme.${path}`);
}

export function breakpoints(breakpoint) {
  return props => `@media (min-width: ${props.theme.breakpoints[breakpoint]}px)`;
}