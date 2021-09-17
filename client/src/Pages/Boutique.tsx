import React from 'react';
import Layout from './layout/Layout';
import {
  Text,
  Box,
  Button,
  Center,
  Stack,
  useColorModeValue,
  ListItem,
  List,
  ListIcon
} from '@chakra-ui/react';
import { CheckIcon } from '../theme/components/icons/CheckIcon';

export default function Boutique() {
  return (
    <Layout>
      <Box bg="#EEEEEE" height={['62rem', '85rem', '85rem', '110rem', '100%']}>
        <Box w="100%" py={[4, 20]} bg="white">
          <Center py={6} flexDirection={['column', 'column', 'column', 'row']}>
            <Box
              maxW={'330px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              transition="0.5s"
              _hover={{
                boxShadow: '-1px 5px 28px 5px rgba(0,0,0,0.49)',
                transition: '0.5s'
              }}
              rounded={'md'}
              overflow={'hidden'}
            >
              <Stack
                textAlign={'center'}
                p={6}
                color={useColorModeValue('gray.800', 'white')}
                align={'center'}
              >
                <Text
                  fontSize={'sm'}
                  fontWeight={500}
                  bg={useColorModeValue('green.50', 'green.900')}
                  p={2}
                  px={3}
                  color={'green.500'}
                  rounded={'full'}
                >
                  Offre découverte
                </Text>
                <Stack direction={'row'} align={'center'} justify={'center'}>
                  <Text fontSize={'6xl'} fontWeight={800}>
                    3.99
                  </Text>
                  <Text fontSize={'3xl'}>€</Text>
                  <Text color={'gray.500'}>/mois</Text>
                </Stack>
              </Stack>

              <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="green.400" />
                    Suppression des pubs
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="green.400" />
                    Accès à la réservation payante des professeurs
                  </ListItem>
                </List>

                <Button
                  mt={10}
                  w={'full'}
                  bg={'green.300'}
                  color={'white'}
                  rounded={'xl'}
                  boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                  _hover={{
                    bg: 'green.400'
                  }}
                  _focus={{
                    bg: 'green.400'
                  }}
                >
                  Commencer
                </Button>
              </Box>
            </Box>
            <Box
              maxW={'330px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              rounded={'md'}
              transition="0.5s"
              _hover={{
                boxShadow: '-1px 5px 28px 5px rgba(0,0,0,0.49)',
                transition: '0.5s'
              }}
              overflow={'hidden'}
              ml={[0, 0, 0, 10, 10]}
              mt={[10, 10, 10, 0, 0]}
            >
              <Stack
                textAlign={'center'}
                p={6}
                color={useColorModeValue('gray.800', 'white')}
                align={'center'}
              >
                <Text
                  fontSize={'sm'}
                  fontWeight={500}
                  bg={useColorModeValue('orange.50', 'orange.900')}
                  p={2}
                  px={3}
                  color={'yellow.500'}
                  rounded={'full'}
                >
                  Offre Premium
                </Text>
                <Stack direction={'row'} align={'center'} justify={'center'}>
                  <Text fontSize={'6xl'} fontWeight={800}>
                    24.99
                  </Text>
                  <Text fontSize={'3xl'}>€</Text>
                  <Text color={'gray.500'}>/mois</Text>
                </Stack>
              </Stack>

              <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="green.400" />
                    Avantage de l'offre découverte
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="green.400" />
                    Professeur Illimité a vie
                  </ListItem>
                  <br />
                </List>

                <Button
                  mt={10}
                  w={'full'}
                  bg={'yellow.300'}
                  color={'white'}
                  rounded={'xl'}
                  boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                  _hover={{
                    bg: 'yellow.400'
                  }}
                  _focus={{
                    bg: 'yellow.400'
                  }}
                >
                  Commencer
                </Button>
              </Box>
            </Box>
          </Center>
        </Box>
      </Box>
    </Layout>
  );
}
