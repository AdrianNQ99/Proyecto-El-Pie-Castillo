import {
  Typography,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  CircularProgress,
  Alert,
  CardMedia,
} from "@mui/material";
import homeImage from "../assets/homeImage.jpg";
import { useEffect, useState } from "react";
import { baseUrl } from "../Api/FetchApi.js";

const Section = ({ title, items }) => {
  if (!items || items.length === 0) return null;

  return (
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
        {items.map((plato) => (
          <Grid item xs={12} sm={6} md={4} key={plato.id}>
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
                background: "#fff",
              }}
            >
              {plato.imagen_url && (
                <CardMedia
                  component="img"
                  height="200"
                  image={plato.imagen_url}
                  alt={plato.nombre}
                  sx={{
                    objectFit: "cover",
                  }}
                />
              )}
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: "var(--primary-dark)",
                      mb: 1,
                    }}
                  >
                    {plato.nombre}
                  </Typography>
                  {plato.descripcion && (
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", mb: 2 }}
                    >
                      {plato.descripcion}
                    </Typography>
                  )}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: "var(--secondary)",
                    textAlign: "right",
                  }}
                >
                  €
                  {typeof plato.precio === "number"
                    ? plato.precio.toFixed(2)
                    : plato.precio}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para organizar los platos por sección
  const organizarPlatosPorSeccion = (platos) => {
    return platos.reduce((acc, plato) => {
      const seccion = plato.seccion;
      if (!acc[seccion]) {
        acc[seccion] = [];
      }
      acc[seccion].push(plato);
      return acc;
    }, {});
  };

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        setLoading(true);
        setError(null);

        console.log("Fetching menu items from:", `${baseUrl}/platos_carta`);
        const response = await fetch(`${baseUrl}/platos_carta`);

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Menu items received:", data);
        setMenuItems(data);
      } catch (error) {
        console.error("Error fetching menu items:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  if (loading) {
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
        <Container maxWidth="lg" sx={{ textAlign: "center", py: 8 }}>
          <CircularProgress size={60} />
          <Typography variant="h6" sx={{ mt: 2 }}>
            Cargando menú...
          </Typography>
        </Container>
      </>
    );
  }

  if (error) {
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
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Alert severity="error" sx={{ mb: 4 }}>
            Error al cargar el menú: {error}
          </Alert>
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            Por favor, intenta recargar la página o contacta con nosotros.
          </Typography>
        </Container>
      </>
    );
  }

  const platosPorSeccion = organizarPlatosPorSeccion(menuItems);

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
        {menuItems.length === 0 ? (
          <Box sx={{ textAlign: "center", py: 8 }}>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              El menú se está preparando...
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, mb: 4 }}>
              Pronto podrás ver todos nuestros deliciosos platos aquí.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Mientras tanto, puedes hacer una reserva o contactarnos para más
              información.
            </Typography>
          </Box>
        ) : (
          <>
            <Section
              title="Para Compartir"
              items={platosPorSeccion["Para Compartir"]}
            />
            <Section
              title="Platos Típicos Franceses"
              items={platosPorSeccion["Platos Típicos Franceses"]}
            />
            <Section title="Al Horno" items={platosPorSeccion["Al Horno"]} />
            <Section
              title="Por Encargo"
              items={platosPorSeccion["Por Encargo"]}
            />
            <Section title="Carnes" items={platosPorSeccion["Carnes"]} />
            <Section title="Pescados" items={platosPorSeccion["Pescados"]} />
            <Section
              title="Postres Caseros"
              items={platosPorSeccion["Postres Caseros"]}
            />
          </>
        )}
      </Container>
    </>
  );
};

export default Menu;
