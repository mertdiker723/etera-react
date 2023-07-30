import { useSelector } from 'react-redux';

// Material UI
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';

// Types
import { InitialStateType } from '../../../../core/redux/reducer/cart/initialState';


const Checkout = () => {
    const cartItem = useSelector<{ cartItem: InitialStateType }>((item) => item.cartItem) as InitialStateType[];
    
    return (
        <Card>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Cart
                </Typography>
                {
                    cartItem.map(item => {
                        const { id, name, price, count } = item;
                        return (
                            <Typography key={id} component="div">
                                {name} - Price {price * (count || 1)} - Count: {count}
                            </Typography>
                        )
                    })
                }
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