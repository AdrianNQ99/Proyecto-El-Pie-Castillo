import { Container } from "@mui/material";
import ReservasForm from "../components/reservas/ReservasForm";

const Booking = () => { 
    return (
        <>
        <Container maxWidth="xl" sx={{ mt: 4 }}>
        <h1>Reservas y contacto</h1>
        <ReservasForm/>
        </Container>
        </>
    );
}
export default Booking;
