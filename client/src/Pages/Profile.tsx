import React, { useContext } from 'react';
import { myContext } from './Context';
import Layout from './layout/Layout';
import { Text, Box, Image } from '@chakra-ui/react';

export default function Profile() {
  const ctx = useContext(myContext);

  return (
    <Layout>
      <Box bg="#EEEEEE" height="50rem">
        <Box p={5} mx={['0', '0', '0', '20rem']} py="5rem">
          <Box bg="#F8F8F8" boxShadow="0px 3px 15px 6px rgba(0,0,0,0.42)">
            <Box p={1}>
              <Image
                src="https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_1280.png"
                w="100px"
                h="120px"
                display="block"
                mx="auto"
                mt={10}
              />
              <Text textStyle="h6" textAlign="center" mt={10}>
                {ctx.prenom} {ctx.nom}
              </Text>
            </Box>
            <Box textStyle="h6" textAlign="center">
              <Box borderBottom="1px solid" mt={5} />
              <Text mt={10}>
                Nom : {ctx.nom}{' '}
                <Text as="span" ml={10}>
                  Prenom : {ctx.prenom}
                </Text>
              </Text>
              <Text mt={5}>
                Email : {ctx.email}
                <Text as="span" ml={10}>
                  Classe : {ctx.classe}
                </Text>
              </Text>
              <br /> <br />
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
