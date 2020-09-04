import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { exec } from 'child_process';
import { createGlobalStyle } from 'styled-components';

import { MainBar } from './MainBar';
import { ThemeContext, ThemeContextValue, defaultThemeValue } from '../../contexts/ThemeContext';
import { CompositorContext, CompositorContextValue, defaultCompositorValue } from '../../contexts/CompositorContext';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    padding: 0;
    margin: 0;
    background-color: transparent;
    font-size: 14px;
    height: 100%;
    width: 100%;
  }

  *::-webkit-scrollbar { display: none; }

  #root {
    display: flex;
  }
`;


export function App() {
  const [compositor, setCompositor] = useState<CompositorContextValue>(defaultCompositorValue);
  const [theme, setTheme] = useState<ThemeContextValue>(defaultThemeValue);
  useEffect(() => {
    setInterval(() => {
      exec('qdbus org.kde.KWin /Compositor org.kde.kwin.Compositing.active', (_err, stdout) => {
        setCompositor({
          enabled: !!stdout,
          wm: 'kwin'
        });
      });
    }, 5000);
  });

  return (
    <>
      <GlobalStyle />
      <ThemeContext.Provider value={theme}>
        <CompositorContext.Provider value={compositor}>
          <MainBar />
        </CompositorContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

render(<App />, document.querySelector('#root'));