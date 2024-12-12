'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                }
            }
        }
    },
    typography: {
        fontFamily: ['var(--font-public-sans)', 'var(--font-inter)'].join(','),
    },
    cssVariables: true,
    palette: {
        primary: {
            main: '#0f172a',
        },
        secondary: {
            main: '#64748B',
        },
        background: {
            default: '#ffffff',
        },
    },
});

export default theme;