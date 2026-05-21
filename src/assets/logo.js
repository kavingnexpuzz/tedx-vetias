import React from "react";

const TEDxLogo = ({
  width = 280,
  height = 80,
  tedColor = "#E62B1E",
  textColor = "#FFFFFF",
  backgroundColor = "#000000",
}) => {
  return (
    <div
      style={{
        background: backgroundColor,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "12px 20px",
      }}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 420 90"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* TEDx */}
        <text
          x="10"
          y="58"
          fontSize="52"
          fontWeight="700"
          fontFamily="Arial, Helvetica, sans-serif"
          fill={tedColor}
        >
          TED
        </text>

        <text
          x="118"
          y="52"
          fontSize="28"
          fontWeight="600"
          fontFamily="Arial, Helvetica, sans-serif"
          fill={tedColor}
        >
          x
        </text>

        {/* VETIAS */}
        <text
          x="145"
          y="58"
          fontSize="44"
          fontWeight="300"
          fontFamily="Arial, Helvetica, sans-serif"
          fill={textColor}
          letterSpacing="1"
        >
          VETIAS
        </text>
      </svg>
    </div>
  );
};

export default TEDxLogo;