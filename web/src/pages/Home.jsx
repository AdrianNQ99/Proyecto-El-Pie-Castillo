import { Container, Typography, Box, Grid, Card, CardMedia } from "@mui/material";
import homeImage from "../assets/homeImage.jpg";
import Croquetas from "../assets/Carta/Croquetas.jpg";
import PaellaDeCostilla from "../assets/Carta/PaellaDeCostilla.jpg";
import Crepes from "../assets/Carta/Crepes.jpg";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Box
        className="hero"
        sx={{
          position: "relative",
          textAlign: "center",
          borderRadius: 3,
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
            Bienvenidos a El Pie Castillo
          </Typography>
          <Typography variant="h5">
            Disfruta de una experiencia gastronómica única en un ambiente
            acogedor.
          </Typography>
        </Box>
      </Box>

      {/* Menu Section */}
      <Container maxWidth="lg" sx={{ mb: 4 }}>
        <Box sx={{ py: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Nuestro Menú Destacado
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Card
                className="card"
                sx={{
                  borderRadius: 3,
                  textAlign: "center",
                  backgroundColor: "#fff",
                  color: "var(--text-main)",
                  boxShadow: 3,
                  p: 3,
                  transition: "box-shadow 0.3s, transform 0.3s",
                  "&:hover": {
                    boxShadow: 6,
                    transform: "translateY(-4px) scale(1.02)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="160"
                  image={Croquetas}
                  alt="Croquetas Caseras"
                  sx={{ borderRadius: 2, mb: 2 }}
                />
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Croquetas Caseras
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Cremosas y hechas a mano.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card
                className="card"
                sx={{
                  borderRadius: 3,
                  textAlign: "center",
                  backgroundColor: "#fff",
                  color: "var(--text-main)",
                  boxShadow: 3,
                  p: 3,
                  transition: "box-shadow 0.3s, transform 0.3s",
                  "&:hover": {
                    boxShadow: 6,
                    transform: "translateY(-4px) scale(1.02)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="160"
                  image={PaellaDeCostilla}
                  alt="Paellas Por Encargo"
                  sx={{ borderRadius: 2, mb: 2 }}
                />
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Paellas Por Encargo
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Preparadas con ingredientes frescos y de calidad.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card
                className="card"
                sx={{
                  borderRadius: 3,
                  textAlign: "center",
                  backgroundColor: "#fff",
                  color: "var(--text-main)",
                  boxShadow: 3,
                  p: 3,
                  transition: "box-shadow 0.3s, transform 0.3s",
                  "&:hover": {
                    boxShadow: 6,
                    transform: "translateY(-4px) scale(1.02)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="160"
                  image={Crepes}
                  alt="Postres Caseros"
                  sx={{ borderRadius: 2, mb: 2 }}
                />
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Postres Caseros
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Disfruta de nuestros deliciosos postres caseros.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Contact Section */}
      <Box
        sx={{
          py: 4,
          textAlign: "center",
          backgroundColor: "#424242",
          color: "#fff",
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Contáctanos
        </Typography>
        <Typography variant="body1">
          Dirección: Calle Doña Lina 16Bis
        </Typography>
        <Typography variant="body1">Teléfono: +34 675 366 784</Typography>
        <Typography variant="body1">
          Email: elpiecastilloaguilas@gmail.com
        </Typography>
      </Box>
    </div>
  );
};

export default Home;
