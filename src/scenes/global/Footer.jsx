import { useTheme } from "@mui/material";
import { Box, Typography, IconButton } from "@mui/material";
import { shades } from "../../theme";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            The Wardrobe
          </Typography>
          <div>
          Wardrobe sells high-end, eco-conscious fashion and accessories for men and women. 
          <br/>
          Their product descriptions match their style: sassy, yet classy.
          <br/>
          Our website is designed to provide you with a seamless and hassle-free shopping experience. You can easily search for products using our user-friendly interface and filter results by price, brand, and other attributes.
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <div className="icon-text-container">
            <IconButton>
              <LocationOnIcon fontSize="large" />
            </IconButton>
            <Typography>
              Zakir Nagar, Azad Basti, Mango,-832110, Jamshedpur, Jharkhand, India.
            </Typography>
          </div>
          <div className="icon-text-container">
            <IconButton>
              <EmailIcon fontSize="large" />
            </IconButton>
            <Typography sx={{ wordWrap: "break-word" }}>
              Email: safi.maaz01@gmail.com
            </Typography>
          </div>
          <div className="icon-text-container">
            <IconButton>
              <PhoneIcon fontSize="large" />
            </IconButton>
            <Typography>+91-7992217849</Typography>
          </div>
        </Box>

      </Box>
    </Box>
  );
}

export default Footer;
