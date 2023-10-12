// import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import "./Search.css";

const Search = ({ value, onChange, placeHolder }) => {
    return(
        <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:"60%" }}
      >
        {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
          <MenuIcon />
        </IconButton> */}
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          value={value}
          placeholder={placeHolder}
          onChange={onChange}
          inputProps={{ 'aria-label': {placeHolder} }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        {/* <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
          <DirectionsIcon />
        </IconButton> */}
      </Paper>
    )
    return (
        <>
            <SearchIcon className='search-icon mt-2 mr-4' fontSize='large'/>
            <input
                className="rectangle-input"
                value={value}
                onChange={onChange}
                placeholder={placeHolder}
                type="text"
            />
        </>
    );
};

export default Search;

