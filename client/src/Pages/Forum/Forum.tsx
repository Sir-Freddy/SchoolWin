import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import { Box, Text, Flex, Button, Link } from '@chakra-ui/react';
import axios, { AxiosResponse } from 'axios';
import { ForumInterface } from '../../Interfaces/ForumInterface';

export default function Forum() {
  const [fofo, setFofo] = useState([]);
  const [fofoFrancais, setFofoFrancais] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:4000/forumMessage', {
        withCredentials: true
      })
      .then((res: AxiosResponse) => {
        setFofo(res.data);
      });
    axios
      .get('http://localhost:4000/forumMessageJs', {
        withCredentials: true
      })
      .then((res: AxiosResponse) => {
        setFofoFrancais(res.data);
      });
  }, []);
  return (
    <Layout>
      <Box height="80ch">
        <Flex
          h="100%"
          flexDirection={['column', 'column', 'column', 'column', 'row']}
        >
          <Box w={['100%', '100%', '80%', '80%', '20%']} textAlign="center">
            <br />
            <Text fontSize="30px">Matière</Text>
            <Box fontSize="20px">
              <Text mt={10}>Francais</Text>
              <Text mt={2}>Mathématique</Text>
              <Text mt={2}>Histoire</Text>
              <Text mt={2}>Géographie</Text>
              <Text mt={2}>Physique Chimie</Text>
            </Box>
          </Box>
          <Box w="100%" mx={10}>
            <br />
            <Flex
              flexDirection={['column', 'column', 'column', 'column', 'row']}
            >
              <Text
                textStyle="h2"
                ml={['5rem', '5rem', '12rem', '18rem', '20rem']}
                flex="1"
              >
                Questions
              </Text>
              <Button
                bg="black"
                color="white"
                display={['inherit', 'inherit', 'inherit', 'block']}
                mx={['0', '0', '0', 'auto']}
                mt={[10, 10, 10, 10, 0]}
                ml={['0', '0', '5rem', '16.9rem', '20rem']}
                w={['80%', '100%', '50%', '20%', '20%']}
                _hover={{ background: 'grey.750' }}
              >
                <Link href="/topic">Poser une Question</Link>
              </Button>
            </Flex>
            <br />

            {fofo.map((item: ForumInterface) => {
              return (
                <Box bg="#F5F5F5" w={['0', '0', '90%', '70%', '100%']}>
                  {item.subject && (
                    <Flex>
                      <Link flex="1" href="/forumFrancais">
                        <Text p={8} textStyle="h6">
                          {item.subject}
                        </Text>
                      </Link>
                      <Text p={8} textAlign="center" textStyle="h6">
                        Proposé par : <br />
                        <Text as="span">{item.username}</Text>
                      </Text>
                    </Flex>
                  )}
                </Box>
              );
            })}
            <br />
            {fofoFrancais.map((item: ForumInterface) => {
              return (
                <Box bg="#F5F5F5" w={['0', '0', '90%', '70%', '100%']}>
                  {item.subject && (
                    <Flex>
                      <Link flex="1" href="/forumMessage">
                        <Text p={8} textStyle="h6">
                          {item.subject}
                        </Text>
                      </Link>
                      <Text p={8} textAlign="center" textStyle="h6">
                        Proposé par : <br />
                        <Text as="span">{item.username}</Text>
                      </Text>
                    </Flex>
                  )}
                </Box>
              );
            })}
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
}
