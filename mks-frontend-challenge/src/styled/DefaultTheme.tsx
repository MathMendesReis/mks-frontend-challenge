import React, { ReactNode } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'

const round = (num: number) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px: number) => `${round(px / 16)}rem`

export const theme: DefaultTheme = {
  colors: {
    white: '#FFFFFF',
    black: '#0C0D0F',
    blue:"#0F52BA",
    gray:'#2C2C2C'
  },
  fontFamily: {
    heading: ['Montserrat'].join(','),
    sans: ['Open Sans', 'Arial', 'Helvetica', 'sans-serif'].join(','),
    mono: ['IBM Plex Mono', 'serif'].join(','),
  },
  fontSize: {
    xs: rem(10),
    sm: rem(12),
    md: rem(14),
    base: rem(16),
    lg: rem(18),
    xl: rem(20),
    '2xl': rem(24),
    '3xl': rem(32),
    '4xl': rem(40),
    '5xl': rem(64),
  },
}

interface ThemeProps {
  children: ReactNode
}

export function Theme({ children }: ThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}