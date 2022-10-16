import { CardActionArea, Card, CardContent, CardMedia, Button, Typography } from '@mui/material';
import './ImgMediaCard.css'

function ImgMediaCard(props) {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {[props.item]} 
                    </Typography>;
                    <Typography variant="body2" color="text.secondary">
                        {[props.name]}
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

export default ImgMediaCard;
