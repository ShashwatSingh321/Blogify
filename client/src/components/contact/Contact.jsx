import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
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


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy!</Typography>    
                <Text variant="h5">
                    Reach out to me on GitHub
                    <Link href="https://github.com/ShashwatSingh321" color="inherit" target="_blank" style={{ marginLeft: 5 }}>
                        <GitHub/>
                    </Link>
                    <br />
                    Feel free to explore my projects and connect for collaborations or discussions about technology!
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;