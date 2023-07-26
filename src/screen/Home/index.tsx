
// Components
import Home from "../../components/Home"

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