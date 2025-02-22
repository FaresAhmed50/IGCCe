import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider, { Settings } from 'react-slick';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme, styled } from '@mui/material/styles';
import { IconButton, useMediaQuery, Modal, TextField, Button } from '@mui/material';
import IconArrowBack from '@mui/icons-material/ArrowBack';
import IconArrowForward from '@mui/icons-material/ArrowForward';
import useCourseData from './popular-course.data'; // Import the custom hook
import { CourseCardItem } from '@/components/course';
import { Course } from '@/interfaces/course';
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";



interface SliderArrowArrow {
    onClick?: () => void;
    type: 'next' | 'prev';
    className?: 'string';
}

interface FormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    courseName: string;
}

const SliderArrow: FC<SliderArrowArrow> = (props) => {
    const { onClick, type, className } = props;


    return (
        <IconButton
            sx={{
                backgroundColor: 'background.paper',
                color: 'primary.main',
                '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
                bottom: { xs: '-70px !important', md: '-28px !important' },
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
        left: 0,
        bottom: -20,
        paddingLeft: theme.spacing(1),
        textAlign: 'left',
        '& li': {
            marginRight: theme.spacing(2),
            '&.slick-active>div': {
                backgroundColor: theme.palette.primary.main,
            },
        },
    },
}));

const HomePopularCourse: FC = () => {
    const { breakpoints } = useTheme();
    const matchMobileView = useMediaQuery(breakpoints.down('md'));
    const [open, setOpen] = useState(false); // State to control modal visibility
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null); // State to store the selected course object
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        company: '',
        courseName: '',
    });
    const { t } = useTranslation('common')
    const { locale } = useRouter()
    const isRtl = locale === 'ar'

    // Use the custom hook to fetch data
    const { data } = useCourseData();

    // Handle modal open
    const handleOpen = (course: Course) => {
        setSelectedCourse(course);
        setFormData((prev) => ({ ...prev, courseName: course.title }));
        setOpen(true);
    };

    // Handle modal close
    const handleClose = () => {
        setOpen(false);
        setSelectedCourse(null);
        setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            courseName: '',
        });
    };

    // Handle form input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Send form data to the backend
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Form submitted successfully!');
                handleClose(); // Close the modal after successful submission
            } else {
                alert('Failed to submit form. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Please try again.');
        }
    };

    const sliderConfig: Settings = {
        infinite: true,
        autoplay: true,
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
            id="popular-course"
            sx={{
                pt: {
                    xs: 6,
                    md: 8,
                },
                pb: 14,
                backgroundColor: 'background.default',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <Box
                            sx={{
                                height: '100%',
                                width: { xs: '100%', md: '90%' },
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: { xs: 'center', md: 'flex-start' },

                            }}
                        >
                            <Typography
                                sx={{
                                    color: 'text.secondary',
                                    mb: 2,
                                    lineHeight: 1.6,
                                    ml: { xs: 0},
                                    textAlign: isRtl ? 'right' : 'left',
                                    direction: isRtl ? 'rtl' : 'ltr'
                                }}
                            >
                                { t('programDes.program13') }
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={9}>
                        <Slider {...sliderConfig}>
                            {data.map((item) => (
                                <Box key={String(item.id)} onClick={() => handleOpen(item)}>
                                    <CourseCardItem item={item} />
                                </Box>
                            ))}
                        </Slider>
                    </Grid>
                </Grid>
            </Container>

            {/* Modal for the form */}
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: { xs: '90%', md: '800px' },
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                        outline: 'none',
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                    }}
                >
                    {/* Left Half - Course Details */}
                    <Box
                        sx={{
                            flex: 1,
                            pr: { md: 2 },
                            borderRight: { md: '1px solid', borderColor: 'divider' },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography variant="h5" sx={{ mb: 2 }}>
                            {selectedCourse?.title}
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                            {selectedCourse?.description} {/* Display the course description */}
                        </Typography>
                    </Box>

                    {/* Right Half - Form */}
                    <Box sx={{ flex: 1, pl: { md: 2 } }}>
                        <Typography variant="h6" sx={{ mb: 3, textAlign: 'center' }}>
                            Enroll in {selectedCourse?.title}
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                label="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                fullWidth
                                label="Phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                fullWidth
                                label="Company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                sx={{ mb: 3 }}
                            />
                            <Button type="submit" variant="contained" fullWidth>
                                Submit
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};

export default HomePopularCourse;