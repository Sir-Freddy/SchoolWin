import React, { useState } from 'react';
import Layout from '../layout/Layout';
import { Box, Flex, Text, Button, useToast } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from '../../theme/components/icons';

export default function Exercice() {
  const [validate, setValidate] = useState(false);
  const [error, setError] = useState(false);
  const toast = useToast();

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }
  const validateQuiz = async () => {
    setValidate(true);
    setError(true);
    toast({
      title: 'Valider',
      description: 'Vous avez bien répondu bien joué',
      status: 'success',
      duration: 3000,
      isClosable: true
    });
    await timeout(3000);
    window.location.href = '/francais';
  };
  const ErrorQuiz = async () => {
    setValidate(true);
    setError(true);
    toast({
      title: 'Echec',
      description: "Ce n'est pas la bonne reponse veuillez ressayer",
      status: 'error',
      duration: 3000,
      isClosable: true
    });
    await timeout(3000);
    window.location.reload();
  };

  return (
    <Layout>
      <Box py={10}>
        <Box textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)">
          <Box
            color="white"
            bg="#E52222"
            borderTopRadius="20px"
            borderBottomRadius="20px"
            border="1px solid black"
            mx={['0', '0', '0', '0', '2rem']}
            mt={10}
          >
            <Flex
              borderBottom="1px solid black"
              flexDirection={['column', 'column', 'column', 'column', 'row']}
            >
              <Text
                fontSize="30px"
                borderRight="1px solid black"
                p={8}
                px={20}
                textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                textAlign={['center', 'inherit', 'inherit', 'inherit']}
              >
                Français
              </Text>
              <Box
                fontSize="25px"
                ml={13}
                borderRight="1px solid black"
                py={2}
                textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              >
                <Text
                  textAlign="center"
                  fontSize="30px"
                  p={8}
                  px={[0, 0, 0, 0, 20]}
                  textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                >
                  Conjugaison au passé simple
                </Text>
              </Box>
              <Box
                fontSize="25px"
                ml={13}
                borderRight="1px solid black"
                px={[0, 0, 0, 0, 20]}
                py={2}
                textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              >
                <Text textAlign="center">Niveau : </Text>
                <Flex
                  fontSize="22px"
                  textAlign="center"
                  p={3}
                  flexDirection={[
                    'column',
                    'column',
                    'column',
                    'column',
                    'row'
                  ]}
                >
                  <Text>3 ème</Text>
                </Flex>{' '}
              </Box>
              <Text
                fontSize="30px"
                p={8}
                px={20}
                textAlign={['center', 'inherit', 'inherit', 'inherit']}
                textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              >
                Forum
              </Text>
            </Flex>
            <Box bg="#FF7979" borderBottomRadius="20px">
              <Box p={10} fontSize="25px">
                <Text textAlign="center">
                  Choisis la bonne conjugaison de jouer au passé simple :
                </Text>
                <Flex
                  justifyContent="space-evenly"
                  mt={10}
                  flexDirection={[
                    'column',
                    'column',
                    'column',
                    'column',
                    'row'
                  ]}
                >
                  <Button
                    onClick={ErrorQuiz}
                    bg={error === true ? '#A10000' : '#FF4A4A'}
                    transition="1s"
                    _hover={{ background: '#FE2525' }}
                    borderRadius="10px"
                    w={['100%', '100%', '100%', '15rem']}
                    p={8}
                    boxShadow=" 0px 4px 4px rgba(0, 0, 0, 0.25)"
                  >
                    Je jouais
                  </Button>
                  <Button
                    onClick={validateQuiz}
                    bg={validate === true ? 'green.400' : '#FF4A4A'}
                    _hover={{ background: '#FE2525' }}
                    borderRadius="10px"
                    transition="1s"
                    w={['100%', '100%', '100%', '15rem']}
                    mt={[10, 0, 0, 0]}
                    p={8}
                    boxShadow=" 0px 4px 4px rgba(0, 0, 0, 0.25)"
                  >
                    Je jouai
                  </Button>
                  <Button
                    onClick={ErrorQuiz}
                    bg={error === true ? '#A10000' : '#FF4A4A'}
                    _hover={{ background: '#FE2525' }}
                    borderRadius="10px"
                    transition="1s"
                    w={['100%', '100%', '100%', '15rem']}
                    mt={[10, 0, 0, 0]}
                    p={8}
                    boxShadow=" 0px 4px 4px rgba(0, 0, 0, 0.25)"
                  >
                    Je jouerai
                  </Button>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
