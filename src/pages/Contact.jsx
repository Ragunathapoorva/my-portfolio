import { Box, Container, Typography, TextField, Button, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{
        minHeight: '100vh',
        pt: 8,
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={24}
              sx={{
                p: 4,
                height: '100%',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: 4,
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  color: 'primary.main',
                  fontWeight: 'bold',
                  mb: 4,
                }}
              >
                Get in Touch
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
                Feel free to reach out to me for any questions or opportunities!
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <EmailIcon color="primary" />
                  <Typography variant="body1" sx={{ color: 'white' }}>
                    your.email@example.com
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <LocationOnIcon color="primary" />
                  <Typography variant="body1" sx={{ color: 'white' }}>
                    Tenkasi, Tamil Nadu, India
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <PhoneIcon color="primary" />
                  <Typography variant="body1" sx={{ color: 'white' }}>
                    +91 1234567890
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={24}
              sx={{
                p: 4,
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: 4,
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <Box
                component="form"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                    },
                    '& .MuiInputLabel-root': {
                      color: 'text.secondary',
                    },
                  }}
                />
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                    },
                    '& .MuiInputLabel-root': {
                      color: 'text.secondary',
                    },
                  }}
                />
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                    },
                    '& .MuiInputLabel-root': {
                      color: 'text.secondary',
                    },
                  }}
                />
                <Button
                  component={motion.button}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 2,
                    background: 'linear-gradient(45deg, #90caf9 30%, #f48fb1 90%)',
                    boxShadow: '0 3px 5px 2px rgba(144, 202, 249, .3)',
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 