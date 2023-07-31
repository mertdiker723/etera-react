import { Container } from "@mui/material"

import SelectedProduct from "./SelectedProduct"
import Checkout from "./Checkout"


const Cart = () => {
    return (
        <Container disableGutters sx={{ mt: 4 }}>
            <SelectedProduct />
            <Checkout />
        </Container>
    )
}

export default Cart