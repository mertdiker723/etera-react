import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container, Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions, Grid } from "@mui/material"

// Context
import { useDataState } from "../../../screen/Home/HomeContext";

// Styles
import "./Style.scss"
const ListingProduct = () => {
    const { productListing, radioSortBy } = useDataState();
    const dispatch = useDispatch()

    // Route
    const navigate = useNavigate();

    const memoProductListing = useMemo(() => {
        if (productListing) {
            const shallowCopyProductListing = [...productListing];
            switch (radioSortBy) {
                case "priceHighToLow":
                    return shallowCopyProductListing.sort((a, b) => (+a.price < +b.price) ? 1 : (+a.price > +b.price) ? -1 : 0);
                case "priceLowToHigh":
                    return shallowCopyProductListing.sort((a, b) => (+a.price > +b.price) ? 1 : (+a.price < +b.price) ? -1 : 0);
                case "oldToNew":
                    return shallowCopyProductListing.sort((a, b) => {
                        const oldToNewDate = (date: string) => new Date(date).getTime();
                        return oldToNewDate(a.createdAt) > oldToNewDate(b.createdAt) ? 1 : (oldToNewDate(a.createdAt) < oldToNewDate(b.createdAt)) ? -1 : 0
                    });
                case "newToOld":
                    return shallowCopyProductListing.sort((a, b) => {
                        const newToOldDate = (date: string) => new Date(date).getTime();
                        return (newToOldDate(a.createdAt) < newToOldDate(b.createdAt)) ? 1 : (newToOldDate(a.createdAt) > newToOldDate(b.createdAt)) ? -1 : 0
                    });
                default:
                    return productListing;
            }
        }
    }, [radioSortBy, productListing]);

    return (
        <Container disableGutters sx={{ mt: 4, pl: 5, pr: 5 }}>
            <Grid container spacing={3}>
                {
                    memoProductListing && memoProductListing.map(product => {
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