import React, { useContext, useState } from 'react';
import { myContext } from './Context';
import Layout from './layout/Layout';
import {
  Text,
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  FormLabel,
  Textarea,
  useToast
} from '@chakra-ui/react';
import axios, { AxiosResponse } from 'axios';

export default function Contact() {
  const [msg, setMsg] = useState<string>('');
  const [phone, setTelephone] = useState<string>('');
  const toast = useToast();
  const ctx = useContext(myContext);

  const contact = () => {
    function timeout(delay: number) {
      return new Promise((res) => setTimeout(res, delay));
    }
    axios
      .post(
        'http://localhost:4000/contact',
        {
          nom: ctx.nom,
          email: ctx.email,
          phone,
          msg
        },
        {
          withCredentials: true
        }
      )
      .then(async (res: AxiosResponse) => {
        if (res.data === 'success') {
          toast({
            title: 'Message envoyé',
            status: 'success',
            isClosable: true
          });
          await timeout(3000);
          window.location.href = '/';
        } else {
          toast({
            title: "Une erreur s'est produite..",
            status: 'error',
            duration: 2000,
            isClosable: true
          });
        }
      });
  };
  return (
    <Layout>
      <Box bg="#EEEEEE" height={['30rem', '30rem', '55rem', '60rem', '50rem']}>
        <Box
          py={20}
          mx={['0rem', '0rem', '5rem', '5rem', '10rem']}
          bg="#EEEEEE"
        >
          <Box
            p={10}
            borderTopRadius="10px"
            bg="grey.750"
            color="white"
            w={['100%', '100%', '80%', '80%', '100%']}
          >
            <Box textAlign="center" textStyle="h6">
              <Text>Contactez-nous</Text>
              <Text>
                Si vous avez une demande, une question ou un problème,
                contactez-nous et on se changera de vous répondre !
              </Text>
              <br />
            </Box>
          </Box>
          <Box
            bg="white"
            borderBottomRadius="10px"
            w={['100%', '100%', '80%', '80%', '100%']}
          >
            <FormControl isRequired mx={[0, 0, 0, 0, 0]} ml={2}>
              <br />
              <Flex
                mt={10}
                flexDirection={['column', 'column', 'column', 'column', 'row']}
              >
                <FormLabel
                  mt={1}
                  fontWeight={700}
                  w={['100%', '100%', '100%', '100%', '30%']}
                  textAlign="center"
                >
                  Numero de téléphone :
                </FormLabel>
                <Input
                  w={['100%', '100%', '100%', '100%', '60%']}
                  textAlign="center"
                  type="tel"
                  placeholder="Entrez votre numéro de téléphone (facultatif)"
                  onChange={(e) => setTelephone(e.target.value)}
                />
              </Flex>
              <Flex
                mt={10}
                flexDirection={['column', 'column', 'column', 'column', 'row']}
              >
                <FormLabel
                  textAlign="center"
                  mt={1}
                  fontWeight={700}
                  w={['100%', '100%', '100%', '100%', '30%']}
                >
                  Message :
                </FormLabel>
                <Textarea
                  placeholder="Votre message ..."
                  textAlign="center"
                  w={['100%', '100%', '100%', '100%', '60%']}
                  onChange={(e) => setMsg(e.target.value)}
                />
              </Flex>

              <Button
                // onClick={login}
                bg="black"
                display="block"
                mx="auto"
                color="white"
                w="50%"
                _hover={{ background: 'grey.750' }}
                mt={10}
                onClick={contact}
              >
                Envoyer
              </Button>
            </FormControl>
            <br />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
