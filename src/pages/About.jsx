import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';

const About = () => {
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
      <Container maxWidth="md">
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
            About Me
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                color: 'primary.main',
                mb: 2,
              }}
            >
              <SchoolIcon /> Education
            </Typography>
            <Typography variant="body1" sx={{ color: 'white', ml: 4 }}>
              Kalasalingam University
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                color: 'primary.main',
                mb: 2,
              }}
            >
              <WorkIcon /> Career
            </Typography>
            <Typography variant="body1" sx={{ color: 'white', ml: 4 }}>
              I am a passionate Frontend Developer from Tenkasi, currently open to work opportunities.
              My journey in web development started with a curiosity for creating beautiful and functional websites.
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h5"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                color: 'primary.main',
                mb: 2,
              }}
            >
              <CodeIcon /> Skills & Expertise
            </Typography>
            <Typography variant="body1" sx={{ color: 'white', ml: 4, mb: 2 }}>
              I specialize in modern web technologies and frameworks:
            </Typography>
            <Box sx={{ ml: 4 }}>
              <Typography variant="body1" sx={{ color: 'white', mb: 1 }}>
                • Frontend Development: HTML, CSS, React.js, Tailwind CSS
              </Typography>
              <Typography variant="body1" sx={{ color: 'white', mb: 1 }}>
                • Backend Development: Node.js, Python
              </Typography>
              <Typography variant="body1" sx={{ color: 'white' }}>
                • Tools & Technologies: Git, VS Code, Modern Development Practices
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default About; 