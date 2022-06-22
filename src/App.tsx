import { ThemeProvider } from '@mui/material/styles';
import Routers from './Routers';
import StylesGlobal from './config/styles/GlobalStyles';
import  lightTheme, { darkTheme } from './config/styles/themes/Default';
// import { darkTheme, lightTheme } from './config/styles/themes/Default';
// import themeDefault from './config/styles/themes/Default';


export default function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <StylesGlobal/>
            <Routers/>
        </ThemeProvider>
    );
}