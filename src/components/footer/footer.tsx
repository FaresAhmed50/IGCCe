import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { FooterNavigation, FooterSocialLinks } from '@/components/footer';

const Footer: FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#283A5F', // Background color
                py: { xs: 6, md: 10 }, // Padding top and bottom
                color: 'primary.contrastText', // Text color
                borderTop: '2px solid', // Add a border at the top
                borderColor: 'secondary.main', // Border color
            }}
        >
            <Container>
                <Grid container spacing={3}>
                    {/* Left Section (Brand Info and Social Links) */}
                    <Grid item xs={12} md={5}>
                        <Box
                            sx={{
                                width: '100%',
                                minWidth: 360, // Limit width for better readability
                                mb: { xs: 4, md: 0 }, // Add margin bottom on mobile
                                textAlign: { xs: 'center', md: 'left' }, // Center on mobile, left-align on desktop
                                ml:{xs:1}
                            }}
                        >
                            {/* Title */}
                            <Typography
                                component="h2"
                                variant="h2"
                                sx={{
                                    mb: 2,
                                    fontSize: { xs: 28, md: 32 }, // Responsive font size
                                    fontWeight: 'bold', // Bold title
                                }}
                            >
                                IGCC Egypt
                            </Typography>

                            {/* Subtitle */}
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    letterSpacing: 1,
                                    mb: 3,
                                    lineHeight: 1.6, // Better readability
                                    opacity: 0.9, // Slightly lighter text
                                }}
                            >
                                IGCC Egypt is your go-to for professional courses in governance and sustainable development with internationally recognized ICAS certification.
                            </Typography>

                            {/* Social Links */}
                            <FooterSocialLinks />
                        </Box>
                    </Grid>

                    {/* Right Section (Footer Navigation) */}
                    <Grid item xs={12} md={7}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: { xs: 'center', md: 'flex-end' }, // Center on mobile, align right on desktop
                            }}
                        >
                            <FooterNavigation />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;