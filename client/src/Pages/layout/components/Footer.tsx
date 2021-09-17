import { Box, Image } from '@chakra-ui/react';
import logo from '../../SchoolWin.png';

const Footer = () => (
  <Box bg="#F8F8F8" p={3}>
    <Image src={logo} display="block" mx="auto" w="350px" h="120px" />
  </Box>
);

export { Footer };
