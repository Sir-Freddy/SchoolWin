import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import {
  Box,
  FormControl,
  Button,
  Input,
  Flex,
  Image,
  Text,
  useToast,
  Spinner,
  Link
} from '@chakra-ui/react';
import Layout from './layout/Layout';
import logo from './bebe.jpg';
import logoSchool from './SchoolWin.png';

export default function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const toast = useToast();

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const login = async () => {
    axios
      .post(
        'http://localhost:4000/login',
        {
          username,
          password
        },
        {
          withCredentials: true
        }
      )
      .then(
        async (res: AxiosResponse) => {
          if (res.data === 'success') {
            toast({
              title: 'Connexion',
              description: 'Vous allez être redirigé sur la page de cour.',
              status: 'success',
              isClosable: true
            });
            <Spinner />;
            await timeout(3000);
            window.location.href = '/matiere';
          }
        },
        () => {
          toast({
            title: "Une erreur s'est produite..",
            description: "Mot de passe ou nom d'utilisateur erroné.",
            status: 'error',
            duration: 2000,
            isClosable: true
          });
        }
      );
  };

  return (
    <Layout>
      <Box py={[4, 20]}>
        <Flex
          mx={[0, 0, 0, 40]}
          boxShadow="1px 5px 30px 5px rgba(0,0,0,0.4)"
          flexDirection={['column', 'column', 'column', 'row', 'row']}
        >
          <Box w={['100%', '100%', '100%', '40%']}>
            <Image
              src={logo}
              boxSize={['0px', '0px', '0px', '640px', '600px']}
            />
          </Box>
          <Box bg="#F9F9F9" w={['100%', '100%', '100%', '70%']} p={10}>
            <Image src={logoSchool} w="250px" h="100px" mt={20} />
            <Box
              mr={['0', '0', '0', '10rem']}
              mt={6}
              w={['100%', '100%', '100%', '80%']}
            >
              <Text textStyle="h6" fontSize="25px">
                Connectez-vous à votre compte
              </Text>
              <Box mt={10} ml={2}>
                <FormControl isRequired>
                  <Input
                    textAlign="center"
                    type="text"
                    placeholder="Nom d'utilisateur"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <Input
                    mt={5}
                    type="password"
                    textAlign="center"
                    placeholder="Mot de passe"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button
                    onClick={login}
                    bg="black"
                    color="white"
                    w="100%"
                    _hover={{ background: 'grey.750' }}
                    mt={5}
                  >
                    Connexion
                  </Button>
                </FormControl>
                <br />
                <Link
                  href="/register"
                  alignSelf="center"
                  fontSize="14px"
                  textStyle="h6"
                >
                  Vous ne possédez aucun compte ? Inscrivez-vous ici !
                </Link>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
}
