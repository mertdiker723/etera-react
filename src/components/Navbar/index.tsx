import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Material UI
import { AppBar, Box, Toolbar, Typography, Button, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import WalletIcon from '@mui/icons-material/Wallet';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

// Core
import { InitialStateType } from '../../core/redux/reducer/cart/initialState';

// Styles
import "./Style.scss";
import { Search, SearchIconWrapper, StyledInputBase } from './StyledComponent';
import { useMemo } from 'react';

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
    const cartItem = useSelector<{ cartItem: InitialStateType }>((item) => item.cartItem) as InitialStateType[];

    const sumItem = useMemo(() => {
        return cartItem.reduce((accumulator: number, currentValue: InitialStateType) => {
            return accumulator + +currentValue.price
        }, 0)
    }, [cartItem]);

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
                            <Button color="inherit"><WalletIcon />{sumItem} ₺</Button>
                        </Box>
                        <Box>
                            <Button color="inherit"><PersonOutlinedIcon />Hasan</Button>
                        </Box>
                    </Toolbar>
                </Container>
            </Box>
        </AppBar>
    );
}