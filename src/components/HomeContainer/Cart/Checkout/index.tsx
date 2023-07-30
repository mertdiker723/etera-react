import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';


const Checkout = () => {
    return (
        <Card>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Cart
                </Typography>
                <Typography variant="h5" component="div">
                    ntesting
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default Checkout