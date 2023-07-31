import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';

import { InitialStateType } from '../../../../core/redux/reducer/cart/initialState';

// Styles
import "./Style.scss";

const Checkout = () => {
    const cartItem = useSelector<{ cartItem: InitialStateType }>((item) => item.cartItem) as InitialStateType[];

    const sumItem = useMemo(() => {
        return cartItem.reduce((accumulator: number, currentValue: InitialStateType) => {
            return accumulator + (+currentValue.price * (currentValue.count || 1))
        }, 0)
    }, [cartItem]);

    return (
        <>
            <Card sx={{ mt: 4 }}>
                <CardContent>

                    <Typography variant="body2">
                        Total Price: <div className='sumItem'>{sumItem} ₺</div>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        fullWidth
                        variant="contained"
                        size="small"
                        className='checkoutButton'
                    >Checkout</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default Checkout