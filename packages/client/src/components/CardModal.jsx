import React from 'react'
import { Text,Flex, Box, Badge, useDisclosure,Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalFooter  } from "@chakra-ui/react"
import VIcon from './VIcon'
function CardModal({name, date, place, department, province, address, badge, cost}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box py="2">
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" onClick={onOpen} cursor="pointer" mx="8">
                <Box h="250" d="flex" alignItems="center" justifyContent="center" bgGradient="linear(to-t,purple.500, purple.300)" position="relative">
                    <Box position="absolute" w="100%" top="3" d="flex" justifyContent="space-between" px="3">
                        <Text bg="gray.200" p="1" borderRadius="4">s/.{cost}</Text>
                        {/* <Flex align="center" >
                            <VIcon name="pencil" pointer color="blue"className="mx"size={18}/>
                            <VIcon name="trash" pointer color="blue"className="mx" size={18}/>
                        </Flex> */}
                    </Box>
                    <Text fontSize="5xl" fontWeight="semibold" color="white">{name}</Text>
                </Box>
                <Box p="6">
                    <Box d="flex" alignItems="center" justifyContent="space-between">
                        <Box
                            color="gray.500"
                            fontWeight="semibold"
                            letterSpacing="wide"
                            fontSize="xs"
                            textTransform="uppercase"
                            ml="2"
                        >
                            <Text>Fecha: {date}</Text>
                            <Text>Lugar: {place}</Text>
                        </Box>
                        <Badge borderRadius="full" px="2" colorScheme="teal">
                            {badge}
                        </Badge>
                    </Box>
                </Box>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                <ModalCloseButton _focus={{boxShadow:'none'}}/>
                <ModalBody bgGradient="linear(to-t,purple.500, purple.300)">
                    <Box color="white">
                        <Text fontSize="4xl" align="center" py="5" fontWeight="semibold">{name}</Text>
                        <Box py="4">
                            <Text fontSize="md">Fecha: {date}</Text>
                            <Text fontSize="md">Departamento: {department}</Text>
                            <Text fontSize="md">Provincia: {province}</Text>
                            <Text fontSize="md">Direccion: {address}</Text>
                        </Box>
                    </Box>
                </ModalBody>
                <ModalFooter d="flex" alignItems="center" justifyContent="space-between">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                        {badge}
                    </Badge>
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        <Text fontSize="md">Costo: s/. {cost}</Text>
                    </Box>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default CardModal
