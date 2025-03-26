import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Material-UI. Features smooth animations and a beautiful dark theme.',
      image: 'https://via.placeholder.com/400x250',
      technologies: ['React', 'Material-UI', 'Framer Motion'],
      github: '#',
      live: '#',
    },
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, and shopping cart functionality.',
      image: 'https://via.placeholder.com/400x250',
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: '#',
      live: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      image: 'https://via.placeholder.com/400x250',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      github: '#',
      live: '#',
    },
  ];

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
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            color: 'primary.main',
            fontWeight: 'bold',
            mb: 4,
            textAlign: 'center',
          }}
        >
          My Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                component={motion.div}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" sx={{ color: 'white' }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {project.technologies.map((tech, i) => (
                      <Typography
                        key={i}
                        variant="caption"
                        sx={{
                          px: 1,
                          py: 0.5,
                          bgcolor: 'primary.main',
                          color: 'white',
                          borderRadius: 1,
                        }}
                      >
                        {tech}
                      </Typography>
                    ))}
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                      startIcon={<GitHubIcon />}
                      variant="outlined"
                      size="small"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </Button>
                    <Button
                      startIcon={<LaunchIcon />}
                      variant="outlined"
                      size="small"
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects; 