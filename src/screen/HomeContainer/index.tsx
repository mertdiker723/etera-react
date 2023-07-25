
import { Container } from "@mui/material"
import Home from "../../components/Home"

// Context
import { ContextProvider } from "./HomeContext"

// Style
import "./Style.scss"

const HomeContainer = () => {
    return (
        <Container>
            <ContextProvider>
                <Home />
            </ContextProvider>
        </Container>
    )
}

export default HomeContainer