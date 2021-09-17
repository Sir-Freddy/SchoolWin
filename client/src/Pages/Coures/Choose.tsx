import React, { useContext } from 'react';
import Layout from '../layout/Layout';
import { Box, Text, Link, Flex } from '@chakra-ui/react';
import { myContext } from '../Context';

export default function Choose() {
  const ctx = useContext(myContext);

  return (
    <Layout>
      <Box
        mx={[0, 0, 20, 20, 40]}
        py={20}
        height={['77rem', '85rem', '85rem', '110rem', '100%']}
      >
        <Flex flexDirection={['column', 'column', 'column', 'column', 'row']}>
          <Box
            bg="#629CE1"
            textAlign="center"
            w={['100%', '100%', '100%', '100%', '25%']}
            borderBottomRadius="20px"
            borderTopRadius="20px"
            color="white"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          >
            <Box
              bg="#227CE5"
              borderTopRadius="10px"
              p={2}
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            >
              <Text fontSize="28px">Mathématiques</Text>
            </Box>
            <Box mt={3}>
              <Text>0/0 chapitre</Text>
              <Text mt={3}>0/0 chapitre</Text>
            </Box>
            <br />
          </Box>
          <Box
            bg="#E16262"
            textAlign="center"
            w={['100%', '100%', '100%', '100%', '25%']}
            borderBottomRadius="20px"
            borderTopRadius="20px"
            ml={[0, 0, 0, 0, 40]}
            mt={[10, 10, 10, 10, 0]}
            color="white"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          >
            <Link _hover={{ textDecoration: 'unline' }} href="/francais">
              <Box
                bg="#E52222"
                borderTopRadius="10px"
                p={2}
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              >
                <Text fontSize="28px">Français</Text>
              </Box>
              <Box mt={3}>
                <Text>{ctx.progression}/1 cour</Text>
                <Text mt={3}>{ctx.progression}/1 chapitre</Text>
              </Box>
            </Link>
            <br />
          </Box>

          <Box
            bg="#DF62E1"
            textAlign="center"
            w={['100%', '100%', '100%', '100%', '25%']}
            ml={[0, 0, 0, 0, 40]}
            mt={[10, 10, 10, 10, 0]}
            borderBottomRadius="20px"
            borderTopRadius="20px"
            color="white"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          >
            <Box
              bg="#A722E5"
              borderTopRadius="10px"
              p={2}
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            >
              <Text fontSize="28px">Histoire</Text>
            </Box>
            <Box mt={3}>
              <Text>0/0 chapitre</Text>
              <Text mt={3}>0/0 chapitre</Text>
            </Box>
            <br />
          </Box>
        </Flex>
        <Flex
          mt={[0, 0, 0, 20]}
          flexDirection={['column', 'column', 'column', 'column', 'row']}
        >
          <Box
            bg="#DFE162"
            mt={[10, 10, 10, 0]}
            textAlign="center"
            w={['100%', '100%', '100%', '100%', '25%']}
            borderBottomRadius="20px"
            borderTopRadius="20px"
            color="white"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          >
            <Box
              bg="#E5BB22"
              borderTopRadius="10px"
              p={2}
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            >
              <Text fontSize="28px">Géographie</Text>
            </Box>
            <Box mt={3}>
              <Text>0/0 chapitre</Text>
              <Text mt={3}>0/0 chapitre</Text>
            </Box>
            <br />
          </Box>
          <Box
            bg="#6CE162"
            textAlign="center"
            w={['100%', '100%', '100%', '100%', '25%']}
            ml={[0, 0, 0, 0, 40]}
            mt={[10, 10, 10, 10, 0]}
            borderBottomRadius="20px"
            borderTopRadius="20px"
            color="white"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          >
            <Box
              bg="#29D96F"
              borderTopRadius="10px"
              p={2}
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            >
              <Text fontSize="28px">SVT</Text>
            </Box>
            <Box mt={3}>
              <Text>0/0 chapitre</Text>
              <Text mt={3}>0/0 chapitre</Text>
            </Box>
            <br />
          </Box>
          <Box
            bg="#62E1C3"
            textAlign="center"
            w={['100%', '100%', '100%', '100%', '25%']}
            ml={[0, 0, 0, 0, 40]}
            borderBottomRadius="20px"
            borderTopRadius="20px"
            mt={[10, 10, 10, 10, 0]}
            color="white"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          >
            <Box
              bg="#25AA92"
              borderTopRadius="10px"
              p={2}
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            >
              <Text fontSize="28px">Physique-Chimie</Text>
            </Box>
            <Box mt={3}>
              <Text>0/0 chapitre</Text>
              <Text mt={3}>0/0 chapitre</Text>
            </Box>
            <br />
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
}
