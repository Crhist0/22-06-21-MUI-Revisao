import { useTheme } from '@mui/material';
import GlobalStyles from '@mui/material/GlobalStyles';

export default function StylesGlobal() {
    const theme = useTheme()
    return (
        <GlobalStyles styles={{
            a: {  
                textDecoration: 'none'
            },
            body: {
                margin: 0,
                padding: 16,
                backgroundColor: theme.palette.background.default
            }
        }}/>
    );
}