import React, { useContext, useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import { Box, Flex, Text, Button, Checkbox, Link } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from '../../theme/components/icons';
import axios, { AxiosResponse } from 'axios';
import { FeedBackInterface } from '../../Interfaces/FeedInterface';
import { myContext } from '../Context';

export default function CoursJs() {
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

  const checked = {
    level: true,
    progression: 1
  };

  const progression = () => {
    if (checked.level === true) {
      window.location.reload();
      axios
        .put(`http://localhost:4000/user/${ctx.id}`, checked)
        .then(async (res: AxiosResponse) => {
          if (res.data === 'success') {
          }
        });
    } else {
      console.log('');
    }
  };
  return (
    <Layout>
      <Box py={10}>
        <Box textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)">
          <Text textAlign="center" fontSize="50px" color="#505050">
            Cours
          </Text>
          <Box
            color="white"
            bg="#E52222"
            borderTopRadius="20px"
            border="1px solid black"
            mx={['0rem', '0rem', '0rem', '0rem', '6rem']}
            mt={10}
          >
            <Flex
              borderBottom="1px solid black"
              flexDirection={['column', 'column', 'column', 'row', 'row']}
            >
              <Text
                fontSize="30px"
                borderRight="1px solid black"
                textAlign={['center', 'inherit', 'inherit', 'inherit']}
                p={8}
                px={20}
                textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              >
                Français
              </Text>
              <Box
                fontSize="25px"
                ml={[0, 0, 0, 13]}
                borderRight="1px solid black"
                py={2}
                textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              >
                <Text textAlign="center">Progression : </Text>
                <Flex fontSize="20px" textAlign="center" p={3} px={20}>
                  <Text>{ctx.progression}/1 cour</Text>
                  <Text ml={5}>{ctx.progression}/1 chapitre</Text>
                </Flex>{' '}
              </Box>
              <Box
                fontSize="25px"
                ml={[0, 0, 0, 13]}
                borderRight="1px solid black"
                px={20}
                py={2}
                textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              >
                <Text textAlign="center">Niveau : </Text>
                <Flex
                  fontSize="20px"
                  textAlign="center"
                  p={3}
                  flexDirection={[
                    'column',
                    'column',
                    'column',
                    'column',
                    'row'
                  ]}
                >
                  <Text>3 ème</Text>
                </Flex>
              </Box>
              <Text
                fontSize="30px"
                p={8}
                px={20}
                textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                textAlign={['center', 'inherit', 'inherit', 'inherit']}
              >
                Forum
              </Text>
            </Flex>
            <Box bg="#FF7979">
              <Flex
                p={10}
                fontSize="25px"
                flexDirection={['column', 'column', 'column', 'column', 'row']}
              >
                <Link href="/passeSimple" flex="1" onClick={progression}>
                  <Text textAlign="center">Conjugaison au passé simple</Text>
                </Link>
                <Link href="/exercice">
                  <Button
                    bg="#FF4A4A"
                    _hover={{ background: '#FE2525' }}
                    borderRadius="40px"
                    boxShadow=" 0px 4px 4px rgba(0, 0, 0, 0.25)"
                    mx={['auto', '0', '0', '0']}
                    display={['block', 'inherit', 'inherit', 'inherit']}
                  >
                    Exercices
                  </Button>
                </Link>
                <Text ml={['0', '0', '0', '10rem']} textAlign="center">
                  Cours lu :
                </Text>
                <Checkbox
                  ml={10}
                  defaultIsChecked={ctx.level === true}
                  mx={['auto', '0', '0', '0']}
                  display={['block', 'inherit', 'inherit', 'inherit']}
                />
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
