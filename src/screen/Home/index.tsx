
// Components
import Home from "../../components/HomeContainer"

// Context
import { ContextProvider } from "./HomeContext"

// Style
import "./Style.scss"

const HomeContainer = () => {
    return (
        <ContextProvider>
            <Home />
        </ContextProvider>
    )
}

export default HomeContainer