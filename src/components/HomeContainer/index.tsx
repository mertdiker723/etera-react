import { useEffect } from "react";
import axios, { AxiosResponse } from "axios";

// Material UI
import { Container, Grid } from "@mui/material";

// Components
import ListingProduct from "./ListingProduct";
import SideBar from "./SideBar";
import Cart from "./Cart";

// Core
import { GET_PRODUCT_LIST } from "../../core/api/apiRoute";

// Types
import { ProductType } from "./types";

// Context
import { useDataDispatch } from "../../screen/Home/HomeContext";

// Styles
import "./Style.scss";

const Home = () => {
    const dispatch = useDataDispatch();
    useEffect(() => {
        axios.get(GET_PRODUCT_LIST).then((res: AxiosResponse) => {
            const { data } = res;
            dispatch({ type: "GET_PRODUCTS", payload: { productListing: data as ProductType[] } })
        }).catch(err => {
            console.log(err);
        })
    }, [dispatch])

    return (
        <Container disableGutters maxWidth="xl" sx={{ pl: 5, pr: 5 }}>
            <Grid container>
                <Grid item xs={2}>
                    <SideBar />
                </Grid>
                <Grid item xs={8}>
                    <ListingProduct />
                </Grid>
                <Grid item xs={2}>
                    <Cart />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home