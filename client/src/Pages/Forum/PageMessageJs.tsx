import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import { Box, Text, Flex, Image, Button } from '@chakra-ui/react';
import axios, { AxiosResponse } from 'axios';
import { ForumInterface } from '../../Interfaces/ForumInterface';

export default function PageMessageJs() {
  const [fofo, setFofo] = useState([]);

  const awnser = () => {
    window.location.href = '/awnserjsx';
  };
  useEffect(() => {
    axios
      .get('http://localhost:4000/forumMessageJs', {
        withCredentials: true
      })
      .then((res: AxiosResponse) => {
        setFofo(res.data);
      });
  }, []);
  return (
    <Layout>
      <Box>
        {fofo.map((item: ForumInterface) => {
          return (
            <Box>
              <Box p={7} mx={20} mt={10} mb={10} key={item.id} id={item.id}>
                <Text textStyle="h4" textAlign="center">
                  {item.subject}
                </Text>
              </Box>
              <Flex
                mx={[0, 0, 0, 0, 20]}
                flexDirection={['column', 'column', 'column', 'column', 'row']}
              >
                <Box w={['100%', '100%', '100%', '100%', '15%']}>
                  <Image
                    display={['none', 'none', 'none', 'none', 'block']}
                    mx="auto"
                    src="https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_1280.png"
                    w="150px"
                    h="180px"
                  />
                  <br />
                  <Text textStyle="h4" textAlign="center">
                    {item.username}
                  </Text>
                </Box>
                <Box
                  bg="#F3F3F3"
                  borderRadius="2rem"
                  p={10}
                  w={['100%', '100%', '100%', '100%', '70%']}
                  mt={[10, 0, 0, 0]}
                >
                  <Text textStyle="h6">{item.msg}</Text>
                </Box>
              </Flex>
            </Box>
          );
        })}
        <Button
          my={10}
          fontSize="20px"
          mt={10}
          bg="black"
          display="block"
          mx="auto"
          color="white"
          w="2O%"
          _hover={{ background: 'grey.750' }}
          onClick={awnser}
        >
          Répondre
        </Button>
      </Box>
    </Layout>
  );
}
