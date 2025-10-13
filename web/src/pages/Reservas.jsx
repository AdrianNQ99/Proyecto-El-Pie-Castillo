import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  TextField,
  Button,
  Paper,
  Alert,
  CircularProgress,
  Snackbar,
} from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "dayjs/locale/es";
import homeImage from "../assets/homeImage.jpg";
import { baseUrl } from "../Api/FetchApi.js";

const Reservas = () => {
  // Estados del formulario
  const [formData, setFormData] = useState({
    nombre_cliente: "",
    fecha: null,
    hora: null,
    numero_personas: 1,
  });

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Configurar dayjs para español
  dayjs.locale("es");

  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleDateChange = (newDate) => {
    setFormData({
      ...formData,
      fecha: newDate,
    });
  };

  const handleTimeChange = (newTime) => {
    setFormData({
      ...formData,
      hora: newTime,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.nombre_cliente ||
      !formData.fecha ||
      !formData.hora ||
      !formData.numero_personas
    ) {
      setErrorMessage("Por favor, completa todos los campos");
      setShowError(true);
      return;
    }

    setLoading(true);

    try {
      // Combinar fecha y hora
      const fechaHora = formData.fecha
        .hour(formData.hora.hour())
        .minute(formData.hora.minute())
        .second(0);

      const reservaData = {
        nombre_cliente: formData.nombre_cliente,
        fecha_hora: fechaHora.toISOString(),
        numero_personas: parseInt(formData.numero_personas),
      };

      const response = await fetch(`${baseUrl}/reservas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservaData),
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      // Limpiar formulario
      setFormData({
        nombre_cliente: "",
        fecha: null,
        hora: null,
        numero_personas: 1,
      });

      setShowSuccess(true);
    } catch (error) {
      console.error("Error al crear reserva:", error);
      setErrorMessage(`Error al crear la reserva: ${error.message}`);
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
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
        <Box sx={{ textAlign: "center", py: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Información de Contacto
          </Typography>
          <Grid onclick container spacing={4} alignItems="stretch">
            <Grid item xs={12} md={4} sx={{ display: "flex" }}>
              <Card
                onClick={() => {
                  window.open(
                    "https://maps.app.goo.gl/WYKeMsbStc6ErScGA",
                    "_blank"
                  );
                }}
                className="card"
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: 220,
                  py: 4,
                  px: 3,
                  textAlign: "center",
                  boxShadow: 6,
                  borderRadius: 4,
                  transition: "transform 0.2s, box-shadow 0.2s",
                  bgcolor: "#faf9f6",
                  "&:hover": {
                    transform: "translateY(-8px) scale(1.03)",
                    boxShadow: 12,
                    bgcolor: "#fff",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    mb: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "#ffe0b2",
                    borderRadius: "50%",
                  }}
                >
                  <span
                    role="img"
                    aria-label="Dirección"
                    style={{ fontSize: 28 }}
                  >
                    📍
                  </span>
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                  Dirección
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Calle Doña Lina, 16Bis
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  30880 Águilas, Murcia
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: "flex" }}>
              <Card
                onClick={() => {
                  window.open("tel:675366784");
                }}
                className="card"
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: 220,
                  py: 4,
                  px: 3,
                  textAlign: "center",
                  boxShadow: 6,
                  borderRadius: 4,
                  transition: "transform 0.2s, box-shadow 0.2s",
                  bgcolor: "#faf9f6",
                  "&:hover": {
                    transform: "translateY(-8px) scale(1.03)",
                    boxShadow: 12,
                    bgcolor: "#fff",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    mb: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "#b2dfdb",
                    borderRadius: "50%",
                  }}
                >
                  <span
                    role="img"
                    aria-label="Teléfono"
                    style={{ fontSize: 28 }}
                  >
                    📞
                  </span>
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                  Teléfono
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  675 366 784
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Llama para reservar o consultar
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: "flex" }}>
              <Card
                onClick={() => {
                  window.open("https://wa.me/34675366784", "_blank");
                }}
                className="card"
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: 220,
                  py: 4,
                  px: 3,
                  textAlign: "center",
                  boxShadow: 6,
                  borderRadius: 4,
                  transition: "transform 0.2s, box-shadow 0.2s",
                  bgcolor: "#faf9f6",
                  "&:hover": {
                    transform: "translateY(-8px) scale(1.03)",
                    boxShadow: 12,
                    bgcolor: "#fff",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    mb: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "#c5cae9",
                    borderRadius: "50%",
                  }}
                >
                  <span
                    role="img"
                    aria-label="WhatsApp"
                    style={{ fontSize: 28 }}
                  >
                    💬
                  </span>
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                  WhatsApp
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  675 366 784
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Escríbenos por WhatsApp
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Formulario de Reservas */}
      <Container maxWidth="md" sx={{ mb: 6 }}>
        <Paper
          elevation={6}
          sx={{
            p: 4,
            borderRadius: 3,
            background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            textAlign="center"
            sx={{ mb: 4, fontWeight: "bold", color: "var(--primary)" }}
          >
            Hacer una Reserva
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Nombre completo"
                  variant="outlined"
                  value={formData.nombre_cliente}
                  onChange={handleInputChange("nombre_cliente")}
                  required
                  sx={{ bgcolor: "white", borderRadius: 1 }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Número de personas"
                  type="number"
                  variant="outlined"
                  value={formData.numero_personas}
                  onChange={handleInputChange("numero_personas")}
                  inputProps={{ min: 1, max: 20 }}
                  required
                  sx={{ bgcolor: "white", borderRadius: 1 }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <DatePicker
                  label="Fecha de reserva"
                  value={formData.fecha}
                  onChange={handleDateChange}
                  minDate={dayjs()}
                  maxDate={dayjs().add(3, "month")}
                  sx={{
                    width: "100%",
                    bgcolor: "white",
                    borderRadius: 1,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TimePicker
                  label="Hora de reserva"
                  value={formData.hora}
                  onChange={handleTimeChange}
                  minTime={dayjs().hour(12).minute(0)}
                  maxTime={dayjs().hour(23).minute(30)}
                  sx={{
                    width: "100%",
                    bgcolor: "white",
                    borderRadius: 1,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Box sx={{ textAlign: "center", mt: 2 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={loading}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      borderRadius: 2,
                      background:
                        "linear-gradient(45deg, var(--primary) 30%, var(--secondary) 90%)",
                      boxShadow: 3,
                      "&:hover": {
                        background:
                          "linear-gradient(45deg, var(--primary-dark) 30%, var(--secondary-dark) 90%)",
                        transform: "translateY(-2px)",
                        boxShadow: 6,
                      },
                      "&:disabled": {
                        background: "#ccc",
                      },
                    }}
                  >
                    {loading ? (
                      <>
                        <CircularProgress
                          size={20}
                          sx={{ mr: 1, color: "white" }}
                        />
                        Creando reserva...
                      </>
                    ) : (
                      "Confirmar Reserva"
                    )}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Typography variant="body2" color="text.secondary">
              * Las reservas están sujetas a disponibilidad. Te contactaremos
              para confirmar.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              * Para grupos de más de 8 personas, por favor llama directamente.
            </Typography>
          </Box>
        </Paper>
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

      {/* Notificaciones */}
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setShowSuccess(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          ¡Reserva creada exitosamente! Te contactaremos pronto para
          confirmarla.
        </Alert>
      </Snackbar>

      <Snackbar
        open={showError}
        autoHideDuration={6000}
        onClose={() => setShowError(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setShowError(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          {errorMessage}
        </Alert>
      </Snackbar>
    </LocalizationProvider>
  );
};

export default Reservas;
