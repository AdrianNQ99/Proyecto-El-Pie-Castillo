import { Typography, Box } from "@mui/material";
import homeImage from "../assets/homeImage.jpg";
import Carta from "../Api/Carta.js"

const Menu = () => {
  return (
    <>
      {/* Hero Section */}
      <Box
        className="hero"
        sx={{
          position: "relative",
          textAlign: "center",
          borderRadius: 2,
          overflow: "hidden",
          mb: 4,
        }}
      >
        <Box
          component="img"
          src={homeImage}
          alt="Chimenea El Pie Castillo"
          sx={{
            width: "100%",
            maxHeight: "75vh",
            objectFit: "cover",
            filter: "brightness(0.7)",
          }}
        />
        <Box
          sx={{
            mt: 2,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            textAlign: "center",
            px: 2,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ textAlign: "center", mb: 4 }}
          >
            Nuestro Menú
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center", mb: 2 }}>
            Disfruta de una experiencia gastronómica única en un ambiente
            acogedor.
          </Typography>
        </Box>
      </Box>

      {/* Para Compartir Section */}
    </>
  );
};

export default Menu;
