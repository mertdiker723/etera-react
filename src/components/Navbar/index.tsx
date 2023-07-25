import { useNavigate } from 'react-router-dom';

// Material UI
import { AppBar, Box, Toolbar, Typography, Button, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// Styles
import "./Style.scss";
import { Search, SearchIconWrapper, StyledInputBase } from './StyledComponent';

// inline css
const appBarStyles = {
    '& .MuiBox-root': {
        backgroundColor: '#2a59fe',
    },
    '& .MuiToolbar-root ': {
        minHeight: "50px"
    },
}

export default function ButtonAppBar() {
    const navigate = useNavigate();
    return (
        <AppBar position="sticky" sx={appBarStyles}>
            <Box sx={{ flexGrow: 1 }}>
                <Container >
                    <Toolbar>
                        <Typography onClick={() => navigate("/")} variant="h5" noWrap component="div" sx={{ fontWeight: 'bold', userSelect: "none", cursor: "pointer" }}>
                            Eteration
                        </Typography>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon color='disabled' />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box>
                            <Button color="inherit">Money</Button>
                        </Box>
                        <Box>
                            <Button color="inherit">Login</Button>
                        </Box>
                    </Toolbar>
                </Container>
            </Box>
        </AppBar>
    );
}