import React, { useState, useEffect, useContext, createContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { CustomCheckboxContainer, CustomCheckboxInput } from '@reach/checkbox';
import '@reach/checkbox/styles.css';
import { DEFAULT_THEME, THEMES } from '../styles/themes';
import { LightIcon } from './icons/LightIcon';

export const ThemeContext = createContext(null);

export const Theme = props => {
  const _window = typeof window !== 'undefined' && window;
  const [theme, setTheme] = useState(DEFAULT_THEME);

  useEffect(persist, [theme]);

  function validate(t) {
    return Object.keys(THEMES).includes(t);
  }

  function update(t) {
    validate(t) && setTheme(t);
  }

  function retrieve() {
    return _window?.localStorage?.getItem('theme');
  }

  function persist() {
    _window.localStorage.setItem('theme', theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, update }}>
      <ThemeProvider theme={THEMES[theme]} {...props} />
    </ThemeContext.Provider>
  );
};

const Container = styled(CustomCheckboxContainer)`
  margin: 0;
  width: 44px;
  height: 44px;

  &[data-reach-custom-checkbox-container]:focus-within,
  &[data-reach-custom-checkbox-container][data-focus] {
    outline: 2px solid;
    outline-offset: 4px;
    outline-color: var(--color-blue-700);
    box-shadow: none;
    border: none;
  }

  & input:hover {
    cursor: pointer;
  }

  &:active {
    opacity: 0.8;
    transform: scale(0.9);
    transition: transform 0.2s, opacity 0.2s;
  }
`;

export const ThemeToggle = props => {
  const { theme, update } = useContext(ThemeContext) || {};
  const checked = theme === 'light';

  function handleChange(e) {
    update(e.target.checked ? 'light' : 'dark');
  }

  return (
    <Container checked={checked} onChange={handleChange} {...props}>
      <label
        htmlFor="toggle"
        css={`display: flex; align-items: center; justify-content: center; width: 100%; height 100%;`}
      >
        <LightIcon
          on={!checked}
          role="img"
          aria-label="Theme toggle"
          width="2rem"
          height="2rem"
        />

        <CustomCheckboxInput
          id="toggle"
          checked={checked}
          onChange={handleChange}
          {...props}
        />
      </label>
    </Container>
  );
};
