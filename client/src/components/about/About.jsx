import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.whoa.in/download/beauty-of-image-beautiful-photography-nature-wallpaper-nature-flowers);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Shashwat Singh</Typography>
                <Text variant="h5">
                    I'm a Computer Science student passionate about full-stack development and building modern web applications. 
                    I specialize in the MERN stack and have experience creating responsive, user-friendly websites and applications.<br />
                    If you are interested, you can view my projects here
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/ShashwatSingh321" color="inherit" target="_blank">
                            <GitHub />
                        </Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Currently exploring new technologies and open to collaboration on interesting projects. 
                    Feel free to check out my work and connect!
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;