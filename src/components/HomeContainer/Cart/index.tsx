import { Container } from "@mui/material"

import Checkout from "./Checkout"
import SelectedProduct from "./SelectedProduct"


const Cart = () => {
    return (
        <Container disableGutters sx={{ mt: 4 }}>
            <Checkout />
            <SelectedProduct />
        </Container>
    )
}

export default Cart