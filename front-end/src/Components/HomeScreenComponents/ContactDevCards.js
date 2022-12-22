import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Card, Typography, Link } from '@mui/material';
import "./ContactDevCards.css"

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import CardMedia from '@mui/material/CardMedia';
function CardFormat(card) {
    return (
        <Card sx={{ maxWidth: 280 }} variant="outlined" className="text-center p-4 " align="center">
            <img src={card.photo} className="profileCard-Img" justify="center" >
            </img>
            {/* <CardMedia component="img" alt="pfp" image="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F312b1033-01d7-4b1c-a075-64ca0c79b05c%2FOlayinka_Fakanbi.jpg?id=a5b8ac40-ed54-464d-9702-7dd5c24a0e22&table=block&spaceId=e2735e9b-8fe9-4c16-bdc1-be142cd1014e&width=2000&userId=1db7092b-3ec4-4da8-985b-7b836b0a69ad&cache=v2" /> */}
            <Typography variant='body2' align='center' >
                <h2>{card.name}</h2>
                <Link href={card.linkedin} rel="noopener noreferrer" target="_blank">
                    <LinkedInIcon />
                </Link>
                {"  "}
                <Link href={card.github} rel="noopener noreferrer" target="_blank">
                    <GitHubIcon />
                </Link>
                {"  "}
                <Link href={card.email} rel="noopener noreferrer" target="_blank">
                    <EmailIcon />
                </Link>
                <Link href={card.code} rel="noopener noreferrer" target="_blank">
                    <CodeIcon />
                </Link>
            </Typography>
        </Card>
    )

}

export default function ContactDevCards() {
    const developers = [
      
        {
            name: 'Olayinka Fakanbi',
            email: 'olayinkafakanbi@pursuit.org',
            photo: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F312b1033-01d7-4b1c-a075-64ca0c79b05c%2FOlayinka_Fakanbi.jpg?id=a5b8ac40-ed54-464d-9702-7dd5c24a0e22&table=block&spaceId=e2735e9b-8fe9-4c16-bdc1-be142cd1014e&width=2000&userId=1c56301b-4ffe-419f-b2c0-5424d42c657c&cache=v2',
            github: 'https://github.com/Olayinka19',
            linkedin: 'http://linkedin.com/in/olayinka-fakanbi-2a46a6229',
            code: 'https://pursuit.codetrack.dev/fellow/263'
        }
    ]

    return (
        <Grid sx={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)' }}>
            {developers.map(person => CardFormat(person))}
        </Grid>
    )
}