'use client'
import React, { FC, ReactNode } from 'react'
import { ThemeProvider } from 'next-themes';

interface Props {
  children?: ReactNode;
}
const ModeProvider: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider attribute="class">
      {children}
    </ThemeProvider>
  )
}

export default ModeProvider