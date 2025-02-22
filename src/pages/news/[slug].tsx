import { FC } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import { dataNews } from '@/components/home/home_news.data';
import { format } from 'date-fns';
import { MainLayout } from '@/components/layout';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { PartnersCarousel } from '@/components/partners';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    backgroundColor: theme.palette.background.paper,
}));

const NewsDetail: FC = () => {
    const router = useRouter();
    const { slug } = router.query;

    const newsItem = dataNews.find((item) => item.slug === slug);

    if (!newsItem) {
        return (
            <MainLayout>
                <Container>
                    <Typography variant="h4" align="center" sx={{ my: 8 }}>
                        News article not found
                    </Typography>
                </Container>
            </MainLayout>
        );
    }

    const seo = {
        title: `${newsItem.title} - IGCC News`,
        description: newsItem.description[0] || '',
        openGraph: {
            title: newsItem.title,
            description: newsItem.description[0] || '',
            type: 'article',
            article: {
                publishedTime: newsItem.date,
                authors: [newsItem.author],
                tags: newsItem.tags,
            },
            images: newsItem.image.map((img, index) => ({
                url: img.url,
                width: img.width,
                height: img.height,
                alt: `${newsItem.title} - Image ${index + 1}`,
            })),
        },
    };

    return (
        <MainLayout seo={seo}>
            <Box component="article" sx={{ backgroundColor: '#f5f5f5' }}>
                <Box sx={{ py: { xs: 6, md: 10 } }}>
                    <Container maxWidth="lg">
                        <StyledPaper>
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <Typography 
                                        variant="h1" 
                                        component="h1" 
                                        sx={{ 
                                            fontSize: { xs: 32, md: 40 }, 
                                            mb: 2,
                                            fontWeight: 'bold',
                                            color: 'primary.main'
                                        }}
                                    >
                                        {newsItem.title}
                                    </Typography>
                                    <Typography 
                                        variant="subtitle1" 
                                        color="text.secondary"
                                        sx={{ mb: 4 }}
                                    >
                                        {format(new Date(newsItem.date), 'dd MMMM yyyy')}
                                    </Typography>
                                    <Divider sx={{ mb: 4 }} />
                                </Grid>
                                {newsItem.image.map((img, index) => (
                                    <Grid item xs={12} key={index}>
                                        <Box 
                                            sx={{ 
                                                position: 'relative', 
                                                height: { xs: 200, md: 350 },
                                                maxWidth: '800px',
                                                margin: '0 auto',
                                                borderRadius: 2,
                                                overflow: 'hidden',
                                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                            }}
                                        >
                                            <Image
                                                src={img.url}
                                                alt={`${newsItem.title} - Image ${index + 1}`}
                                                width={img.width}
                                                height={img.height}
                                                style={{ 
                                                    objectFit: 'cover',
                                                    width: '100%',
                                                    height: '100%'
                                                }}
                                                priority={index === 0}
                                            />
                                        </Box>
                                    </Grid>
                                ))}
                                <Grid item xs={12}>
                                    <Box sx={{ mt: 2 }}>
                                        {newsItem.description.map((paragraph, index) => (
                                            <Typography 
                                                key={index} 
                                                paragraph 
                                                sx={{ 
                                                    fontSize: { xs: 16, md: 18 },
                                                    lineHeight: 1.8,
                                                    mb: 3,
                                                    color: 'text.primary'
                                                }}
                                            >
                                                {paragraph}
                                            </Typography>
                                        ))}
                                    </Box>
                                </Grid>
                            </Grid>
                        </StyledPaper>
                    </Container>
                </Box>
            </Box>
            <PartnersCarousel />
        </MainLayout>
    );
};

export default NewsDetail;
