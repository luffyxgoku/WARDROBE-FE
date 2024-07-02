import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton, InputBase, Paper } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";
import logo from "./logo.png";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.css";
// import LoginIcon from '@mui/icons-material/Logout';
import LogoutIcon from '@mui/icons-material/Logout';

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchText)}`);
    setShowSearch(false);
    setSearchText("");
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      backgroundColor="rgba(255, 255, 255, 0.95)"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >

        <Box
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.secondary[500]}
        >
          <div className="logo-container">
          <NavLink to="/">
          <img src={logo} alt="Logo" style={{ width: "50px", height: "50px", marginRight: "10px" }} />
          </NavLink>
          <b className="company-name">THE WARDROBE.</b> 
          </div>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          {/* <IconButton sx={{ color: "black" }} onClick={handleSearchClick}>
            <SearchOutlined />
          </IconButton> */}


          <IconButton sx={{ color: "black" }} onClick={handleSearchClick}>
            <SearchOutlined />
          </IconButton>
            {showSearch && (
              <Paper component="form" onSubmit={handleSearchSubmit}>
                <InputBase
                  placeholder="Search..."
                  sx={{ ml: 1, flex: 1 }}
                  inputProps={{ "aria-label": "search" }}
                  value={searchText}
                  onChange={handleSearchTextChange}
                />
                <IconButton type="submit" sx={{ color: "black" }}>
                  <SearchOutlined />
                </IconButton>
              </Paper>
          )}
          
          {isAuthenticated ?(
            
            <IconButton sx={{ color: "black" }} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            <LogoutIcon />
          </IconButton>

          ) : (
            <IconButton sx={{ color: "black" }} onClick={() => loginWithRedirect()}>
            <PersonOutline />
          </IconButton>
          )}
            
          <IconButton sx={{ color: "black" }} >
            <FavoriteBorderOutlined/>
          </IconButton>

          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: "black" }}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
          

          <IconButton sx={{ color: "black" }}>
            <MenuOutlined />
          </IconButton>

        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
