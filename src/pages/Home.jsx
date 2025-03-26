import { Box, Container, Typography, Button, Grid, Paper, IconButton, Avatar } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import DiscordIcon from '@mui/icons-material/Chat';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const skills = [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' }
  ];

  const projects = [
    {
      title: 'MEDITRACK',
      description: 'Doctor appointment booking system developed using Android Studio with Java and Kotlin. Features include appointment scheduling, doctor profiles, and patient management.',
      technologies: ['Java', 'Kotlin', 'Android Studio', 'Firebase'],
      github: '#',
      live: '#',
    },
    {
      title: 'Calendar & Scheduling System',
      description: 'Advanced scheduling system built with .NET and Azure SQL, featuring event management, reminders, and user scheduling capabilities.',
      technologies: ['.NET', 'Azure SQL', 'C#'],
      github: '#',
      live: '#',
    },
    {
      title: 'Hotel Management Website',
      description: 'Full-featured hotel website with booking system and admin dashboard, using HTML, CSS, JavaScript, and Firebase for real-time data management.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      github: '#',
      live: '#',
    },
    {
      title: 'Weather Check App',
      description: 'Real-time weather monitoring application built with React.js, featuring location-based weather updates and forecast predictions.',
      technologies: ['React', 'JavaScript', 'Weather API'],
      github: '#',
      live: '#',
    },
    {
      title: 'Ransomware Detection Tool',
      description: 'Hackathon project: Cloud-based ransomware detection and prevention system to secure data using advanced security protocols.',
      technologies: ['Python', 'Cloud Security', 'Machine Learning'],
      github: '#',
      live: '#',
    },
    {
      title: 'Blockchain Billing System',
      description: 'Supermarket billing system using blockchain technology for secure and transparent transactions, built with Python.',
      technologies: ['Python', 'Blockchain', 'Smart Contracts'],
      github: '#',
      live: '#',
    }
  ];

  // Generate random stars with different sizes and speeds
  const stars = [...Array(150)].map(() => ({
    size: Math.random() * 2 + 1,
    speed: Math.random() * 8 + 3,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
  }));

  // Generate rockets
  const rockets = [...Array(3)].map(() => ({
    speed: Math.random() * 10 + 20,
    delay: Math.random() * 10,
    startX: Math.random() * 100,
    startY: Math.random() * 100,
  }));

  return (
    <Box
      sx={{
        background: '#000000',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(30, 30, 30, 0.4) 0%, rgba(0, 0, 0, 0.95) 100%)',
          pointerEvents: 'none',
          zIndex: 0,
        }
      }}
    >
      {/* Moon Background */}
      <Box
        sx={{
          position: 'fixed',
          top: '5%',
          right: '10%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 35%, #ffffff 0%, #f0f0f0 60%, #e0e0e0 100%)',
          boxShadow: '0 0 60px rgba(255, 255, 255, 0.4), inset 0 0 60px rgba(255, 255, 255, 0.4)',
          opacity: 0.9,
          zIndex: 1,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '20%',
            left: '20%',
            width: '15px',
            height: '15px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '25px 15px 0 -3px rgba(255, 255, 255, 0.8), 50px 25px 0 -4px rgba(255, 255, 255, 0.7)',
          }
        }}
      />

      {/* Earth */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: 360
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'fixed',
          left: '5%',
          bottom: '15%',
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 30% 30%, #4ECDC4 0%, #2C7A7B 50%, #1A4747 100%)',
            boxShadow: '0 0 60px rgba(78, 205, 196, 0.3), inset 0 0 60px rgba(78, 205, 196, 0.2)',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              background: 'linear-gradient(45deg, transparent 48%, rgba(78, 205, 196, 0.4) 50%, transparent 52%)',
              borderRadius: '50%',
              animation: 'earthRotate 15s linear infinite',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: '10%',
              left: '20%',
              width: '20px',
              height: '20px',
              background: 'rgba(78, 205, 196, 0.8)',
              borderRadius: '50%',
              boxShadow: '40px 20px 0 -5px rgba(78, 205, 196, 0.6), 80px 40px 0 -8px rgba(78, 205, 196, 0.4)',
              filter: 'blur(2px)',
            },
            '@keyframes earthRotate': {
              '0%': { transform: 'rotate(0deg)' },
              '100%': { transform: 'rotate(360deg)' }
            }
          }}
        />
      </motion.div>

      {/* Large Glowing Star */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
          rotate: 360
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'fixed',
          right: '15%',
          bottom: '25%',
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            width: '100px',
            height: '100px',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle at center, #ffffff 0%, rgba(255, 255, 255, 0.8) 40%, rgba(255, 255, 255, 0) 70%)',
              filter: 'blur(5px)',
              animation: 'starPulse 4s ease-in-out infinite',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '120%',
              height: '120%',
              transform: 'translate(-50%, -50%) rotate(45deg)',
              background: 'linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.8) 50%, transparent 60%)',
              animation: 'starGlow 3s linear infinite',
            },
            '@keyframes starPulse': {
              '0%, 100%': { opacity: 0.8, transform: 'scale(1)' },
              '50%': { opacity: 1, transform: 'scale(1.2)' }
            },
            '@keyframes starGlow': {
              '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
              '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' }
            }
          }}
        />
      </motion.div>

      {/* Enhanced Animated Space Background */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        {/* Stars */}
        {stars.map((star, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: star.size + 'px',
              height: star.size + 'px',
              background: '#fff',
              borderRadius: '50%',
              left: star.x + '%',
              top: star.y + '%',
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
              y: [0, -20, 0],
            }}
            transition={{
              duration: star.speed,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
              times: [0, 0.5, 1],
            }}
          />
        ))}

        {/* Rockets with improved trails */}
        {rockets.map((rocket, i) => (
          <motion.div
            key={`rocket-${i}`}
            style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              background: 'linear-gradient(45deg, #ff3d00, #ff9e80)',
              borderRadius: '50%',
              left: rocket.startX + '%',
              top: rocket.startY + '%',
              filter: 'blur(1px)',
              zIndex: 2,
            }}
            animate={{
              x: ['0%', '200%'],
              y: ['0%', '-200%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: rocket.speed,
              repeat: Infinity,
              delay: rocket.delay,
              ease: "linear"
            }}
          >
            <motion.div
              style={{
                position: 'absolute',
                width: '30px',
                height: '2px',
                background: 'linear-gradient(90deg, #ff3d00, transparent)',
                transform: 'rotate(-45deg)',
                transformOrigin: '0 50%',
                left: 0,
                top: '50%',
                opacity: 0.6,
                filter: 'blur(1px)',
              }}
            />
          </motion.div>
        ))}
      </Box>

      {/* Content Container */}
      <Container 
        maxWidth={false} 
        sx={{ 
          position: 'relative', 
          zIndex: 2,
          px: { xs: 2, md: 4 },
          backgroundColor: 'transparent',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Hero Section */}
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pt: { xs: 4, md: 0 },
          }}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              gap: { xs: 4, md: 8 },
              px: { xs: 2, md: 4 },
              maxWidth: '1200px',
              mx: 'auto'
            }}>
              <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' }, maxWidth: { md: '600px' } }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontWeight: 'bold',
                    color: '#ffffff',
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    textShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
                    mb: 2,
                    letterSpacing: '4px',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-10px',
                      left: { xs: '50%', md: '0' },
                      transform: { xs: 'translateX(-50%)', md: 'none' },
                      width: '100px',
                      height: '4px',
                      background: 'linear-gradient(90deg, #4ECDC4, transparent)',
                    }
                  }}
                >
                  RAGUNATH S
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "'Orbitron', sans-serif",
                    color: '#4ECDC4',
                    fontWeight: 'bold',
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    letterSpacing: '6px',
                    textTransform: 'uppercase',
                    mb: 2,
                    textShadow: '0 0 15px rgba(78, 205, 196, 0.5)',
                  }}
                >
                  Frontend Developer & Web Developer
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#e0e0e0',
                    fontSize: { xs: '1rem', md: '1.25rem' },
                    fontFamily: '"Segoe UI", sans-serif',
                    lineHeight: 1.8,
                    maxWidth: '800px',
                    mx: 'auto',
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                    mb: 4,
                  }}
                >
                  Passionate web developer from Tenkasi, specializing in creating responsive and user-friendly digital experiences. 
                  Proficient in modern frontend technologies and full-stack development.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#4ECDC4',
                    fontSize: { xs: '0.9rem', md: '1.1rem' },
                    fontFamily: '"Segoe UI", sans-serif',
                    lineHeight: 1.8,
                    maxWidth: '800px',
                    mx: 'auto',
                    mb: 4,
                    p: 2,
                    borderRadius: '8px',
                    background: 'rgba(78, 205, 196, 0.1)',
                    border: '1px solid rgba(78, 205, 196, 0.2)',
                  }}
                >
                  🚀 Open to work opportunities in companies seeking a dedicated developer who combines technical expertise with creative problem-solving. 
                  Experienced in building modern web applications using React.js, Node.js, and various frontend technologies.
                </Typography>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    gap: 2, 
                    justifyContent: 'center', 
                    mb: 4,
                    flexWrap: 'wrap'
                  }}
                >
                  <Button
                    component={motion.button}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    variant="contained"
                    size="large"
                    startIcon={<WorkIcon />}
                    sx={{
                      background: 'linear-gradient(45deg, #1a1a1a 30%, #333333 90%)',
                      boxShadow: '0 3px 15px rgba(0, 0, 0, 0.4)',
                      minWidth: '200px',
                      fontWeight: 'bold',
                      letterSpacing: '2px',
                      py: 1.5,
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      position: 'relative',
                      overflow: 'hidden',
                      textDecoration: 'none',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '-50%',
                        left: '-50%',
                        width: '200%',
                        height: '200%',
                        background: 'linear-gradient(45deg, transparent, rgba(78, 205, 196, 0.3), transparent)',
                        transform: 'rotate(45deg)',
                        animation: 'glowingEffect 2s linear infinite',
                      },
                      '@keyframes glowingEffect': {
                        '0%': {
                          transform: 'rotate(45deg) translate(-100%, -100%)',
                        },
                        '100%': {
                          transform: 'rotate(45deg) translate(100%, 100%)',
                        },
                      },
                      '&:hover': {
                        background: 'linear-gradient(45deg, #333333 30%, #1a1a1a 90%)',
                        boxShadow: '0 5px 20px rgba(78, 205, 196, 0.4)',
                      }
                    }}
                  >
                    Open to Work
                  </Button>
                </Box>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    gap: 3, 
                    justifyContent: 'center',
                    mt: 2
                  }}
                >
                  {/* Social Media Icons with Enhanced Styling */}
                  <IconButton
                    component={motion.button}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://github.com/Ragunathapoorva"
                    target="_blank"
                    sx={{ 
                      color: 'white',
                      background: 'rgba(0, 0, 0, 0.3)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      p: 2,
                      '&:hover': {
                        color: '#4ECDC4',
                        background: 'rgba(0, 0, 0, 0.5)',
                        boxShadow: '0 0 20px rgba(78, 205, 196, 0.3)',
                      }
                    }}
                  >
                    <GitHubIcon sx={{ fontSize: '2rem' }} />
                  </IconButton>
                  <IconButton
                    component={motion.button}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.linkedin.com/in/ragunath-suresh-8b586b268/"
                    target="_blank"
                    sx={{ 
                      color: 'white',
                      background: 'rgba(0, 0, 0, 0.3)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      p: 2,
                      '&:hover': {
                        color: '#4ECDC4',
                        background: 'rgba(0, 0, 0, 0.5)',
                        boxShadow: '0 0 20px rgba(78, 205, 196, 0.3)',
                      }
                    }}
                  >
                    <LinkedInIcon sx={{ fontSize: '2rem' }} />
                  </IconButton>
                  <IconButton
                    component={motion.button}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://twitter.com/your_twitter_handle"
                    target="_blank"
                    sx={{ 
                      color: 'white',
                      background: 'rgba(0, 0, 0, 0.3)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      p: 2,
                      '&:hover': {
                        color: '#4ECDC4',
                        background: 'rgba(0, 0, 0, 0.5)',
                        boxShadow: '0 0 20px rgba(78, 205, 196, 0.3)',
                      }
                    }}
                  >
                    <TwitterIcon sx={{ fontSize: '2rem' }} />
                  </IconButton>
                  <IconButton
                    component={motion.button}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://discord.com/users/your_discord_id"
                    target="_blank"
                    sx={{ 
                      color: 'white',
                      background: 'rgba(0, 0, 0, 0.3)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      p: 2,
                      '&:hover': {
                        color: '#4ECDC4',
                        background: 'rgba(0, 0, 0, 0.5)',
                        boxShadow: '0 0 20px rgba(78, 205, 196, 0.3)',
                      }
                    }}
                  >
                    <DiscordIcon sx={{ fontSize: '2rem' }} />
                  </IconButton>
                </Box>
              </Box>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{ 
                  flex: '0 0 auto',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative'
                }}
              >
                <Box
                  component="img"
                  src="/profile-Photoroom-Photoroom.jpg"
                  alt="Ragunath S"
                  onError={(e) => {
                    console.error('Image failed to load');
                    e.target.src = '/profile.png';
                  }}
                  sx={{
                    width: { xs: 200, md: 280 },
                    height: { xs: 200, md: 280 },
                    borderRadius: '50%',
                    border: '4px solid rgba(78, 205, 196, 0.3)',
                    boxShadow: '0 0 35px rgba(78, 205, 196, 0.3)',
                    transition: 'all 0.3s ease-in-out',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    transform: 'scale(1.2)',
                    display: 'block',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '-10px',
                      left: '-10px',
                      right: '-10px',
                      bottom: '-10px',
                      border: '2px solid rgba(78, 205, 196, 0.5)',
                      borderRadius: '50%',
                      animation: 'pulseEffect 2s infinite',
                    },
                    '@keyframes pulseEffect': {
                      '0%': {
                        transform: 'scale(1)',
                        opacity: 0.8,
                      },
                      '50%': {
                        transform: 'scale(1.1)',
                        opacity: 0.4,
                      },
                      '100%': {
                        transform: 'scale(1)',
                        opacity: 0.8,
                      },
                    },
                    '&:hover': {
                      border: '4px solid rgba(78, 205, 196, 0.8)',
                      boxShadow: '0 0 50px rgba(78, 205, 196, 0.4)',
                      transform: 'scale(1.25)',
                    }
                  }}
                />
              </motion.div>
            </Box>
          </motion.div>
        </Box>

        {/* Skills Section */}
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            py: { xs: 6, md: 8 },
            backgroundColor: 'transparent',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              color: '#4ECDC4',
              fontWeight: 'bold',
              mb: 6,
              fontFamily: "'Orbitron', sans-serif",
            }}
          >
            Skills & Technologies
          </Typography>
          <Container maxWidth="lg">
            <Grid container spacing={3} justifyContent="center">
              {skills.map((skill, index) => (
                <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                  <motion.div
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Paper
                      sx={{
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 2,
                        background: 'rgba(0, 0, 0, 0.6)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(78, 205, 196, 0.3)',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          background: 'rgba(0, 0, 0, 0.8)',
                          boxShadow: '0 0 20px rgba(78, 205, 196, 0.3)',
                          border: '1px solid rgba(78, 205, 196, 0.6)',
                        }
                      }}
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        style={{
                          width: '50px',
                          height: '50px',
                          filter: 'drop-shadow(0 0 8px rgba(78, 205, 196, 0.5))'
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#4ECDC4',
                          fontWeight: 'bold',
                          textAlign: 'center'
                        }}
                      >
                        {skill.name}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Education Section */}
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: { xs: 6, md: 8 },
            backgroundColor: 'transparent',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              color: '#4ECDC4',
              fontWeight: 'bold',
              mb: 6,
              fontFamily: "'Orbitron', sans-serif",
            }}
          >
            Education
          </Typography>
          <Container maxWidth="lg">
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={24}
                    sx={{
                      p: 4,
                      background: 'rgba(0, 0, 0, 0.6)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '16px',
                      border: '1px solid rgba(78, 205, 196, 0.3)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 32px rgba(78, 205, 196, 0.2)',
                        border: '1px solid rgba(78, 205, 196, 0.6)',
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
                      <SchoolIcon sx={{ color: '#4ECDC4', fontSize: '2rem' }} />
                      <Typography variant="h5" sx={{ color: '#4ECDC4', fontWeight: 'bold' }}>
                        College
                      </Typography>
                    </Box>
                    <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
                      B.Tech Information Technology
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: '#4ECDC4', mb: 2 }}>
                      Kalasalingam Academy of Research and Education
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#e0e0e0', mb: 1 }}>
                      2021 - Present
                    </Typography>
                    <Box sx={{ mt: 2, pl: 2, borderLeft: '2px solid rgba(78, 205, 196, 0.3)' }}>
                      <Typography variant="body2" sx={{ color: '#e0e0e0', mb: 1 }}>
                        • Current CGPA: 6.5 (Up to 5th Semester)
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#e0e0e0', mb: 1 }}>
                        • Actively participating in college technical events and hackathons
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#e0e0e0', mb: 1 }}>
                        • Specialized focus on Frontend Development and Web Technologies
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#e0e0e0' }}>
                        • Engaged in various technical workshops and project development
                      </Typography>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={24}
                    sx={{
                      p: 4,
                      background: 'rgba(0, 0, 0, 0.6)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '16px',
                      border: '1px solid rgba(78, 205, 196, 0.3)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 32px rgba(78, 205, 196, 0.2)',
                        border: '1px solid rgba(78, 205, 196, 0.6)',
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
                      <SchoolIcon sx={{ color: '#4ECDC4', fontSize: '2rem' }} />
                      <Typography variant="h5" sx={{ color: '#4ECDC4', fontWeight: 'bold' }}>
                        Higher Secondary
                      </Typography>
                    </Box>
                    <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
                      Biology Science Group
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: '#4ECDC4', mb: 2 }}>
                      Bharath Montessori Matric Higher Secondary School, Ilanji
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#e0e0e0', mb: 1 }}>
                      2019 - 2021
                    </Typography>
                    <Box sx={{ mt: 2, pl: 2, borderLeft: '2px solid rgba(78, 205, 196, 0.3)' }}>
                      <Typography variant="body2" sx={{ color: '#e0e0e0', mb: 1 }}>
                        • Higher Secondary (12th) - 78% in Biology Science Stream
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#e0e0e0', mb: 1 }}>
                        • Secondary School (10th) - 88% with excellent academic performance
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#e0e0e0', mb: 1 }}>
                        • Active participant in school technical exhibitions and science fairs
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#e0e0e0' }}>
                        • Demonstrated strong foundation in Biology and Science subjects
                      </Typography>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Projects Section */}
        <Box 
          sx={{ 
            minHeight: '100vh', 
            py: { xs: 6, md: 8 },
            backgroundColor: 'transparent',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              color: '#4ECDC4',
              fontWeight: 'bold',
              mb: 6,
            }}
          >
            Projects
          </Typography>
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={24}
                    sx={{
                      p: 3,
                      height: '100%',
                      background: 'rgba(0, 0, 0, 0.6)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '16px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 32px rgba(78, 205, 196, 0.2)',
                      }
                    }}
                  >
                    <Typography variant="h5" gutterBottom sx={{ color: 'white' }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#e0e0e0', mb: 2 }}>
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
                            bgcolor: 'rgba(78, 205, 196, 0.2)',
                            color: '#4ECDC4',
                            borderRadius: 1,
                            border: '1px solid rgba(78, 205, 196, 0.3)',
                          }}
                        >
                          {tech}
                        </Typography>
                      ))}
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Button
                        startIcon={<GitHubIcon />}
                        variant="outlined"
                        size="small"
                        href={`https://github.com/Ragunathapoorva/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                        target="_blank"
                        sx={{
                          borderColor: 'rgba(255, 255, 255, 0.3)',
                          color: 'white',
                          '&:hover': {
                            borderColor: '#4ECDC4',
                            color: '#4ECDC4',
                            transform: 'translateY(-2px)',
                          }
                        }}
                      >
                        GitHub
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        href={project.live}
                        target="_blank"
                        sx={{
                          borderColor: 'rgba(255, 255, 255, 0.3)',
                          color: 'white',
                          '&:hover': {
                            borderColor: '#4ECDC4',
                            color: '#4ECDC4',
                            transform: 'translateY(-2px)',
                          }
                        }}
                      >
                        Live Demo
                      </Button>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Contact Section */}
        <Box
          sx={{
            py: 6,
            textAlign: 'center',
            background: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(78, 205, 196, 0.2)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Bottom Earth */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: 360
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              position: 'absolute',
              left: '5%',
              bottom: '-80px',
              zIndex: 0,
            }}
          >
            <Box
              sx={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 30% 30%, #4ECDC4 0%, #2C7A7B 30%, #1E88E5 60%, #1565C0 100%)',
                boxShadow: '0 0 60px rgba(30, 136, 229, 0.3), inset 0 0 60px rgba(78, 205, 196, 0.2)',
                position: 'relative',
                opacity: 0.8,
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  background: 'linear-gradient(45deg, transparent 48%, rgba(78, 205, 196, 0.4) 50%, transparent 52%)',
                  borderRadius: '50%',
                  animation: 'earthRotate 15s linear infinite',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '10%',
                  left: '20%',
                  width: '20px',
                  height: '20px',
                  background: 'rgba(78, 205, 196, 0.8)',
                  borderRadius: '50%',
                  boxShadow: '40px 20px 0 -5px rgba(78, 205, 196, 0.6), 80px 40px 0 -8px rgba(78, 205, 196, 0.4)',
                  filter: 'blur(2px)',
                }
              }}
            />
          </motion.div>

          {/* Bottom Saturn */}
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: -360
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              position: 'absolute',
              right: '5%',
              bottom: '-60px',
              zIndex: 0,
            }}
          >
            <Box
              sx={{
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 40% 40%, #4ECDC4 0%, #2C7A7B 60%, #1A4747 100%)',
                boxShadow: '0 0 40px rgba(78, 205, 196, 0.3), inset 0 0 40px rgba(78, 205, 196, 0.2)',
                position: 'relative',
                opacity: 0.8,
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '-30px',
                  left: '-50px',
                  width: '260px',
                  height: '220px',
                  background: 'linear-gradient(transparent 48%, rgba(78, 205, 196, 0.3) 50%, transparent 52%)',
                  transform: 'rotate(-20deg)',
                  zIndex: -1,
                  animation: 'saturnRingGlow 4s ease-in-out infinite',
                },
                '@keyframes saturnRingGlow': {
                  '0%, 100%': { opacity: 0.3 },
                  '50%': { opacity: 0.6 }
                }
              }}
            />
          </motion.div>

          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: '#4ECDC4',
                  fontWeight: 'bold',
                  mb: 3,
                  fontFamily: "'Orbitron', sans-serif",
                }}
              >
                Get In Touch
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 2,
                  mb: 4,
                }}
              >
                <EmailIcon sx={{ color: '#4ECDC4', fontSize: '2rem' }} />
                <Typography
                  variant="h6"
                  component="a"
                  href="mailto:ragunathapoorva@gmail.com"
                  sx={{
                    color: '#e0e0e0',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#4ECDC4',
                      textDecoration: 'none',
                    },
                  }}
                >
                  ragunathapoorva@gmail.com
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: '#e0e0e0',
                  maxWidth: '600px',
                  mx: 'auto',
                  mb: 4,
                }}
              >
                Feel free to reach out for collaborations or just a friendly hello! 🚀
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 4 }}>
                <IconButton
                  component={motion.button}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  sx={{ 
                    color: 'white',
                    background: 'rgba(0, 0, 0, 0.3)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                      color: '#4ECDC4',
                      background: 'rgba(0, 0, 0, 0.5)',
                    }
                  }}
                  href="https://github.com/Ragunathapoorva"
                  target="_blank"
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  component={motion.button}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  sx={{ 
                    color: 'white',
                    background: 'rgba(0, 0, 0, 0.3)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                      color: '#4ECDC4',
                      background: 'rgba(0, 0, 0, 0.5)',
                    }
                  }}
                  href="https://www.linkedin.com/in/ragunath-suresh-8b586b268/"
                  target="_blank"
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>

              {/* Technology Quote */}
              <Box
                sx={{
                  mt: 8,
                  mb: 4,
                  p: 4,
                  background: 'rgba(0, 0, 0, 0.4)',
                  borderRadius: '16px',
                  border: '1px solid rgba(78, 205, 196, 0.2)',
                  maxWidth: '800px',
                  mx: 'auto',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: '#4ECDC4',
                    fontStyle: 'italic',
                    fontFamily: "'Orbitron', sans-serif",
                    textAlign: 'center',
                    mb: 2,
                  }}
                >
                  "Let's Connect in the Digital Universe"
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#e0e0e0',
                    textAlign: 'center',
                    fontFamily: "'Segoe UI', sans-serif",
                    lineHeight: 1.8,
                  }}
                >
                  Together, we can transform ideas into reality, one line of code at a time. 
                  Join me in exploring the endless possibilities of technology and innovation.
                </Typography>
              </Box>
            </motion.div>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 