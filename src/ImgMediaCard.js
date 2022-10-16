import * as React from 'react';
import { jsx } from '@emotion/react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { CardActionArea } from '@mui/material';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import data from './data.json'
import './ImgMediaCard.css'



export default function ImgMediaCard(props) {
    return (
        
        <Card sx={
            {
            maxWidth: 345, 
            position:'sticky',
            right: 100, 
            down: 400}
            }>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {[props.name]} 
                    </Typography>;
                    <Typography variant="body2" color="text.secondary">
                        {[props.item]}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {[props.price]}
                    </Typography>
                    <Button size="small" color="primary">
                        {props.price}
                    </Button>
                </CardContent>
            </CardActionArea>
        </Card>
        
    );
}
