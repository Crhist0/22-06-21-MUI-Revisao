import { Box, Typography } from "@mui/material"

type CardProps = {
    children: string
    titulo: string
}

function Card(props: CardProps) {
    
    return(
        <>
            <Box sx={{
                padding: '20%'
            }} >
                <Typography variant="h4" >{props.titulo}</Typography>
                <Typography variant="body1" >
                    {props.children}
                </Typography>
            </Box>
        </>
    )
}

export default Card




// const meuObjeto: CardProps = {
// children: 'filho',
// title: 'titulo',
// num: 1
// }

// const meuObjeto2: CardProps = {
    // children: 'filho2',
// title: 'titulo2',
// num: 2
// }

// const {children, title, num: numero} = meuObjeto
// const {children: children2, title: title2, num} = meuObjeto2