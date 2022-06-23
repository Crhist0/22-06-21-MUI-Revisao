import { Box, Grid } from "@mui/material"
import Card from "../../components/Card"
import CardImage from "../../components/CardImage"
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';

function Landing() {

    return(
        <>
            <ScreenshotMonitorIcon sx={{fontSize: "150px"}}  />
            <ScreenshotMonitorIcon fontSize="large"  />
            <ScreenshotMonitorIcon fontSize="medium"  />
            <ScreenshotMonitorIcon fontSize="small"  />
            
            <Grid container >

                <Grid item xs={6}>
                    <Card titulo="Redmi 9">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla consequuntur ea voluptates amet veritatis tempora cumque, aliquid suscipit hic molestiae tenetur reprehenderit voluptatem neque non similique pariatur nemo a architecto eos. Reiciendis asperiores necessitatibus eveniet, dicta labore ipsam architecto. Exercitationem ducimus animi unde rem reiciendis odit delectus vitae, inventore consequuntur!
                    </Card>
                </Grid>

                <Grid item xs={6} >
                    <Box sx={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
                        <CardImage 
                        imageSrc="https://s2.glbimg.com/eZhbs6wbw4jsNIkonx40CjSc1Ug=/0x0:695x460/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/n/V/5xQRVeRSyTowkTugZ9mA/2016-10-11-6610.jpg" 
                        imageAlt="Nokia Tijolão" />
                    </Box>
                </Grid>

            </Grid>

            <Grid container>

                <Grid item xs={6} >
                    <Box sx={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
                        <CardImage 
                        imageSrc="https://s2.glbimg.com/eZhbs6wbw4jsNIkonx40CjSc1Ug=/0x0:695x460/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/n/V/5xQRVeRSyTowkTugZ9mA/2016-10-11-6610.jpg" 
                        imageAlt="Nokia Tijolão" />
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Card titulo="Redmi 9">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla consequuntur ea voluptates amet veritatis tempora cumque, aliquid suscipit hic molestiae tenetur reprehenderit voluptatem neque non similique pariatur nemo a architecto eos. Reiciendis asperiores necessitatibus eveniet, dicta labore ipsam architecto. Exercitationem ducimus animi unde rem reiciendis odit delectus vitae, inventore consequuntur!
                    </Card>
                </Grid>
                
            </Grid>
        </>
    )
}

export default Landing
