import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Confirmation = () => {
  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="success">
        <AlertTitle sx={{ padding: "10px" }}>SUCCESS</AlertTitle>
        <Box>You have successfully made an Order</Box>
        <Box mb={2}>Congrats on Making your Purchase</Box>
        <Box mb={2}><strong>Thank you for shopping with us</strong></Box>
      </Alert>
    </Box>
  );
};

export default Confirmation;
