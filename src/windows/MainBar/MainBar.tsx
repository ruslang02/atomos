import { mdiApps, mdiWindowMaximize } from '@mdi/js';
import Icon from '@mdi/react';
import Color from 'color';
import { ipcRenderer, IpcRendererEvent } from 'electron';
import React, { useContext, useEffect, useState } from 'react';
import styled, { ThemeProps, ThemeProvider } from 'styled-components';
import { Window } from 'wmctrljs';
import { CompositorContext, CompositorContextValue } from '../../contexts/CompositorContext';
import { ThemeContext, ThemeContextValue } from '../../contexts/ThemeContext';

interface RenderProps {
  readonly compositor: CompositorContextValue;
  readonly theme: ThemeContextValue;
}

const Container = styled.section<RenderProps>`
  background: ${props => props.compositor.enabled ? 'none' : `#${props.theme.colors.mainbar_background.toString(16)}`};
  border: ${props => props.compositor.enabled ? 'none' : `1px solid #${props.theme.colors.mainbar_border.toString(16)}`};
  flex-grow: 1;
  padding-left: .75rem;
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

const FloatButton = styled.button<ThemeProps<ThemeContextValue>>`
  background: #${props => props.theme.colors.primary.toString(16)};
  color: ${props => Color(props.theme.colors.primary).isLight() ? '#000' : '#FFF'};
  border: none;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);
  border-radius: 100px;
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  padding: .5rem .75rem;
  margin-right: .5rem;
  flex-shrink: 0;
  max-width: 150px;
  span {
    overflow: hidden;
    flex-grow: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  svg {
    flex-shrink: 0;
  }
`;



function TaskBar() {
  const [windows, setWindows] = useState<Window[]>([]);
  useEffect(() => {
    const handleGetWindows = (_e: IpcRendererEvent, val: Window[]) => {
      console.log(val);
      setWindows(val);
    };
    ipcRenderer.on('x11.getWindows', handleGetWindows);
    return () => {
      ipcRenderer.off('x11.getWindows', handleGetWindows);
    };
  });
  return (
    <div style={{ flexGrow: 1, overflow: "auto", width: "0", padding: ".5rem" }}>{
      windows.map(window => (
        <FloatButton>
          <Icon path={mdiWindowMaximize} size="24px" />
          <span style={{ marginLeft: '.25rem' }}>{window.win_name}</span>
        </FloatButton>
      ))
    }
    </div>
  );

}

export function MainBar() {
  const compositor = useContext(CompositorContext);
  const theme = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <Container compositor={compositor}>
        <FloatButton>
          <Icon path={mdiApps} size={'24px'} />
          <span style={{ marginLeft: '.25rem' }}>Apps</span>
        </FloatButton>
        <TaskBar />
      </Container>
    </ThemeProvider>
  )
}