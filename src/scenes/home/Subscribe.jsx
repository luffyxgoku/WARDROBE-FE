import { Box, InputBase, Divider, Typography, IconButton } from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { useState } from "react";
import subscribe from "./subscribe.jpeg"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


const Subscribe = () => {
  const [email, setEmail] = useState("");

  return (
    <Box width="80%"
    margin="80px auto"
    textAlign="center"
    sx={{
      backgroundImage:`url(${subscribe})`,
      width: "100%",
      height:"auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundSize: "cover",
      backgroundPosition: "center",
      }} >
      <IconButton>
        <MarkEmailReadOutlinedIcon fontSize="large" />
      </IconButton>
      <Typography variant="h3">Subscribe To Our Newsletter</Typography>
      <Typography>
        and receive $20 coupon for your first order when you checkout
      </Typography>
      <Box
        p="2px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        width="75%"
        backgroundColor="white"
        component="form"
        action="https://formspree.io/f/xgebrpoq"
        method="POST"
      >
        <InputBase
          name="email"
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />         
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <button type="submit" style={{ border: 'none' , backgroundColor: "white"}}>
          <Typography sx={{ p: "10px", ":hover": { cursor: "pointer" } }}>
            Subscribe
          </Typography>
        </button>
      </Box>
      <Typography>
        Will be used in accordance with our Privacy Policy
      </Typography>
      
      <Box p="2px 4px" m="15px auto" width="75%">
        <IconButton>
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton>
          <FacebookIcon fontSize="large" />
        </IconButton>
        <IconButton>
          <TwitterIcon fontSize="large" />
        </IconButton>
        <IconButton>
          <InstagramIcon fontSize="large" />
        </IconButton>
      </Box>

    </Box>
  );
};

export default Subscribe;
