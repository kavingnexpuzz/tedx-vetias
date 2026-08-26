import React from "react";
import { Box } from "@mui/material";

const TEDxLogo = ({
  size = 28,
  tedColor = "#E62B1E",
  textColor = "#FFFFFF",
  backgroundColor = "transparent",
  style = {},
  className = "",
}) => {
  return (
    <Box
      className={className}
      sx={{
        display: "inline-flex",
        alignItems: "baseline",
        background: backgroundColor,
        userSelect: "none",
        lineHeight: 1,
        fontFamily: "Arial, Helvetica, sans-serif",
        ...style,
      }}
    >
      <Box
        component="span"
        sx={{
          color: tedColor,
          fontWeight: 800,
          fontSize: `${size}px`,
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        TED
        <Box
          component="span"
          sx={{
            fontSize: "0.62em",
            fontWeight: 700,
            textTransform: "lowercase",
            verticalAlign: "0.08em",
            ml: "-0.02em",
            mr: "0.22em",
          }}
        >
          x
        </Box>
      </Box>
      <Box
        component="span"
        sx={{
          color: textColor,
          fontWeight: 400,
          fontSize: `${size * 0.9}px`,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          lineHeight: 1,
        }}
      >
        VETIAS
      </Box>
    </Box>
  );
};

export default TEDxLogo;

