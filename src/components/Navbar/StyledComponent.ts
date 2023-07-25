// Material UI
import { InputBase } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

// This styled components has been taken from Material UI

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: "2px",
    backgroundColor: 'white',
    transition: 'all 0.2s',
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.9),
    },
    marginRight: theme.spacing(2),
    marginLeft: "100px !important",
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        width: 'auto',
    },
    [theme.breakpoints.down('md')]: {
        marginLeft: "20px !important",
        width: 'auto',
    },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        color: 'black',
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '280px',
        },
    },
}));