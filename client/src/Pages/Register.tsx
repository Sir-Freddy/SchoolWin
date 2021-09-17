import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import {
  Box,
  FormControl,
  Button,
  Input,
  Text,
  useToast,
  Link,
  Flex,
  Image
} from '@chakra-ui/react';
import Layout from './layout/Layout';
import logo from './bebe.jpg';
import logoSchool from './SchoolWin.png';

export default function Register() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [prenom, setPrenom] = useState<string>('');
  const [nom, setNom] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [classe, setClasse] = useState<string>('');
  const toast = useToast();

  const register = () => {
    function timeout(delay: number) {
      return new Promise((res) => setTimeout(res, delay));
    }
    axios
      .post(
        'http://localhost:4000/register',
        {
          username,
          password,
          prenom,
          nom,
          email,
          classe
        },
        {
          withCredentials: true
        }
      )
      .then(async (res: AxiosResponse) => {
        if (res.data === 'success') {
          toast({
            title: 'Compte crée.',
            description: 'Nous avons créé votre compte pour vous.',
            status: 'success',
            isClosable: true
          });
          await timeout(3000);
          window.location.href = '/login';
        } else {
          toast({
            title: "Une erreur s'est produite..",
            description: 'Impossible de créer votre compte.',
            status: 'error',
            duration: 2000,
            isClosable: true
          });
        }
      });
  };

  return (
    <Layout>
      <Box w="100%" py={[4, 20]} textAlign="center">
        <Flex
          mx={[0, 0, 0, 0, 40]}
          boxShadow="1px 5px 30px 5px rgba(0,0,0,0.4)"
        >
          <Box w={['0%', '0%', '0%', '0%', '50%']}>
            <Image src={logo} boxSize={['0px', '0px', '0px', '0px', '660px']} />
          </Box>
          <Box bg="#F9F9F9" w={['100%', '100%', '100%', '100%', '70%']} p={10}>
            <Image src={logoSchool} w="250px" h="100px" mt={20} />
            <Box
              mr={['0', '0', '0', '10rem']}
              mt={6}
              w={['100%', '100%', '100%', '100%', '90%']}
            >
              <Text textStyle="h6" fontSize="25px">
                Incrivez-vous dès maintenant
              </Text>
              <Box mt={10} ml={2}>
                <Flex
                  h={['400px', '200px', '200px', '200px']}
                  flexDirection={['column', 'row', 'row', 'row', 'row']}
                  justifyContent={[
                    'none',
                    'center',
                    'center',
                    'center',
                    'center'
                  ]}
                >
                  <Box
                    textAlign="center"
                    w={['100%', '100%', '100%', '100%', '100%']}
                  >
                    <FormControl isRequired>
                      <Input
                        textAlign={[
                          'center',
                          'unset',
                          'unset',
                          'unset',
                          'unset'
                        ]}
                        type="text"
                        placeholder="nom"
                        onChange={(e: any) => setNom(e.target.value)}
                      />

                      <Input
                        textAlign={[
                          'center',
                          'unset',
                          'unset',
                          'unset',
                          'unset'
                        ]}
                        type="text"
                        mt={5}
                        placeholder="prenom"
                        onChange={(e: any) => setPrenom(e.target.value)}
                      />

                      <Input
                        textAlign={[
                          'center',
                          'unset',
                          'unset',
                          'unset',
                          'unset'
                        ]}
                        type="text"
                        mt={5}
                        placeholder="classe"
                        onChange={(e: any) => setClasse(e.target.value)}
                      />
                    </FormControl>
                  </Box>
                  <Box
                    textAlign="center"
                    ml={[0, 20, 20, 20]}
                    w={['100%', '100%', '100%', '100%', '100%']}
                  >
                    <FormControl isRequired>
                      <Input
                        mt={[5, 0, 0, 0]}
                        textAlign={[
                          'center',
                          'unset',
                          'unset',
                          'unset',
                          'unset'
                        ]}
                        type="email"
                        placeholder="email"
                        onChange={(e: any) => setEmail(e.target.value)}
                      />
                      <Input
                        type="text"
                        textAlign={[
                          'center',
                          'unset',
                          'unset',
                          'unset',
                          'unset'
                        ]}
                        placeholder="nom d'utilisateur"
                        mt={5}
                        onChange={(e: any) => setUsername(e.target.value)}
                      />
                      <Input
                        type="password"
                        textAlign={[
                          'center',
                          'unset',
                          'unset',
                          'unset',
                          'unset'
                        ]}
                        placeholder="mot de passe"
                        mt={5}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </FormControl>
                  </Box>
                </Flex>
                <Button
                  onClick={register}
                  bg="black"
                  color="white"
                  w="100%"
                  _hover={{ background: 'grey.750' }}
                  _focus={{ background: 'grey.750' }}
                  mt={3}
                >
                  Inscription
                </Button>
                <br /> <br />
                <Link
                  href="/register"
                  alignSelf="center"
                  fontSize="16px"
                  textStyle="h6"
                >
                  Vous possédez déjà un compte ? Connectez-vous ici !
                </Link>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
}
