import { useDispatch, useSelector } from 'react-redux';

// Material UI
import { Card, CardActions, CardContent, Button, Typography, ToggleButtonGroup, ToggleButton, Grid } from '@mui/material';

// Types
import { InitialStateType } from '../../../../core/redux/reducer/cart/initialState';


const SelectedProduct = () => {
    const cartItem = useSelector<{ cartItem: InitialStateType }>((item) => item.cartItem) as InitialStateType[];
    const dispatch = useDispatch()

    const handleChange = (event: React.MouseEvent<HTMLElement>, data: InitialStateType) => {
        const { id, name, price, count } = data;
        if (event.currentTarget.id === "plus") {
            dispatch({ type: "CART_ADD", payload: { id, name, price, count } })
            return;
        }
        dispatch({ type: "CART_MINUS", payload: { id, name, price, count } })
    };

    return (
        <Card>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Cart
                </Typography>
                {
                    cartItem.map(item => {
                        const { id, count, name, price } = item;
                        return (
                            <Grid container sx={{ mt: 1 }} key={id}>
                                <Grid item xs={6}>
                                    {name}
                                    <br />
                                    {price * (count || 1)} ₺
                                </Grid>
                                <Grid item xs={6}>
                                    <ToggleButtonGroup
                                        value={id}
                                        exclusive
                                        onChange={handleChange}
                                        aria-label="Platform"
                                    >
                                        <ToggleButton id="minus" value={item}>-</ToggleButton>
                                        <ToggleButton disabled value={item}>{count}</ToggleButton>
                                        <ToggleButton id="plus" value={item}>+</ToggleButton>
                                    </ToggleButtonGroup>
                                </Grid>

                            </Grid>
                        )
                    })
                }
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default SelectedProduct