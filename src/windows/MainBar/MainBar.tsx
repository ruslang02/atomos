import styled, { ThemeProvider } from 'styled-components';
import React, { useContext } from 'react';

import { CompositorContext, CompositorContextValue } from '../../contexts/CompositorContext';
import { ThemeContext, ThemeContextValue } from '../../contexts/ThemeContext';

interface RenderProps {
  readonly compositor: CompositorContextValue;
  readonly theme: ThemeContextValue;
}

const Container = styled.section<RenderProps>`
  background: ${props => props.compositor.enabled ? 'none' : `#${props.theme.colors.mainbar_background.toString(16)}`};
  flex-grow: 1;
  padding: .5rem;
`

export function MainBar() {
  const compositor = useContext(CompositorContext);
  const theme = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <Container compositor={compositor}>
        <button>kek</button>
      </Container>
    </ThemeProvider>
  )
}