import { url } from "inspector";

const rfStyle = {
  position: "relative",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  fontFamily: "Arial, sans-serif",
  color: "white",
  overflow: "hidden",
};

const gridOverlayStyle: React.CSSProperties = {
  content: '""',
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: `
      linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
    `,
  backgroundSize: "75px 75px",
  pointerEvents: "none", // Ensures grid doesn't interfere with interactions
  zIndex: 0,
};

export { rfStyle, gridOverlayStyle };
