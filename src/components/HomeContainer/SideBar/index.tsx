import { Container } from "@mui/material"
import SortBy from "./SortBy"

const SideBar = () => {
    return (
        <Container disableGutters sx={{ mt: 4 }}>
            <SortBy />
        </Container>
    )
}

export default SideBar