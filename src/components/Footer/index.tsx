import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const Footer: React.FC = () => {
  return (
    <Box mt={8}>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Made with ❤ by Tai9 "}
      </Typography>
    </Box>
  );
};

export default Footer;
