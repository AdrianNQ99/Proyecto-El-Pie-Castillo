import React from 'react';
import { Box, TextField, Button, Grid, Typography, Container } from '@mui/material';

const ReservasForm = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, backgroundColor: '#f5f5f5', padding: 4, borderRadius: 2 }}>
    <Box component="form" >
      <Grid container spacing={3}>
        {/* Nombre */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Nombre"
            variant="outlined"
            required
          />
        </Grid>

        {/* Email */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Correo Electrónico"
            type="email"
            variant="outlined"
            required
          />
        </Grid>

        {/* Teléfono */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Teléfono"
            type="tel"
            variant="outlined"
            required
          />
        </Grid>

        {/* Fecha de reserva */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Fecha de Reserva"
            type="date"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            required
          />
        </Grid>

        {/* Hora de reserva */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Hora de Reserva"
            type="time"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            required
          />
        </Grid>

        {/* Mensaje */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Mensaje (opcional)"
            multiline
            rows={4}
            variant="outlined"
          />
        </Grid>

        {/* Botón de envío */}
        <Grid item xs={12} textAlign="center">
          <Button variant="contained" color="primary" size="large" type="submit">
            Enviar
          </Button>
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
};

export default ReservasForm;