import React from "react";
import { Container, Typography, Box, Grid, Card } from "@mui/material";
import homeImage from "../assets/homeImage.jpg";

const Reservas = () => {
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
            Contacto y Reservas
          </Typography>
          <Typography variant="h5">
            Reserva tu mesa o haz tu consulta. ¡Te esperamos!
          </Typography>
        </Box>
      </Box>

      {/* Información de contacto */}
      <Container maxWidth="lg" sx={{ mb: 4 }}>
        <Box sx={{ py: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Información de Contacto
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card className="card">
                <Typography variant="h6" gutterBottom>
                  Dirección
                </Typography>
                <Typography variant="body1">
                  Calle Doña Lina, 16Bis
                  <br />
                  30880 Águilas (Murcia)
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card className="card">
                <Typography variant="h6" gutterBottom>
                  Teléfono
                </Typography>
                <Typography variant="body1">675 366 784</Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card className="card">
                <Typography variant="h6" gutterBottom>
                  WhatsApp
                </Typography>
                <Typography variant="body1">675 366 784</Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Google Maps Section */}
      <Container maxWidth="lg" sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          textAlign="center"
          sx={{ mb: 4, fontWeight: "bold" }}
        >
          ¿Dónde nos encontramos?
        </Typography>
        <Box
          sx={{
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 3,
            width: "100%",
            height: "400px",
          }}
        >
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1120.5771864885671!2d-1.5806319114435448!3d37.40234294619763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd64c93d104622b5%3A0x2ca555ab6c205c70!2sEl%20Pie%20Castillo!5e0!3m2!1ses!2ses!4v1743772488908!5m2!1ses!2ses"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Container>
    </>
  );
};

export default Reservas;
