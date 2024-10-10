import React from "react";

const Loader = ({
    size = 80,
    color = "#4fa94d",
    text = "Loading...",
    textColor = "green",
    textStyle = {},
}) => {
    const circleStyle = {
        width: `${size}px`,
        height: `${size}px`,
        border: `8px solid ${color}`,
        borderTop: `8px solid transparent`,
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
    };

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "10px",
            }}
        >
            <div style={circleStyle}></div>
            <span
                style={{
                    fontSize: "20px",
                    color: textColor,
                    fontWeight: "bold",
                    letterSpacing: "2px",
                    ...textStyle,
                }}
            >
                {text}
            </span>
            <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
};

export default Loader;


