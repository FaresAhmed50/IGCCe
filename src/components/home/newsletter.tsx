// import React, { FC } from 'react'
// import Box from '@mui/material/Box'
// import InputBase from '@mui/material/InputBase'
// import Container from '@mui/material/Container'
// import Typography from '@mui/material/Typography'
// import { StyledButton } from '../styled-button'
//
// const HomeNewsLetter: FC = () => {
//   return (
//     <Box sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}>
//       <Container>
//         <Box
//           sx={{
//             backgroundColor: 'secondary.main',
//             borderRadius: 10,
//             py: { xs: 4, md: 10 },
//             px: { xs: 4, md: 8 },
//             textAlign: 'center',
//           }}
//         >
//           <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
//             Subscribe to Our News Letter
//           </Typography>
//           <Typography sx={{ mb: 6 }}>Subscribe to our newsletter to get information about our courses.</Typography>
//
//           <Box
//             sx={{
//               display: 'flex',
//               alignItems: 'center',
//               flexDirection: { xs: 'column', md: 'row' },
//               justifyContent: 'space-around',
//               width: { xs: '100%', md: 560 },
//               mx: 'auto',
//             }}
//           >
//             <InputBase
//               sx={{
//                 backgroundColor: 'background.paper',
//                 borderRadius: 3,
//                 width: '100%',
//                 height: 48,
//                 px: 2,
//                 mr: { xs: 0, md: 3 },
//                 mb: { xs: 2, md: 0 },
//               }}
//               placeholder="Enter your Email Address"
//             />
//             <Box>
//               {/*<StyledButton disableHoverEffect size="large">*/}
//               {/*  Subscribe*/}
//               {/*</StyledButton>*/}
//             </Box>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   )
// }
//
// export default HomeNewsLetter
import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { StyledButton } from '../styled-button';

const HomeNewsLetter: FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Add your form submission logic here (e.g., API call)
    };

    return (
        <Box sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}>
            <Container>
                <Box
                    sx={{
                        borderRadius: 10,
                        py: { xs: 4, md: 10 },
                        px: { xs: 4, md: 8 },
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
                        Contact Us
                    </Typography>
                    <Typography sx={{ mb: 6 }}>Get in touch with us for inquiries or support.</Typography>

                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 3,
                            width: { xs: '100%', md: 600 },
                            mx: 'auto',
                        }}
                    >
                        {/* Name Field */}
                        <TextField
                            fullWidth
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            sx={{ backgroundColor: 'background.paper' }}
                        />

                        {/* Email Field */}
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            sx={{ backgroundColor: 'background.paper', borderRadius: 3 }}
                        />

                        {/* Phone Field */}
                        <TextField
                            fullWidth
                            label="Phone Number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            sx={{ backgroundColor: 'background.paper', borderRadius: 3 }}
                        />

                        {/* Inquiry Type Dropdown */}
                        <FormControl fullWidth required sx={{ backgroundColor: 'background.paper', borderRadius: 3 }}>
                            <InputLabel id="inquiry-type-label">Inquiry Type</InputLabel>
                            <Select
                                labelId="inquiry-type-label"
                                label="Inquiry Type"
                                name="inquiryType"
                                value={formData.inquiryType}
                                onChange={handleChange}
                            >
                                <MenuItem value="course">Course</MenuItem>
                                <MenuItem value="mentoring">Mentoring</MenuItem>
                                <MenuItem value="governance">Governance</MenuItem>
                                <MenuItem value="support">Support</MenuItem>
                            </Select>
                        </FormControl>

                        {/* Message Textarea */}
                        <TextareaAutosize
                            aria-label="Message"
                            minRows={5}
                            placeholder="Enter your message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '16px',
                                borderRadius: '12px',
                                border: '1px solid #ccc',
                                backgroundColor: '#fff',
                                fontFamily: 'inherit',
                                fontSize: '1rem',
                            }}
                        />

                        {/* Submit Button */}
                        <StyledButton type="submit" disableHoverEffect size="large">
                            Submit
                        </StyledButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default HomeNewsLetter;