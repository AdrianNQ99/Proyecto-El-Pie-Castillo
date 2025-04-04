import React from "react";
import { Box, Card, Container, Typography, Grid } from "@mui/material";
import homeImage from "../assets/homeImage.jpg";

const Booking = () => {
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
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontSize: { xs: "1.8rem", md: "3rem" },
              fontWeight: "bold",
            }}
          >
            Contacto y Reservas
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.9rem", md: "1.2rem" },
            }}
          >
            Para realizar una reserva, por favor contáctanos a través de nuestro
            número de teléfono o correo electrónico.
          </Typography>
        </Box>
      </Box>

      {/* Contact Information Section */}
      <Container maxWidth="lg" sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          textAlign="center"
          sx={{ mb: 4, fontWeight: "bold" }}
        >
          Información de Contacto
        </Typography>
        <Grid container spacing={4}>
          {/* Dirección */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                p: 3,
                textAlign: "center",
                backgroundColor: "#f5f5f5",
                boxShadow: 3,
              }}
            >
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

          {/* Teléfono */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                p: 3,
                textAlign: "center",
                backgroundColor: "#f5f5f5",
                boxShadow: 3,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Teléfono
              </Typography>
              <Typography variant="body1">675 366 784</Typography>
            </Card>
          </Grid>

          {/* WhatsApp */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                p: 3,
                textAlign: "center",
                backgroundColor: "#f5f5f5",
                boxShadow: 3,
              }}
            >
              <Typography variant="h6" gutterBottom>
                WhatsApp
              </Typography>
              <Typography variant="body1">675 366 784</Typography>
            </Card>
          </Grid>
        </Grid>
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

export default Booking;
