import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Slider, { Settings } from 'react-slick';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme, styled } from '@mui/material/styles';
import IconArrowBack from '@mui/icons-material/ArrowBack';
import IconArrowForward from '@mui/icons-material/ArrowForward';
import { format } from 'date-fns';
import Image from 'next/image';
import { dataNews } from './home_news.data';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter

interface SliderArrowArrow {
    onClick?: () => void;
    type: 'next' | 'prev';
    className?: 'string';
}

const SliderArrow: FC<SliderArrowArrow> = (props) => {
    const { onClick, type, className } = props;
    return (
        <IconButton
            sx={{
                backgroundColor: 'background.paper',
                color: 'primary.main',
                '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
                bottom: '-28px !important',
                left: 'unset !important',
                right: type === 'prev' ? '60px !important' : '0 !important',
                zIndex: 10,
                boxShadow: 1,
            }}
            disableRipple
            color="inherit"
            onClick={onClick}
            className={className}
        >
            {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
        </IconButton>
    );
};

const StyledDots = styled('ul')(({ theme }) => ({
    '&.slick-dots': {
        position: 'absolute',
        left: '50%',
        bottom: -20,
        transform: 'translateX(-50%)',
        paddingLeft: 0,
        textAlign: 'center',
        '& li': {
            marginRight: theme.spacing(2),
            '&.slick-active>div': {
                backgroundColor: theme.palette.primary.main,
            },
        },
    },
}));

const StyledCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-8px)',
    },
}));

const HomeNews: FC = () => {
    const { breakpoints } = useTheme();
    const matchMobileView = useMediaQuery(breakpoints.down('md'));
    const router = useRouter(); // Get the router object
    const { locale } = router; // Extract the current locale

    // Only render the component if the locale is Arabic
    if (locale !== 'ar') {
        return null; // Return null if the locale is not Arabic
    }

    const sliderConfig: Settings = {
        infinite: true,
        speed: 300,
        slidesToShow: matchMobileView ? 1 : 3,
        slidesToScroll: 1,
        prevArrow: <SliderArrow type="prev" />,
        nextArrow: <SliderArrow type="next" />,
        dots: true,
        appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
        customPaging: () => (
            <Box sx={{ height: 8, width: 30, backgroundColor: 'divider', display: 'inline-block', borderRadius: 4 }} />
        ),
    };

    return (
        <Box
            id="news"
            sx={{
                pt: {
                    xs: 6,
                    md: 8,
                },
                pb: {
                    xs: 8,
                    md: 12,
                },
                backgroundColor: '#ecf3f3',
            }}
        >
            <Container maxWidth="lg">
                <Typography variant="h1" sx={{ fontSize: '3rem !important', mb: 4 }}>
                    Latest News & Events
                </Typography>

                <Slider {...sliderConfig}>
                    {dataNews.map((item) => (
                        <Box key={item.id} sx={{ p: 1 }}>
                            <Link href={`/news/${item.slug}`} >
                                <StyledCard>
                                    <Box sx={{ position: 'relative', height: 200 }}>
                                        <Image
                                            src={item.image[0].url}
                                            alt={item.title}
                                            width={item.image[0].width}
                                            height={item.image[0].height}
                                            style={{
                                                objectFit: 'cover',
                                                width: '100%',
                                                height: '100%'
                                            }}
                                        />
                                    </Box>
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography
                                            gutterBottom
                                            variant="h6"
                                            component="h2"
                                            sx={{
                                                fontWeight: 'bold',
                                                minHeight: 60,
                                                fontSize: { xs: 16, md: 18 }
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ mb: 2 }}
                                        >
                                            {format(new Date(item.date), 'dd MMMM yyyy')}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.shortDescription}
                                        </Typography>
                                    </CardContent>
                                </StyledCard>
                            </Link>
                        </Box>
                    ))}
                </Slider>
            </Container>
        </Box>
    );
};

export default HomeNews;