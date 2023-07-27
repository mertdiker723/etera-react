import { Container, Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions, Grid } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Context
import { InitialContext, useDataState } from "../../../screen/Home/HomeContext";

// Styles
import "./Style.scss"
const ListingProduct = () => {
    const { memoProductListing } = useDataState() as InitialContext;
    const dispatch = useDispatch()
 
    // Route
    const navigate = useNavigate();

    return (
        <Container disableGutters sx={{ mt: 4, pl: 5, pr: 5 }}>
            <Grid container spacing={3}>
                {
                    memoProductListing.map(product => {
                        const { brand, id, image, model, price } = product || {};
                        return (
                            <Grid item xs={12} sm={4} md={3} key={id}>
                                <Card>
                                    <CardActionArea onClick={() => navigate(`/product-detail/${id}`)}>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={image}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {price} ₺
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {brand}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {model}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button onClick={() => dispatch({ type: "CART_ADD", payload: { id, name: brand, price } })} size="small" variant="contained" fullWidth className="add-cart__button">
                                            Add To Cart
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })
                }

            </Grid>

        </Container>
    )
}

export default ListingProduct