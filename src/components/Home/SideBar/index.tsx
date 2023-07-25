import { Container } from "@mui/material"
import Brands from "./Brands"
import Model from "./Model"
import SortBy from "./SortBy"

const SideBar = () => {
    return (
        <Container disableGutters sx={{ mt: 4 }}>
            <SortBy />
            <Model />
            <Brands />
        </Container>
    )
}

export default SideBar