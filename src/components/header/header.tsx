import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Logo } from '@/components/logo';
import { Navigation } from '@/components/navigation';
import { useTheme } from '@mui/material/styles';
import { Menu, Close } from '@mui/icons-material';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const LanguageSwitcher = dynamic(() => import('@/components/language-switcher/LanguageSwitcher'), {
    ssr: false,
});

const Header: FC = () => {
    const [visibleMenu, setVisibleMenu] = useState<boolean>(false);
    const { breakpoints } = useTheme();
    const matchMobileView = useMediaQuery(breakpoints.down('md'));
    const { locale } = useRouter();
    const isRtl = locale === 'ar';

    return (
        <Box sx={{ backgroundColor: 'background.paper' }}>
            <Container sx={{ py: { xs: 2, md: 3 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {/* Logo */}
                    <Box sx={{ order: isRtl ? 2 : 1 }}>
                        <Logo />
                    </Box>

                    {/* Mobile View: Language Switcher and Menu Icon */}
                    <Box
                        sx={{
                            ml: 'auto',
                            display: { xs: 'inline-flex', md: 'none' },
                            order: isRtl ? 1 : 2,
                            flexDirection: isRtl ? 'row-reverse' : 'row',
                            alignItems: 'center',
                            gap: 1, // Add gap between elements
                        }}
                    >
                        {/* Language Switcher */}
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                p: 1, // Add padding
                                '&:hover': {
                                    backgroundColor: '#283A5F', // Add hover effect
                                },
                            }}
                        >
                            <LanguageSwitcher />
                        </Box>

                        {/* Menu Icon */}
                        <IconButton
                            onClick={() => setVisibleMenu(!visibleMenu)}
                            sx={{
                                ml: isRtl ? 0 : 1,
                                mr: isRtl ? 1 : 0,
                                '&:hover': {
                                    backgroundColor: 'action.hover', // Add hover effect
                                },
                            }}
                        >
                            <Menu />
                        </IconButton>
                    </Box>

                    {/* Navigation and Desktop Language Switcher */}
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: { xs: 'column', md: 'row' },
                            transition: (theme) => theme.transitions.create(['top']),
                            ...(matchMobileView && {
                                py: 6,
                                backgroundColor: 'background.paper',
                                zIndex: 'appBar',
                                position: 'fixed',
                                height: { xs: '100vh', md: 'auto' },
                                top: visibleMenu ? 0 : '-120vh',
                                left: 0,
                            }),
                        }}
                    >
                        {/* Magic Space */}
                        <Box />

                        {/* Navigation */}
                        <Navigation />

                        {/* Desktop Language Switcher */}
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                alignItems: 'center',
                                gap: 2,
                                order: isRtl ? 1 : 2,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%',
                                    p: 1, // Add padding
                                    '&:hover': {
                                        backgroundColor: 'action.hover', // Add hover effect
                                    },
                                }}
                            >
                                <LanguageSwitcher />
                            </Box>
                        </Box>

                        {/* Close Icon for Mobile Menu */}
                        {visibleMenu && matchMobileView && (
                            <IconButton
                                sx={{
                                    position: 'fixed',
                                    top: 10,
                                    [isRtl ? 'left' : 'right']: 10,
                                    '&:hover': {
                                        backgroundColor: 'action.hover', // Add hover effect
                                    },
                                }}
                                onClick={() => setVisibleMenu(!visibleMenu)}
                            >
                                <Close />
                            </IconButton>
                        )}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Header;