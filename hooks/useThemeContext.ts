import React, {
  Context,
  createContext,
  FC,
  useContext,
  useEffect,
  useMemo,
  useState
  } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function useThemeContext() {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error('useThemeContext must be used within ThemeProvider');
  }
  return theme;
}

export default useThemeContext;
