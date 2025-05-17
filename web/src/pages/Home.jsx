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
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Bienvenidos a El Pie Castillo
          </Typography>
          <Typography variant="body1">
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
                sx={{
                  p: 2,
                  borderRadius: 2,
                  textAlign: "center",
                  backgroundColor: "#b26500",
                  color: "#fff",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={Croquetas}
                  alt="Plato Especial"
                  sx={{ borderRadius: 2 }}
                />
                <Typography variant="h6" component="h3">
                  Croquetas Caseras
                </Typography>
                <Typography variant="body2">
                  Cremosas y hechas a mano.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card 
                sx={{
                  p: 2,
                  borderRadius: 2,
                  textAlign: "center",
                  backgroundColor: "#b26500",
                  color: "#fff",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={PaellaDeCostilla}
                  alt="Plato Especial"
                  sx={{ borderRadius: 2 }}
                />
                <Typography variant="h6" component="h3">
                  Paellas Por Encargo
                </Typography>
                <Typography variant="body2">
                  Preparadas con ingredientes frescos y de calidad.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card
                sx={{
                  p: 2,
                  borderRadius: 2,
                  textAlign: "center",
                  backgroundColor: "#b26500",
                  color: "#fff",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={Crepes}
                  alt="Plato Especial"
                  sx={{ borderRadius: 2 }}
                />
                <Typography variant="h6" component="h3">
                  Postres Caseros
                </Typography>
                <Typography variant="body2">
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
