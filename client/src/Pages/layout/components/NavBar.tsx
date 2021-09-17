import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { myContext } from '../../Context';
import Axios, { AxiosResponse } from 'axios';
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  Image,
  MenuItem,
  IconButton,
  Text
} from '@chakra-ui/react';
import logo from '../../SchoolWin.png';

import { Hamburger } from '../../img/index';

const NavBar = () => {
  const ctx = useContext(myContext);

  const logout = () => {
    Axios.get('http://localhost:4000/logout', {
      withCredentials: true
    }).then((res: AxiosResponse) => {
      if (res.data === 'success') {
        window.location.href = '/';
      }
    });
  };
  return (
    <Box bg="#F7F7F7" boxShadow="-1px 2px 9px 5px rgba(0,0,0,0.21)" p={4}>
      <Flex>
        <Box flex={['0', '0', '0', '1']}>
          <Link to="/">
            <Image
              src={logo}
              w={['0px', '0px', '0px', '0px', '220px']}
              h={['0px', '0px', '0px', '0px', '100px']}
            />
          </Link>
        </Box>
        {ctx ? (
          <>
            <Flex mt={10} display={['none', 'none', 'none', 'flex']}>
              <Link to="/matiere">
                <Text ml={4}>Matière</Text>
              </Link>
              <Link to="/boutique">
                <Text ml={4}>Boutique</Text>
              </Link>
              <Link to="/profile">
                <Text ml={4}>Profile</Text>
              </Link>
              <Link to="/forum">
                <Text ml={4}>Forum</Text>
              </Link>
              <Link to="/contact">
                <Text ml={4}>Contact</Text>
              </Link>

              {ctx.isAdmin ? (
                  <Link to="/admin">
                    <Text ml={4}>
                      Admin
                    </Text>
                  </Link>
                ) : null}

              <Link onClick={logout} to="/logout">
                <Text ml={4} color="info">
                  Déconnexion
                </Text>
              </Link>
            </Flex>
            <Menu>
              <MenuButton
                display={['block', 'block', 'block', 'none']}
                as={IconButton}
                aria-label="Options"
                icon={<Hamburger />}
                variant="none"
              />

              <MenuList>
                <Link to="/matiere">
                  <MenuItem>Matière</MenuItem>
                </Link>
                <hr />
                <Link to="/boutique">
                  <MenuItem>Boutique</MenuItem>
                </Link>
                <hr />
                <Link to="/profile">
                  <MenuItem>Profile</MenuItem>
                </Link>
                <hr />
                <Link to="/forum">
                  <MenuItem>Forum</MenuItem>
                </Link>
                <hr />
                <Link to="/contact">
                  <MenuItem>Contact</MenuItem>
                </Link>
                <hr />
                <Link onClick={logout} to="/logout">
                  <MenuItem>Déconnexion</MenuItem>
                </Link>
                <hr />
                {ctx.isAdmin ? (
                  <Link to="/admin">
                    <MenuItem mt={3} mb={3}>
                      Admin
                    </MenuItem>
                  </Link>
                ) : null}
              </MenuList>
            </Menu>
          </>
        ) : (
          <>
            <Box alignSelf="center">
              {/* <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<Hamburger />}
                  variant="none"
                />
                <MenuList>
                  <Link to="/login">
                    <MenuItem icon={<User />}>Connexion</MenuItem>
                  </Link>
                  <hr />
                  <Link to="/register">
                    <MenuItem icon={<User />} mt={3}>
                      Inscription
                    </MenuItem>
                  </Link>
                </MenuList>
              </Menu> */}
              <Flex>
                <Link to="/login">
                  <Text ml={4} color="info">
                    Connexion
                  </Text>
                </Link>
                <Link to="/register">
                  <Text ml={4} color="info">
                    Inscription
                  </Text>
                </Link>
              </Flex>
            </Box>
          </>
        )}
      </Flex>
    </Box>
  );
};

export { NavBar };
