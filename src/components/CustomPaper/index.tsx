import { Typography } from '@mui/material';
import { PaperStyled } from './styles';

type CustomPaperProps = {
    title: string;
};

export default function CustomPaper({ title }: CustomPaperProps) {
    return (
        <PaperStyled elevation={2}>
            <Typography variant='body2'>{ title }</Typography>
        </PaperStyled>
    );
}