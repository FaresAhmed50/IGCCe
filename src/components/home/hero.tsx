import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '@/components/styled-button'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

interface Exp {
  label: string
  value: string
}
interface ExpItemProps {
  item: Exp
}

const exps: Array<Exp> = [
  {
    label: 'Students',
    value: '10K+',
  },
  {
    label: 'Quality Course',
    value: '20+',
  },
  {
    label: 'Experience Mentors',
    value: '10+',
  },
]

const ExpItem: FC<ExpItemProps> = ({ item }) => {
  const { value, label } = item
  return (
    <Box sx={{ textAlign: 'center', mb: { xs: 1, md: 0 } }}>
      <Typography
        sx={{ color: '#FFC221', mb: { xs: 1, md: 2 }, fontSize: { xs: 34, md: 44 }, fontWeight: 'bold' }}
      >
        {value}
      </Typography>
      <Typography color="text.secondary" variant="h5">
        {label}
      </Typography>
    </Box>
  )
}

const HomeHero: FC = () => {
  return (
    <Box id="hero" sx={{ backgroundColor: 'background.paper', position: 'relative', pt: 4, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={0} sx={{ flexDirection: { xs: 'column', md: 'unset' } }}>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  component="h2"
                  sx={{
                    position: 'relative',
                    fontSize: { xs: 40, md: 40 },
                    letterSpacing: 1.5,
                    fontWeight: 'bolder',
                    lineHeight: 1.3,
                  }}
                >
                  <Typography
                    component="mark"
                    sx={{
                      position: 'relative',
                      color: '#283A5F',
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      backgroundColor: 'unset',
                    }}
                  >
                      Get Certified{' '}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: { xs: 24, md: 34 },
                        left: 2,
                        transform: 'rotate(3deg)',
                        '& img': { width: { xs: 146, md: 210 }, height: 'auto' },
                      }}
                    >
                      {/* eslint-disable-next-line */}
                      <img src="/images/headline-curve.svg" alt="Headline curve" />
                    </Box>
                  </Typography>
                    in Governance{' '}
                  <br />
                    and Sustainable Development
                </Typography>
              </Box>
              <Box sx={{ mb: 4, width: { xs: '100%', md: '70%' } }}>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  {
                      "Explore professional courses in governance and sustainable development with internationally recognized ICAS certification.\n" +
                      "Enhance your skills in corporate governance, sustainability strategies, and organizational performance through our expert-led training programs.\n"
                  }
                </Typography>
              </Box>
              <Box sx={{ '& button': { mr: 2 } }}>
                <ScrollLink to="contact-form" spy={true} smooth={true} offset={0} duration={350}>
                  <StyledButton color="primary" size="large" variant="contained">
                    Get Started
                  </StyledButton>
                </ScrollLink>
              </Box>
            </Box>
          </Grid>
            <Grid item xs={12} md={5} sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{
                    lineHeight: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%', // Ensure the Box takes full width on mobile
                    // '@media (max-width: 700px)': { // Adjust for mobile screens
                    //     iframe: {
                    //         width: '100%', // Make iframe responsive
                    //         height: 'auto', // Adjust height automatically
                    //         maxWidth: '450px', // Limit maximum width
                    //     }
                    // }
                }}>
                    <iframe
                        src="https://player.vimeo.com/video/1058579907?h=dcc436d4f4&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&autoplay=1"
                        allow="autoplay; picture-in-picture; clipboard-write; encrypted-media"
                        width="450"
                        height="450"
                        style={{ border: 'none', margin: '10px' }}
                        title="IGCC EG - الحوكمة"
                    ></iframe>
                </Box>
            </Grid>
        </Grid>

          {/* Experience */}
          <Box sx={{boxShadow: 2, py: 4, px: 7, borderRadius: 4}}>
              <Grid container spacing={2}>
                  {exps.map((item) => (
                      <Grid key={item.value} item xs={12} md={4}>
                          <ExpItem item={item}/>
                      </Grid>
                  ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeHero
