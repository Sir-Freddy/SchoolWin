import React, { useContext, useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import { Box, Text, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from '../../theme/components/icons';
import axios, { AxiosResponse } from 'axios';
import { FeedBackInterface } from '../../Interfaces/FeedInterface';
import { myContext } from '../Context';

export default function Conjugaison() {
  const [feed, setFeed] = useState([]);
  const ctx = useContext(myContext);

  useEffect(() => {
    axios
      .get('http://localhost:4000/feed', {
        withCredentials: true
      })
      .then((res: AxiosResponse) => {
        setFeed(
          res.data.filter((item: FeedBackInterface) => {
            return item.firstname;
          })
        );
      });
  }, [ctx]);
  if (!feed) {
    return null;
  }

  return (
    <Layout>
      <Box py={10} mx={40}>
        <Box>
          <Text textStyle="h2" textAlign="center" fontSize="40px">
            LE PASSE SIMPLE
          </Text>
        </Box>
        <Box mt={10}>
          <Text textStyle="h2">Utilisation : </Text>
          <Text mt={10}>
            Le passé simple s’utilise surtout à l’écrit, il remplace le passé
            composé. C’est le temps du récit, on l’utilise beaucoup dans les
            romans, dans les biographies, pour raconter un fait historique, un
            conte.
          </Text>
          <br />
          <Text textStyle="h6">Exemple</Text>
          <Box borderLeft="4px solid #227CE5" bg="#F9F9F9" p={5} mt={3}>
            <Text ml={2} fontSize="15px">
              Victor Hugo naquit en 1802 et mourut en 1885.
            </Text>
          </Box>
          <Text mt={10}>
            On l’utilise rarement à l’oral, presque uniquement avec le verbe
            être.
          </Text>
          <br />
          <Text textStyle="h6">Exemple</Text>
          <Box borderLeft="4px solid #227CE5" bg="#F9F9F9" p={5} mt={3}>
            <Text ml={2} fontSize="15px">
              Ce fut une bonne journée !
            </Text>
          </Box>
          <Text textStyle="h2" fontSize="25px" mt={5}>
            Conjugaison :
          </Text>
          <br />
          <Text textStyle="h2" fontSize="25px">
            La terminaison des verbes du premier groupe (-er) :
          </Text>
          <Table variant="simple" fontSize="18px" mt={10}>
            <Thead fontSize="20px">
              <Tr>
                <Th>
                  <Text fontSize="20px">Singulier</Text>
                </Th>
                <Th>
                  <Text fontSize="20px">Pluriel</Text>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  je____
                  <Text as="span" color="#FF0000">
                    ai
                  </Text>
                </Td>
                <Td>
                  nous____
                  <Text as="span" color="#FF0000">
                    âmes
                  </Text>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  tu____
                  <Text as="span" color="#FF0000">
                    as
                  </Text>
                </Td>
                <Td>
                  vous____
                  <Text as="span" color="#FF0000">
                    âtes
                  </Text>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  il ____
                  <Text as="span" color="#FF0000">
                    a
                  </Text>
                </Td>
                <Td>
                  ils ____
                  <Text as="span" color="#FF0000">
                    èrent
                  </Text>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <br />
          <br />
          <Text textStyle="h4">Exemple : </Text>
          <br />
          <Box borderLeft="4px solid #227CE5" bg="#F9F9F9" p={5}>
            <Text ml={2} fontSize="15px">
              passer : je pass
              <Text as="span" color="#FF0000">
                ai
              </Text>
              , tu pass
              <Text as="span" color="#FF0000">
                as
              </Text>
              , il pass
              <Text as="span" color="#FF0000">
                a
              </Text>
              , nous pass
              <Text as="span" color="#FF0000">
                âmes
              </Text>
              , vous pass
              <Text as="span" color="#FF0000">
                âtes
              </Text>
              , ils pass
              <Text as="span" color="#FF0000">
                èrent
              </Text>
              <br />
              <br />
              donner : je donn
              <Text as="span" color="#FF0000">
                ai
              </Text>
              , tu donn
              <Text as="span" color="#FF0000">
                as
              </Text>
              , il donn
              <Text as="span" color="#FF0000">
                a
              </Text>
              , nous donn
              <Text as="span" color="#FF0000">
                âmes
              </Text>
              , vous donn
              <Text as="span" color="#FF0000">
                âtes
              </Text>
              , ils donn
              <Text as="span" color="#FF0000">
                èrent
              </Text>
              <br />
              <br />
              aller : j’all
              <Text as="span" color="#FF0000">
                ai
              </Text>
              , tu all
              <Text as="span" color="#FF0000">
                as
              </Text>
              , il all
              <Text as="span" color="#FF0000">
                a
              </Text>
              , nous all
              <Text as="span" color="#FF0000">
                âmes
              </Text>
              , vous all
              <Text as="span" color="#FF0000">
                âtes
              </Text>
              , ils all
              <Text as="span" color="#FF0000">
                ères
              </Text>
            </Text>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
