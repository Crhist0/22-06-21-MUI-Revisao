import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
    }
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    }
});

export default lightTheme