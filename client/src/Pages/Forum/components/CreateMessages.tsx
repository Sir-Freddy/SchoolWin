import React, { useContext, useState } from 'react';
import Layout from '../../layout/Layout';
import {
  Box,
  useToast,
  Button,
  FormControl,
  FormLabel,
  Textarea,
  Input
} from '@chakra-ui/react';
import axios, { AxiosResponse } from 'axios';
import { myContext } from '../../Context';

export default function CreateMessages() {
  const [msg, setMsg] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const toast = useToast();
  const ctx = useContext(myContext);

  const forum = () => {
    function timeout(delay: number) {
      return new Promise((res) => setTimeout(res, delay));
    }
    axios
      .post(
        'http://localhost:4000/forumjs',
        {
          username: ctx.username,
          msg,
          subject
        },
        {
          withCredentials: true
        }
      )
      .then(async (res: AxiosResponse) => {
        if (res.data === 'success') {
          toast({
            title: 'Le sujet à bien été crée',
            status: 'success',
            isClosable: true
          });
          await timeout(3000);
          window.location.href = '/forum';
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
      <Box
        h={['600px', '200px', '200px', '200px']}
        py={20}
        mx={['0rem', '0rem', '0rem', '0rem', '0rem']}
        flexDirection={['column', 'column', 'column', 'row', 'row']}
        justifyContent={['none', 'center', 'center', 'center', 'center']}
        textAlign="center"
        w="100%"
      >
        <FormControl isRequired>
          <FormLabel
            fontWeight="700"
            textAlign={['center', 'unset', 'unset', 'unset', 'unset']}
          >
            Sujet
          </FormLabel>
          <Input
            textAlign={['center', 'unset', 'unset', 'unset', 'unset']}
            type="text"
            placeholder="Sujet"
            onChange={(e: any) => setSubject(e.target.value)}
          />
          <FormLabel
            mt={10}
            fontWeight="700"
            textAlign={['center', 'unset', 'unset', 'unset', 'unset']}
          >
            Message
          </FormLabel>
          <Textarea
            textAlign={['center', 'unset', 'unset', 'unset', 'unset']}
            type="text"
            onChange={(e: any) => setMsg(e.target.value)}
          />
        </FormControl>
        <Button
          onClick={forum}
          fontSize="20px"
          mt={10}
          bg="black"
          display="block"
          mx="auto"
          color="white"
          w={'2O%'}
          _hover={{ background: 'grey.750' }}
        >
          Envoyer
        </Button>
      </Box>
    </Layout>
  );
}
