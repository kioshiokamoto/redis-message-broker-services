import React from 'react'
import {
    NavLink
  } from "react-router-dom";
import { Box,Text, Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    Flex,
    Button,
    PopoverCloseButton, } from "@chakra-ui/react"
import VIcon from './VIcon'
import '../styles/navbar.css'
import Notification from './Notification';
export default function Navbar() {
    return (
        <Box bg="secondary">
            <Flex className="wrapper-content" justify="space-between" align="center">
                {/* <VIcon name="logo"/>
                <ul className="list-items">
                    <li>
                        <NavLink exact to="/" activeClassName="activeLink"> Mis eventos</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/pageTwo" activeClassName="activeLink">Encuesta</NavLink>
                    </li>
                </ul>
                <Flex align="center">
                    <Popover placement="bottom-end">
                        <PopoverTrigger>
                            <Box px="4"  position="relative">
                                <VIcon name="ring" color="blue" size={20} pointer/>
                                <Box h="2" w="2" bg="red" borderRadius="50" position="absolute" top="0.5" left="4"></Box>
                            </Box>
                        </PopoverTrigger>
                        <PopoverContent w="150">
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader><Text color="gray">Mis notificaciones (0)</Text></PopoverHeader>
                            <PopoverBody >
                                <Box h="200" overflow="auto">
                                    <Notification creator="Luis" event="mi matrimonio"/>
                                    <Notification creator="Rosa" event="mi matrimonio"/>
                                    <Notification creator="Juan" event="mi matrimonio"/>
                                    <Notification creator="Roberto" event="mi matrimonio"/>
                                    <Notification creator="Luis" event="mi matrimonio"/>
                                    <Notification creator="Rosa" event="mi matrimonio"/>
                                    <Notification creator="Juan" event="mi matrimonio"/>
                                    <Notification creator="Roberto" event="mi matrimonio"/>
                                    <Notification creator="Luis" event="mi matrimonio"/>
                                    <Notification creator="Rosa" event="mi matrimonio"/>
                                    <Notification creator="Juan" event="mi matrimonio"/>
                                    <Notification creator="Roberto" event="mi matrimonio"/> */}
                                    {/* <Flex align="center" h="full" direction="column" justify="center" w={300}>
                                        <Text color="gray" px="5" align="center" py="1"><b>No hay notificaciones</b></Text>
                                        <Text color="gray" fontSize="sm" align="center">Busca nuestra seccion de eventos y descubre lo que tenemos para ti</Text>
                                    </Flex> */}
                                {/* </Box>    
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                    <Popover placement="bottom-end">
                        <PopoverTrigger>
                            <Box px="4">
                                <VIcon name="avatar" color="blue" size={25} pointer/>
                            </Box>
                        </PopoverTrigger>
                        <PopoverContent w="38">
                            <PopoverArrow />
                            <PopoverHeader><Text color="gray" fontSize="15">Cerrar sesión</Text></PopoverHeader>
                            <PopoverBody> <Button>Log out</Button> </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </Flex> */}
                <>
                    <Text color="blue" fontSize="lg" py="5" align="center" width="100%" fontWeight="semibold">Mi panel</Text>
                    <Popover placement="bottom-end">
                            <PopoverTrigger>
                                <Box px="4">
                                    <VIcon name="avatar" color="blue" size={25} pointer/>
                                </Box>
                            </PopoverTrigger>
                            <PopoverContent w="38">
                                <PopoverArrow />
                                <PopoverHeader><Text color="gray" fontSize="15">Cerrar sesión</Text></PopoverHeader>
                                <PopoverBody> <Button>Log out</Button> </PopoverBody>
                            </PopoverContent>
                        </Popover>
                </>
            </Flex>
        </Box>
    )
}
