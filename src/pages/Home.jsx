import { Box, Container, Typography, Button, Grid, Paper, IconButton, AppBar, Toolbar, useScrollTrigger, Slide } from '@mui/material';
import { motion, useScroll, useSpring } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { keyframes } from '@mui/system';

const saturnRotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const saturnOrbit = keyframes`
  0% { transform: translate(-50%, -50%) rotate(0deg) translateX(50px); }
  100% { transform: translate(-50%, -50%) rotate(360deg) translateX(50px); }
`;

const shootingStar = keyframes`
  0% {
    transform: translateX(0) translateY(0);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: translateX(1000px) translateY(300px);
    opacity: 0;
  }
`;

const twinkle = keyframes`
  0% { opacity: 0.3; }
  50% { opacity: 1; }
  100% { opacity: 0.3; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restSpeed: 0.001
  });

  return (
    <motion.div
      className="progress-bar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #4ECDC4, #556270)',
        transformOrigin: '0%',
        scaleX,
        zIndex: 1000
      }}
    />
  );
};

const Home = () => {
  const skills = [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' }
  ];

  const experiences = [
    {
      title: "Full Stack Web Developer Intern",
      company: "EY Edunet Foundation",
      description: "Developed web applications using MERN stack, implemented responsive designs and RESTful APIs.",
      duration: "2023"
    },
    {
      title: "Embedded Systems Intern",
      company: "Emertxe",
      description: "Currently working on embedded systems projects, focusing on hardware-software integration.",
      duration: "Present"
    }
  ];

  const achievements = [
    {
      title: "Hackathons",
      items: [
        "CyberNerds Hackathon - Participant",
        "OWASP Hackathon - Participant",
        "MLSC Hackathon at Kalasalingam University",
        "IITM Hackathon - Selected Participant"
      ]
    },
    {
      title: "Workshops & Training",
      items: [
        "Top Engineers Workshop at IITM by Senior Engineers",
        "Raspberry Pi Workshop",
        "Vintra Events Participant",
        "Shortlisted for Blueshoot Internship"
      ]
    }
  ];

  const projects = [
    {
      title: "Plant Disease Detector",
      description: "AI-powered plant disease detection system using React, MongoDB, and computer vision. Presented at Kalasalingam Agriculture and Horticulture Conference. Features real-time scanning, disease identification, and treatment recommendations.",
      github: "https://github.com/Ragunathapoorva/plant-disease-detector",
      flowchart: [
        { step: "Image Capture", description: "Real-time plant scanning using device camera" },
        { step: "AI Processing", description: "Deep learning model analyzes plant health" },
        { step: "Disease Detection", description: "Identifies diseases with 95% accuracy" },
        { step: "Treatment Plan", description: "Provides detailed cure recommendations" }
      ]
    },
    {
      title: "MediTrack",
      description: "A comprehensive healthcare tracking application built with Java and Kotlin. Features include patient records management, appointment scheduling, and medication tracking.",
      github: "https://github.com/Ragunathapoorva/meditrack"
    },
    {
      title: "Hotel Website",
      description: "Modern and responsive hotel website with room booking system, amenities showcase, and virtual tour features. Built with React and Material-UI.",
      github: "https://github.com/Ragunathapoorva/hotel-website"
    },
    {
      title: "Blockchain Billing System",
      description: "Secure and transparent supermarket billing system using blockchain technology. Features include immutable transaction records and automated payment processing.",
      github: "https://github.com/Ragunathapoorva/blockchain-billing"
    },
    {
      title: "Weather Check",
      description: "Real-time weather monitoring application with location-based forecasts, interactive maps, and severe weather alerts integration.",
      github: "https://github.com/Ragunathapoorva/weather-check"
    },
    {
      title: "Ransomware Detection System",
      description: "Advanced security tool for detecting and preventing ransomware attacks. Includes real-time monitoring, threat analysis, and automated backup system.",
      github: "https://github.com/Ragunathapoorva/ransomware-detection"
    },
    {
      title: "Cloud Security Solution",
      description: "Comprehensive cloud security system to protect against ransomware. Features include automated backups, encryption, and secure file recovery.",
      github: "https://github.com/Ragunathapoorva/cloud-security"
    },
    {
      title: "Calendar Scheduling System",
      description: "Smart calendar application developed during MLSC Hackathon. Features include AI-powered scheduling, event management, and team collaboration tools.",
      github: "https://github.com/Ragunathapoorva/calendar-system"
    }
  ];

  return (
    <Box sx={{ 
      bgcolor: '#0a0a0a', 
      color: '#4ECDC4', 
      fontFamily: "'Poppins', sans-serif",
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Enhanced Animated Background */}
      <Box sx={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
        zIndex: 0,
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(78, 205, 196, 0.1) 0%, transparent 50%)',
          animation: 'pulse 8s infinite',
        }
      }}>
        {/* Saturn */}
        <Box
          sx={{
            position: 'absolute',
            top: '30%',
            left: '70%',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #4ECDC4, #556270)',
            boxShadow: '0 0 50px rgba(78, 205, 196, 0.3)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '140px',
              height: '20px',
              background: 'linear-gradient(90deg, transparent, rgba(78, 205, 196, 0.3), transparent)',
              transform: 'translate(-50%, -50%) rotate(-20deg)',
              borderRadius: '50%',
              animation: `${saturnRotate} 20s linear infinite`,
            },
            animation: `${saturnOrbit} 40s linear infinite`,
          }}
        />

        {/* Stars Layer 1 - Small Stars */}
        {[...Array(100)].map((_, i) => (
          <Box
            key={`star1-${i}`}
            sx={{
              position: 'absolute',
              width: '2px',
              height: '2px',
              background: '#fff',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `${shootingStar} ${2 + Math.random() * 3}s infinite`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}

        {/* Stars Layer 2 - Medium Stars */}
        {[...Array(50)].map((_, i) => (
          <Box
            key={`star2-${i}`}
            sx={{
              position: 'absolute',
              width: '3px',
              height: '3px',
              background: 'linear-gradient(45deg, #fff, #4ECDC4)',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `${shootingStar} ${3 + Math.random() * 4}s infinite`,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow: '0 0 3px #4ECDC4',
            }}
          />
        ))}

        {/* Shooting Stars */}
        {[...Array(5)].map((_, i) => (
          <Box
            key={`shooting-star-${i}`}
            sx={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              background: '#4ECDC4',
              borderRadius: '50%',
              left: '-10px',
              top: `${Math.random() * 50}%`,
              boxShadow: '0 0 0 1px #4ECDC488, 0 0 5px #4ECDC4, 0 0 10px #4ECDC4',
              animation: `${shootingStar} ${6 + Math.random() * 6}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              '&::after': {
                content: '""',
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                right: '0',
                height: '2px',
                width: '30px',
                background: 'linear-gradient(90deg, #4ECDC4, transparent)',
              }
            }}
          />
        ))}
      </Box>

      <ScrollProgress />

      {/* Main Content Sections */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        {/* First Page - Full Screen Hero */}
        <Box sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          pt: 8,
          backdropFilter: 'blur(10px)'
        }}>
          <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 } }}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ textAlign: 'center' }}>
                {/* Move Profile Photo to top right corner */}
                <Box sx={{
                  position: 'fixed',
                  top: '40px',
                  right: '40px',
                  zIndex: 10
                }}>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                  >
                    <Box sx={{
                      width: { xs: '180px', md: '220px' },
                      height: { xs: '180px', md: '220px' },
                      position: 'relative',
                      background: 'linear-gradient(135deg, rgba(78, 205, 196, 0.1), rgba(0, 0, 0, 0.3))',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '50%',
                      border: '3px solid rgba(78, 205, 196, 0.3)',
                      overflow: 'hidden',
                      boxShadow: '0 0 30px rgba(78, 205, 196, 0.2)',
                      transition: 'all 0.3s ease-in-out',
                      animation: `${float} 6s ease-in-out infinite`,
                      '&:hover': {
                        border: '3px solid #4ECDC4',
                        boxShadow: '0 0 50px rgba(78, 205, 196, 0.5)',
                        transform: 'scale(1.05)',
                        '& img': {
                          filter: 'brightness(1.2) contrast(1.1)',
                        },
                        '&::before': {
                          opacity: 1,
                        }
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: '-10px',
                        background: 'linear-gradient(45deg, transparent, rgba(78, 205, 196, 0.3), transparent)',
                        borderRadius: '50%',
                        animation: 'rotate 2s linear infinite',
                        opacity: 0.5,
                        transition: 'opacity 0.3s ease'
                      }
                    }}>
                      <Box
                        component="img"
                        src={`${import.meta.env.BASE_URL}/profile-portfolio.jpg`}
                        alt="Ragunathapoorva"
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center',
                          transition: 'all 0.3s ease-in-out',
                          filter: 'brightness(1) contrast(1)',
                        }}
                      />
                    </Box>
                  </motion.div>
                </Box>

                <Typography variant="h1" sx={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontWeight: 'bold',
                  fontSize: { xs: '2.5rem', md: '4.5rem' },
                  mb: 2,
                  background: 'linear-gradient(45deg, #4ECDC4, #556270)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 20px rgba(78, 205, 196, 0.3)',
                  letterSpacing: '2px'
                }}>
                  RAGUNATH S
                </Typography>
                <Typography variant="h2" sx={{
                  fontFamily: "'Orbitron', sans-serif",
                  color: '#4ECDC4',
                  fontSize: { xs: '1.2rem', md: '2rem' },
                  letterSpacing: '2px',
                  mb: 3,
                  textShadow: '0 0 10px rgba(78, 205, 196, 0.2)'
                }}>
                  Frontend Developer & Web Developer
                </Typography>
                <Typography variant="h6" sx={{
                  color: '#fff',
                  mb: 4,
                  maxWidth: '800px',
                  lineHeight: 1.8,
                  mx: 'auto'
                }}>
                  Passionate about creating beautiful and functional web experiences. 
                  Specializing in modern frontend technologies and responsive design. 
                  Ready to bring your digital ideas to life as a freelance developer.
                </Typography>

                {/* Social Media Icons */}
                <Box sx={{ 
                  display: 'flex', 
                  gap: 2,
                  mb: 4,
                  justifyContent: 'center'
                }}>
                  <IconButton
                    component="a"
                    href="https://github.com/Ragunathapoorva"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'white',
                      background: 'rgba(0, 0, 0, 0.3)',
                      backdropFilter: 'blur(10px)',
                      width: 50,
                      height: 50,
                      transition: 'all 0.3s ease',
                      '&:hover': { 
                        color: '#4ECDC4',
                        background: 'rgba(78, 205, 196, 0.1)',
                        boxShadow: '0 0 20px rgba(78, 205, 196, 0.3)',
                        transform: 'translateY(-5px)'
                      }
                    }}
                  >
                    <GitHubIcon sx={{ fontSize: 30 }} />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://www.linkedin.com/in/ragunath-suresh-8b586b268/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'white',
                      background: 'rgba(0, 0, 0, 0.3)',
                      backdropFilter: 'blur(10px)',
                      width: 50,
                      height: 50,
                      transition: 'all 0.3s ease',
                      '&:hover': { 
                        color: '#4ECDC4',
                        background: 'rgba(78, 205, 196, 0.1)',
                        boxShadow: '0 0 20px rgba(78, 205, 196, 0.3)',
                        transform: 'translateY(-5px)'
                      }
                    }}
                  >
                    <LinkedInIcon sx={{ fontSize: 30 }} />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="mailto:ragunathapoorva@gmail.com"
                    sx={{
                      color: 'white',
                      background: 'rgba(0, 0, 0, 0.3)',
                      backdropFilter: 'blur(10px)',
                      width: 50,
                      height: 50,
                      transition: 'all 0.3s ease',
                      '&:hover': { 
                        color: '#4ECDC4',
                        background: 'rgba(78, 205, 196, 0.1)',
                        boxShadow: '0 0 20px rgba(78, 205, 196, 0.3)',
                        transform: 'translateY(-5px)'
                      }
                    }}
                  >
                    <EmailIcon sx={{ fontSize: 30 }} />
                  </IconButton>
                </Box>

                {/* Open to Work Button */}
                <Button
                  component="a"
                  href="https://www.linkedin.com/in/ragunath-suresh-8b586b268/"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<WorkIcon />}
                  sx={{
                    background: 'linear-gradient(45deg, #4ECDC4, #556270)',
                    color: 'white',
                    px: 6,
                    py: 2,
                    borderRadius: '30px',
                    fontSize: '1.2rem',
                    textTransform: 'none',
                    boxShadow: '0 4px 15px rgba(78, 205, 196, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #556270, #4ECDC4)',
                      boxShadow: '0 6px 20px rgba(78, 205, 196, 0.4)',
                      transform: 'translateY(-5px)',
                    }
                  }}
                >
                  Open to Work & Freelance Projects
                </Button>
              </Box>
            </motion.div>
          </Container>
        </Box>

        {/* Second Page - About Me Section */}
        <Box sx={{ 
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          py: 8,
          backdropFilter: 'blur(10px)'
        }}>
          <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 } }}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Paper sx={{ 
                p: 6, 
                bgcolor: 'rgba(18, 18, 18, 0.9)', 
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(78, 205, 196, 0.1)'
              }}>
                <Typography variant="h3" gutterBottom sx={{ 
                  textAlign: 'center',
                  color: '#4ECDC4',
                  fontFamily: "'Orbitron', sans-serif",
                  mb: 6,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100px',
                    height: '3px',
                    background: 'linear-gradient(90deg, transparent, #4ECDC4, transparent)',
                  }
                }}>
                  About Me
                </Typography>

                <Grid container spacing={4} alignItems="center">
                  <Grid item xs={12} md={6}>
                    <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <Typography variant="h4" sx={{ 
                        color: '#4ECDC4',
                        mb: 3,
                        fontFamily: "'Orbitron', sans-serif",
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
                      }}>
                        Passionate Frontend Developer
                      </Typography>
                      <Typography variant="body1" sx={{ 
                        color: '#fff',
                        mb: 3,
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                        lineHeight: 1.8
                      }}>
                        I am deeply passionate about creating beautiful and functional web experiences. 
                        My journey in web development started with a curiosity for building things that 
                        people can interact with, and that passion has grown into a professional pursuit.
                      </Typography>
                      <Typography variant="body1" sx={{ 
                        color: '#fff',
                        mb: 3,
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                        lineHeight: 1.8
                      }}>
                        As a Frontend Developer, I specialize in crafting responsive and intuitive 
                        user interfaces that not only look great but also provide seamless user experiences 
                        across all devices.
                      </Typography>
                    </motion.div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <Typography variant="h4" sx={{ 
                        color: '#4ECDC4',
                        mb: 3,
                        fontFamily: "'Orbitron', sans-serif",
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
                      }}>
                        Web Development Expertise
                      </Typography>
                      <Typography variant="body1" sx={{ 
                        color: '#fff',
                        mb: 3,
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                        lineHeight: 1.8
                      }}>
                        My expertise extends beyond just frontend development. I'm proficient in full-stack 
                        development, working with modern technologies and frameworks to build comprehensive 
                        web solutions.
                      </Typography>
                      <Typography variant="body1" sx={{ 
                        color: '#fff',
                        mb: 3,
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                        lineHeight: 1.8
                      }}>
                        I believe in writing clean, maintainable code and staying up-to-date with the 
                        latest web development trends and best practices. My goal is to create web 
                        applications that not only meet but exceed user expectations.
                      </Typography>
                    </motion.div>
                  </Grid>
                </Grid>

                <Box sx={{ 
                  mt: 4,
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 2,
                  flexWrap: 'wrap'
                }}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Paper sx={{
                      p: 3,
                      background: 'linear-gradient(135deg, rgba(78, 205, 196, 0.1), rgba(0, 0, 0, 0.3))',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(78, 205, 196, 0.2)',
                      borderRadius: '15px',
                      textAlign: 'center',
                      minWidth: '200px'
                    }}>
                      <Typography variant="h6" sx={{ color: '#4ECDC4', mb: 1 }}>
                        Frontend Development
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#fff' }}>
                        Creating responsive and interactive user interfaces
                      </Typography>
                    </Paper>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Paper sx={{
                      p: 3,
                      background: 'linear-gradient(135deg, rgba(78, 205, 196, 0.1), rgba(0, 0, 0, 0.3))',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(78, 205, 196, 0.2)',
                      borderRadius: '15px',
                      textAlign: 'center',
                      minWidth: '200px'
                    }}>
                      <Typography variant="h6" sx={{ color: '#4ECDC4', mb: 1 }}>
                        Web Development
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#fff' }}>
                        Building full-stack web applications
                      </Typography>
                    </Paper>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Paper sx={{
                      p: 3,
                      background: 'linear-gradient(135deg, rgba(78, 205, 196, 0.1), rgba(0, 0, 0, 0.3))',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(78, 205, 196, 0.2)',
                      borderRadius: '15px',
                      textAlign: 'center',
                      minWidth: '200px'
                    }}>
                      <Typography variant="h6" sx={{ color: '#4ECDC4', mb: 1 }}>
                        Responsive Design
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#fff' }}>
                        Ensuring perfect display on all devices
                      </Typography>
                    </Paper>
                  </motion.div>
                </Box>
              </Paper>
            </motion.div>
          </Container>
        </Box>

        {/* Skills Section */}
        <Box sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          py: 8,
          backdropFilter: 'blur(10px)'
        }}>
          <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 } }}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Paper sx={{ 
                p: 6, 
                bgcolor: 'rgba(18, 18, 18, 0.8)', 
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(78, 205, 196, 0.1)',
                textAlign: 'center'
              }}>
                <Typography variant="h3" gutterBottom sx={{ 
                  textAlign: 'center',
                  color: '#4ECDC4',
                  fontFamily: "'Orbitron', sans-serif",
                  mb: 6,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100px',
                    height: '3px',
                    background: 'linear-gradient(90deg, transparent, #4ECDC4, transparent)',
                  }
                }}>
                  Skills & Technologies
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                  {skills.map((skill, index) => (
                    <Grid item xs={6} sm={4} md={3} key={index}>
                      <motion.div
                        whileHover={{ scale: 1.1, y: -5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Paper sx={{
                          p: 3,
                          textAlign: 'center',
                          bgcolor: 'rgba(255, 255, 255, 0.05)',
                          backdropFilter: 'blur(5px)',
                          borderRadius: '15px',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            boxShadow: '0 0 20px rgba(78, 205, 196, 0.2)',
                            border: '1px solid rgba(78, 205, 196, 0.3)',
                          }
                        }}>
                          <img 
                            src={skill.icon} 
                            alt={skill.name} 
                            style={{ 
                              width: 60, 
                              height: 60,
                              filter: 'drop-shadow(0 0 8px rgba(78, 205, 196, 0.3))'
                            }} 
                          />
                          <Typography sx={{ 
                            mt: 2,
                            color: '#fff',
                            fontWeight: 500
                          }}>
                            {skill.name}
                          </Typography>
                        </Paper>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </motion.div>
          </Container>
        </Box>

        {/* Projects Section */}
        <Box sx={{ 
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          py: 8,
          backdropFilter: 'blur(10px)'
        }}>
          <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 } }}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Paper sx={{ 
                p: 6, 
                bgcolor: 'rgba(18, 18, 18, 0.9)', 
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(78, 205, 196, 0.1)'
              }}>
                <Typography variant="h3" gutterBottom sx={{ 
                  textAlign: 'center',
                  color: '#4ECDC4',
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  mb: 6,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100px',
                    height: '3px',
                    background: 'linear-gradient(90deg, transparent, #4ECDC4, transparent)',
                  }
                }}>
                  Featured Projects
                </Typography>

                {/* Featured Project - Plant Disease Detector */}
                <Box sx={{ mb: 6 }}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Paper sx={{
                      p: 4,
                      background: 'linear-gradient(135deg, rgba(78, 205, 196, 0.1), rgba(0, 0, 0, 0.3))',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(78, 205, 196, 0.2)',
                      borderRadius: '15px',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: 'linear-gradient(90deg, #4ECDC4, #556270)',
                      }
                    }}>
                      <Typography variant="h4" sx={{ 
                        color: '#4ECDC4',
                        fontFamily: "'Orbitron', sans-serif",
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                        mb: 3
                      }}>
                        Plant Disease Detector
                      </Typography>
                      <Typography variant="body1" sx={{ 
                        color: '#fff',
                        mb: 4,
                        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                        lineHeight: 1.8
                      }}>
                        AI-powered plant disease detection system presented at Kalasalingam Agriculture and Horticulture Conference. 
                        Built with React, MongoDB, and advanced computer vision for real-time plant health analysis.
                      </Typography>

                      {/* Flowchart */}
                      <Box sx={{ 
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: 2,
                        mb: 4,
                        position: 'relative'
                      }}>
                        {projects[0].flowchart.map((step, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <Paper sx={{
                              p: 3,
                              bgcolor: 'rgba(78, 205, 196, 0.1)',
                              borderRadius: '15px',
                              border: '1px solid rgba(78, 205, 196, 0.2)',
                              position: 'relative',
                              zIndex: 1
                            }}>
                              <Typography variant="h6" sx={{ 
                                color: '#4ECDC4',
                                mb: 1,
                                fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }
                              }}>
                                {step.step}
                              </Typography>
                              <Typography variant="body2" sx={{ 
                                color: '#fff',
                                fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }
                              }}>
                                {step.description}
                              </Typography>
                            </Paper>
                            {index < projects[0].flowchart.length - 1 && (
                              <Box sx={{
                                display: { xs: 'none', md: 'block' },
                                position: 'absolute',
                                top: '50%',
                                right: '-30px',
                                width: '30px',
                                height: '2px',
                                background: 'linear-gradient(90deg, #4ECDC4, transparent)',
                                zIndex: 0
                              }} />
                            )}
                          </motion.div>
                        ))}
                      </Box>

                      <Button
                        component={motion.button}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        startIcon={<GitHubIcon />}
                        href={projects[0].github}
                        target="_blank"
                        sx={{
                          background: 'linear-gradient(45deg, #4ECDC4, #556270)',
                          color: 'white',
                          px: 3,
                          py: 1,
                          borderRadius: '20px',
                          fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                          '&:hover': {
                            background: 'linear-gradient(45deg, #556270, #4ECDC4)',
                            boxShadow: '0 0 20px rgba(78, 205, 196, 0.3)',
                          }
                        }}
                      >
                        View Project
                      </Button>
                    </Paper>
                  </motion.div>
                </Box>

                {/* Other Projects Grid */}
                <Grid container spacing={4}>
                  {projects.slice(1).map((project, index) => (
                    <Grid item xs={12} md={6} key={index}>
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Paper sx={{
                          p: 4,
                          height: '100%',
                          background: 'linear-gradient(135deg, rgba(78, 205, 196, 0.1), rgba(0, 0, 0, 0.3))',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(78, 205, 196, 0.2)',
                          borderRadius: '15px',
                          position: 'relative',
                          overflow: 'hidden',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '3px',
                            background: 'linear-gradient(90deg, #4ECDC4, #556270)',
                          },
                          '&:hover': {
                            boxShadow: '0 0 30px rgba(78, 205, 196, 0.2)',
                            '& .project-icon': {
                              transform: 'scale(1.1) rotate(5deg)',
                            }
                          }
                        }}>
                          <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            mb: 2,
                            gap: 2
                          }}>
                            <CodeIcon 
                              className="project-icon"
                              sx={{ 
                                color: '#4ECDC4',
                                fontSize: 40,
                                transition: 'transform 0.3s ease'
                              }}
                            />
                            <Typography variant="h5" sx={{ 
                              color: '#4ECDC4',
                              fontFamily: "'Orbitron', sans-serif"
                            }}>
                              {project.title}
                            </Typography>
                          </Box>
                          <Typography variant="body1" sx={{ 
                            color: '#fff',
                            mb: 3,
                            lineHeight: 1.8
                          }}>
                            {project.description}
                          </Typography>
                          <Button
                            component={motion.button}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            startIcon={<GitHubIcon />}
                            href={project.github}
                            target="_blank"
                            sx={{
                              background: 'linear-gradient(45deg, #4ECDC4, #556270)',
                              color: 'white',
                              px: 3,
                              py: 1,
                              borderRadius: '20px',
                              '&:hover': {
                                background: 'linear-gradient(45deg, #556270, #4ECDC4)',
                                boxShadow: '0 0 20px rgba(78, 205, 196, 0.3)',
                              }
                            }}
                          >
                            View Code
                          </Button>
                        </Paper>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </motion.div>
          </Container>
        </Box>

        {/* Education Section */}
        <Box sx={{ 
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          py: 8,
          backdropFilter: 'blur(10px)'
        }}>
          <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 } }}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Paper sx={{ 
                p: 6, 
                bgcolor: 'rgba(18, 18, 18, 0.9)', 
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(78, 205, 196, 0.1)'
              }}>
                <Typography variant="h3" gutterBottom sx={{ 
                  textAlign: 'center',
                  color: '#4ECDC4',
                  fontFamily: "'Orbitron', sans-serif",
                  mb: 6,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100px',
                    height: '3px',
                    background: 'linear-gradient(90deg, transparent, #4ECDC4, transparent)',
                  }
                }}>
                  Educational Journey
                </Typography>

                {/* Timeline Line */}
                <Box sx={{ position: 'relative' }}>
                  {/* Timeline Line */}
                  <Box sx={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '2px',
                    height: '100%',
                    background: 'linear-gradient(to bottom, #4ECDC4, #556270)',
                    opacity: 0.3
                  }} />

                  {/* College */}
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <Paper sx={{
                      p: 4,
                      mb: 4,
                      ml: 'auto',
                      width: '45%',
                      background: 'linear-gradient(135deg, rgba(78, 205, 196, 0.1), rgba(0, 0, 0, 0.3))',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(78, 205, 196, 0.2)',
                      borderRadius: '15px',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: '-20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '20px',
                        height: '20px',
                        background: '#4ECDC4',
                        borderRadius: '50%',
                        boxShadow: '0 0 20px rgba(78, 205, 196, 0.5)',
                      }
                    }}>
                      <Typography variant="h5" sx={{ color: '#4ECDC4', mb: 2 }}>
                        Kalasalingam University
                      </Typography>
                      <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>
                        B.Tech Information Technology
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#a0a0a0', mb: 2 }}>
                        2020 - 2024
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#fff' }}>
                        • Specializing in Information Technology with focus on Web Development
                        • Active participant in technical events and hackathons
                        • Developed multiple full-stack projects
                        • Participated in various hackathons and workshops
                      </Typography>
                    </Paper>
                  </motion.div>

                  {/* Higher Secondary */}
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Paper sx={{
                      p: 4,
                      mb: 4,
                      width: '45%',
                      background: 'linear-gradient(135deg, rgba(78, 205, 196, 0.1), rgba(0, 0, 0, 0.3))',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(78, 205, 196, 0.2)',
                      borderRadius: '15px',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        right: '-20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '20px',
                        height: '20px',
                        background: '#4ECDC4',
                        borderRadius: '50%',
                        boxShadow: '0 0 20px rgba(78, 205, 196, 0.5)',
                      }
                    }}>
                      <Typography variant="h5" sx={{ color: '#4ECDC4', mb: 2 }}>
                        Bharath Montessori Matric Hr Sec School
                      </Typography>
                      <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>
                        Higher Secondary Education (12th)
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#a0a0a0', mb: 2 }}>
                        2019 - 2020
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#fff' }}>
                        • Secured 78 percentile
                        • Active soccer player
                        • Computer Science stream
                        • Participated in various technical competitions
                      </Typography>
                    </Paper>
                  </motion.div>

                  {/* Secondary */}
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Paper sx={{
                      p: 4,
                      ml: 'auto',
                      width: '45%',
                      background: 'linear-gradient(135deg, rgba(78, 205, 196, 0.1), rgba(0, 0, 0, 0.3))',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(78, 205, 196, 0.2)',
                      borderRadius: '15px',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: '-20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '20px',
                        height: '20px',
                        background: '#4ECDC4',
                        borderRadius: '50%',
                        boxShadow: '0 0 20px rgba(78, 205, 196, 0.5)',
                      }
                    }}>
                      <Typography variant="h5" sx={{ color: '#4ECDC4', mb: 2 }}>
                        Bharath Montessori Matric Hr Sec School
                      </Typography>
                      <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>
                        Secondary Education (10th)
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#a0a0a0', mb: 2 }}>
                        2017 - 2018
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#fff' }}>
                        • Secured 88 percentile
                        • Excelled in mathematics and science
                        • Active participant in sports and cultural activities
                        • Developed strong foundation in core subjects
                      </Typography>
                    </Paper>
                  </motion.div>
                </Box>
              </Paper>
            </motion.div>
          </Container>
        </Box>

        {/* Experience Section */}
        <Box sx={{ 
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          py: 8,
          backdropFilter: 'blur(10px)'
        }}>
          <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 } }}>
            <Paper sx={{ 
              p: 4,
              bgcolor: 'rgba(18, 18, 18, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(78, 205, 196, 0.2)',
              boxShadow: '0 0 20px rgba(78, 205, 196, 0.1)'
            }}>
              <Typography variant="h4" gutterBottom sx={{ 
                color: '#4ECDC4',
                borderBottom: '2px solid rgba(78, 205, 196, 0.3)',
                pb: 2,
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600
              }}>
                <WorkIcon sx={{ mr: 2 }} /> Experience & Internships
              </Typography>

              <Grid container spacing={4}>
                {experiences.map((exp, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Paper sx={{
                      p: 3,
                      bgcolor: 'rgba(78, 205, 196, 0.05)',
                      border: '1px solid rgba(78, 205, 196, 0.2)',
                      height: '100%'
                    }}>
                      <Typography variant="h6" sx={{ color: '#4ECDC4', mb: 1, fontWeight: 500 }}>
                        {exp.title}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: '#fff', opacity: 0.9, mb: 2 }}>
                        {exp.company} | {exp.duration}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#fff', opacity: 0.8 }}>
                        {exp.description}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Container>
        </Box>

        {/* Continuous Learning Section */}
        <Box sx={{ 
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          py: 8,
          backdropFilter: 'blur(10px)'
        }}>
          <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 } }}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Paper sx={{ 
                p: 6, 
                bgcolor: 'rgba(18, 18, 18, 0.9)', 
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(78, 205, 196, 0.1)'
              }}>
                <Typography variant="h3" gutterBottom sx={{ 
                  textAlign: 'center',
                  color: '#4ECDC4',
                  fontFamily: "'Orbitron', sans-serif",
                  mb: 6,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100px',
                    height: '3px',
                    background: 'linear-gradient(90deg, transparent, #4ECDC4, transparent)',
                  }
                }}>
                  Continuous Learning Journey
                </Typography>

                {/* Certifications Grid */}
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Paper sx={{
                        p: 4,
                        height: '100%',
                        background: 'linear-gradient(135deg, rgba(78, 205, 196, 0.1), rgba(0, 0, 0, 0.3))',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(78, 205, 196, 0.2)',
                        borderRadius: '15px',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '3px',
                          background: 'linear-gradient(90deg, #4ECDC4, #556270)',
                        }
                      }}>
                        <Typography variant="h5" sx={{ 
                          color: '#4ECDC4',
                          mb: 3,
                          fontFamily: "'Orbitron', sans-serif"
                        }}>
                          Professional Certifications
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                          <Typography variant="body1" sx={{ color: '#fff' }}>
                            • Unstop Talent Techpark 2025 Certification
                          </Typography>
                          <Typography variant="body1" sx={{ color: '#fff' }}>
                            • Cisco Cybersecurity Course Certification
                          </Typography>
                          <Typography variant="body1" sx={{ color: '#fff' }}>
                            • HP Life - AI for Beginners Certification
                          </Typography>
                          <Typography variant="body1" sx={{ color: '#fff' }}>
                            • Infosys Springboard - Java Concepts Certification
                          </Typography>
                          <Typography variant="body1" sx={{ color: '#fff' }}>
                            • Accenture Nordics - Software Engineering Job Simulation (Forage)
                          </Typography>
                        </Box>
                      </Paper>
                    </motion.div>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Paper sx={{
                        p: 4,
                        height: '100%',
                        background: 'linear-gradient(135deg, rgba(78, 205, 196, 0.1), rgba(0, 0, 0, 0.3))',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(78, 205, 196, 0.2)',
                        borderRadius: '15px',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '3px',
                          background: 'linear-gradient(90deg, #4ECDC4, #556270)',
                        }
                      }}>
                        <Typography variant="h5" sx={{ 
                          color: '#4ECDC4',
                          mb: 3,
                          fontFamily: "'Orbitron', sans-serif"
                        }}>
                          Technical Projects & Research
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                          <Typography variant="body1" sx={{ color: '#fff' }}>
                            • CodeChef Journey - Competitive Programming Excellence
                          </Typography>
                          <Typography variant="body1" sx={{ color: '#fff' }}>
                            • MATLAB Training & Services - Advanced Computing
                          </Typography>
                          <Typography variant="body1" sx={{ color: '#fff' }}>
                            • Information Storage Materials and Retrievals Research
                          </Typography>
                          <Typography variant="body1" sx={{ color: '#fff' }}>
                            • Technical Project Expo at Kalasalingam University
                          </Typography>
                        </Box>
                      </Paper>
                    </motion.div>
                  </Grid>
                </Grid>

                {/* Research Project Highlight */}
                <Box sx={{ mt: 6 }}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Paper sx={{
                      p: 4,
                      background: 'linear-gradient(135deg, rgba(78, 205, 196, 0.1), rgba(0, 0, 0, 0.3))',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(78, 205, 196, 0.2)',
                      borderRadius: '15px',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: 'linear-gradient(90deg, #4ECDC4, #556270)',
                      }
                    }}>
                      <Typography variant="h5" sx={{ 
                        color: '#4ECDC4',
                        mb: 3,
                        fontFamily: "'Orbitron', sans-serif"
                      }}>
                        Featured Research Project
                      </Typography>
                      <Typography variant="h6" sx={{ 
                        color: '#fff',
                        mb: 2,
                        fontFamily: "'Orbitron', sans-serif"
                      }}>
                        "Sniffing Out Danger" - Smart CO Gas Detection System
                      </Typography>
                      <Typography variant="body1" sx={{ 
                        color: '#fff',
                        mb: 2,
                        lineHeight: 1.8
                      }}>
                        Presented at the International Conference for Next Generation Materials and Devices (ICNMD) 2024
                      </Typography>
                      <Typography variant="body1" sx={{ 
                        color: '#fff',
                        lineHeight: 1.8
                      }}>
                        Developed an innovative gas sensor detection system that combines advanced materials science with 
                        real-time monitoring capabilities. The project focuses on creating a smart, efficient, and 
                        reliable solution for detecting carbon monoxide levels, with applications in industrial safety 
                        and environmental monitoring.
                      </Typography>
                    </Paper>
                  </motion.div>
                </Box>
              </Paper>
            </motion.div>
          </Container>
        </Box>

        {/* Contact Section */}
        <Box sx={{ 
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          py: 8,
          backdropFilter: 'blur(10px)'
        }}>
          <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 } }}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Paper sx={{ 
                p: 6, 
                bgcolor: 'rgba(18, 18, 18, 0.9)', 
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(78, 205, 196, 0.1)',
                textAlign: 'center'
              }}>
                <Typography variant="h3" gutterBottom sx={{ 
                  color: '#4ECDC4',
                  fontFamily: "'Orbitron', sans-serif",
                  mb: 4,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100px',
                    height: '3px',
                    background: 'linear-gradient(90deg, transparent, #4ECDC4, transparent)',
                  }
                }}>
                  Get In Touch
                </Typography>
                
                <Typography variant="h5" sx={{ 
                  color: '#fff',
                  mb: 4,
                  fontWeight: 500
                }}>
                  Let's Connect and Create Something Amazing Together
                </Typography>

                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 3
                }}>
                  <Button
                    component={motion.button}
                    whileHover={{ scale: 1.05 }}
                    variant="contained"
                    startIcon={<EmailIcon />}
                    href="mailto:ragunathapoorva@gmail.com"
                    sx={{
                      background: 'linear-gradient(45deg, #4ECDC4, #556270)',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      borderRadius: '30px',
                      fontSize: '1.1rem',
                      textTransform: 'none',
                      boxShadow: '0 4px 15px rgba(78, 205, 196, 0.3)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #556270, #4ECDC4)',
                        boxShadow: '0 6px 20px rgba(78, 205, 196, 0.4)',
                      }
                    }}
                  >
                    ragunathapoorva@gmail.com
                  </Button>

                  <Box sx={{ 
                    display: 'flex', 
                    gap: 2,
                    mt: 2
                  }}>
                    <IconButton
                      component={motion.button}
                      whileHover={{ scale: 1.1, y: -3 }}
                      href="https://github.com/Ragunathapoorva"
                      target="_blank"
                      sx={{
                        color: 'white',
                        background: 'rgba(0, 0, 0, 0.3)',
                        backdropFilter: 'blur(10px)',
                        '&:hover': { 
                          color: '#4ECDC4',
                          background: 'rgba(78, 205, 196, 0.1)',
                        }
                      }}
                    >
                      <GitHubIcon />
                    </IconButton>
                    <IconButton
                      component={motion.button}
                      whileHover={{ scale: 1.1, y: -3 }}
                      href="https://www.linkedin.com/in/ragunath-suresh-8b586b268/"
                      target="_blank"
                      sx={{
                        color: 'white',
                        background: 'rgba(0, 0, 0, 0.3)',
                        backdropFilter: 'blur(10px)',
                        '&:hover': { 
                          color: '#4ECDC4',
                          background: 'rgba(78, 205, 196, 0.1)',
                        }
                      }}
                    >
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton
                      component={motion.button}
                      whileHover={{ scale: 1.1, y: -3 }}
                      href="https://wa.me/your-whatsapp-number"
                      target="_blank"
                      sx={{
                        color: 'white',
                        background: 'rgba(0, 0, 0, 0.3)',
                        backdropFilter: 'blur(10px)',
                        '&:hover': { 
                          color: '#4ECDC4',
                          background: 'rgba(78, 205, 196, 0.1)',
                        }
                      }}
                    >
                      <WhatsAppIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Home; 