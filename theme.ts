'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: ['var(--font-public-sans)', 'var(--font-inter)'].join(','),
    },
    cssVariables: true,
});

export default theme;