import React, { useContext } from 'react';
import { Text, Box, Button, Flex, Image, Link } from '@chakra-ui/react';

import logo from './Back-to-School-Illustration1.png';
import Layout from './layout/Layout';
import { myContext } from './Context';

export default function Homepage() {
  const ctx = useContext(myContext);

  return (
    <Layout>
      <Box>
        <Box py={[0, 0, 0, 40]} mx={[10, 10, 40, 40]}>
          <Flex
            h={['400px', '400px', '400px', '200px', '100%']}
            ml={['0', '0', '5rem', '10rem']}
            mt={['3rem', '0', '0', '0']}
          >
            <Box flex="1" mt={20}>
              <Text
                alignSelf="center"
                fontSize="50px"
                lineHeight="4rem"
                textStyle="h2"
                textAlign={['center', 'center', 'center', 'center', 'unset']}
              >
                Gagner en <br />
                apprenant !
              </Text>
              <Text
                textStyle="h6"
                textAlign={['center', 'center', 'center', 'center', 'unset']}
                mt={2}
              >
                Avec SchoolWin, apprenez tout en vous amusant sans avoir à
                depenser 1€ C'est Genial non ?
              </Text>
              <Button
                my={10}
                bg="none"
                border="2px solid #3a55d1"
                borderRadius="40px"
                _hover={{ background: 'info' }}
                display={['block', 'block', 'block', 'block', 'inherit']}
                mx={['auto', 'auto', 'auto', 'auto', '0px']}
              >
                <Link
                  textStyle="h6"
                  href={ctx ? '/matiere' : '/login'}
                  className="whited"
                  color="info"
                >
                  Commencer
                </Link>
              </Button>
            </Box>
            <Box>
              <Flex
                flexDirection={['column', 'column', 'column', 'column', 'row']}
              >
                <Image
                  src={logo}
                  w={['0px', '0px', '0px', '0px', '600px']}
                  objectFit="cover"
                />
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box
          w={['100%', '100%', '80%', '80%', '50%']}
          display="block"
          mx="auto"
          h={['400px', '200px', '200px', '200px', '400px']}
        >
          <Box
            textAlign={['center', 'center', 'center', 'center']}
            bg="#F9F9F9"
            ml={[0, 20, 20, 0]}
            p={10}
          >
            <Text textStyle="h6">
              "Quel plaisir de pouvoir apprendre en s'amusant! Let's Gooo"
            </Text>
            <br />
            <Text textStyle="rf-text" letterSpacing={2}>
              Elon Musk
            </Text>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
