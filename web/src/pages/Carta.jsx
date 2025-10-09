import {
  Typography,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
} from "@mui/material";
import homeImage from "../assets/homeImage.jpg";
import Carta from "../Api/Carta.js";

const Section = ({ title, items }) => (
  <Box sx={{ mb: 6 }}>
    <Typography
      variant="h4"
      component="h2"
      gutterBottom
      sx={{
        textAlign: "center",
        mb: 4,
        fontWeight: 700,
        color: "var(--primary)",
      }}
    >
      {title}
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {items.map((plato, idx) => (
        <Grid item xs={12} sm={6} md={4} key={plato.nombre.es + idx}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 3,
              transition: "box-shadow 0.3s, transform 0.3s",
              "&:hover": {
                boxShadow: 6,
                transform: "translateY(-4px) scale(1.02)",
              },
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              background: "#fff",
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, color: "var(--primary-dark)" }}
              >
                {plato.nombre.es}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mb: 2 }}
              >
                {plato.descripcion.es}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontWeight: 600, color: "var(--secondary)" }}
              >
                {plato.precio}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

const Menu = () => {
  return (
    <>
      {/* Hero Section */}
      <Box
        className="hero"
        sx={{
          position: "relative",
          textAlign: "center",
          overflow: "hidden",
          mb: 6,
          minHeight: { xs: "40vh", md: "60vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={homeImage}
          alt="Chimenea El Pie Castillo"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.5)",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            color: "#fff",
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
            px: 3,
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>
            Nuestro Menú
          </Typography>
          <Typography variant="h5">
            Disfruta de una experiencia gastronómica única en un ambiente
            acogedor.
          </Typography>
        </Box>
      </Box>

      <Container maxWidth="lg">
        <Section title="Para Compartir" items={Carta.ParaCompartir} />
        <Section title="Platos Típicos Franceses" items={Carta.DesdeFrancia} />
        <Section title="Al Horno" items={Carta.AlHorno} />
        <Section title="Por Encargo" items={Carta.PorEncargo} />
        <Section title="Carnes" items={Carta.Carnes} />
        <Section title="Pescados" items={Carta.Pescados} />
        <Section title="Postres Caseros" items={Carta.Postres} />
      </Container>
    </>
  );
};

export default Menu;
