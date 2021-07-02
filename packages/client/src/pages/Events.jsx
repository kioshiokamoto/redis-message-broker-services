import React from 'react'
import { Text,Box, Grid, Flex, Button, useDisclosure,Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalFooter, ModalHeader, FormControl,FormLabel, Input,Select} from "@chakra-ui/react"
import CardModal from '../components/CardModal'
export default function Events() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <div className="wrapper-content">
                {/* <Text fontSize="4xl" py="5" align="center" fontWeight="semibold">Encuentra tu evento</Text>
                <Text fontSize="md">Publicaciones para ti</Text> */}
                <Text fontSize="4xl" py="5" align="center" fontWeight="semibold">Publicar evento</Text>
                <Flex justify="center"><Button variant="primary"w="60" onClick={onOpen}>Nuevo</Button></Flex>
                <Grid templateColumns="repeat(3,1fr)" py="3">
                    <CardModal name="CONTACTEC" date="12/10/12" place="Lima" department="Lima" province="Huaral" address="Jiron de la union" badge="TECNOLOGIA" cost="200"/>
                    <CardModal name="ENEISOFT" date="10/10/12" place="Arequipa" department="Misti" province="Huacambamba" address="Jiron de la union" badge="GASTRONOMIA" cost="300" />
                    <CardModal name="CONTACTEC" date="12/10/12" place="Lima" department="Lima" province="Huaral" address="Jiron de la union" badge="TECNOLOGIA" cost="200"/>
                    <CardModal name="ENEISOFT" date="10/10/12" place="Arequipa" department="Misti" province="Huacambamba" address="Jiron de la union" badge="GASTRONOMIA" cost="300" />
                    <CardModal name="CONTACTEC" date="12/10/12" place="Lima" department="Lima" province="Huaral" address="Jiron de la union" badge="TECNOLOGIA" cost="200"/>
                    <CardModal name="ENEISOFT" date="10/10/12" place="Arequipa" department="Misti" province="Huacambamba" address="Jiron de la union" badge="GASTRONOMIA" cost="300" />
                    <CardModal name="CONTACTEC" date="12/10/12" place="Lima" department="Lima" province="Huaral" address="Jiron de la union" badge="TECNOLOGIA" cost="200"/>
                    <CardModal name="ENEISOFT" date="10/10/12" place="Arequipa" department="Misti" province="Huacambamba" address="Jiron de la union" badge="GASTRONOMIA" cost="300" />
                </Grid>
                <Modal isOpen={isOpen} onClose={onClose} isCentered size="2xl">
                <ModalOverlay />
                <ModalContent>
                <ModalCloseButton _focus={{boxShadow:'none'}}/>
                <ModalHeader><Text align="center" fontSize="2xl">Nuevo evento</Text></ModalHeader>
                <ModalBody>
                    <form>
                        <FormControl  p="4">
                            <FormLabel>Nombre del evento</FormLabel>
                            <Input type="text" placeholder="Escribe el nombre aquí"/>
                        </FormControl>  
                        <Grid templateColumns="repeat(2,1fr)">
                            <FormControl  p="4">
                                <FormLabel>Elige unua categoría</FormLabel>
                                <Select
                                placeholder="Seleccionar categoría"
                                variant="outline"
                                name="state"
                                >
                                    <option value="badstate" style={{color:'var(--black)'}}>Mal estado</option>
                                    <option value="goodstate" style={{color:'var(--black)'}}>Buen estado</option>
                                </Select>
                            </FormControl>
                            <FormControl  p="4">
                                <FormLabel>Fecha</FormLabel>
                                <Input type="date" placeholder="Seleccionar fecha" name="date"/>
                            </FormControl>
                            <FormControl  p="4">
                                <FormLabel>Departamento</FormLabel>
                                <Input type="text" placeholder="Escribe el departamento aquí"/>
                            </FormControl>
                            <FormControl  p="4">
                                <FormLabel>Provincia</FormLabel>
                                <Input type="text" placeholder="Escribe el provincia aquí"/>
                            </FormControl>
                        </Grid>
                        <FormControl  p="4">
                            <FormLabel>Provincia</FormLabel>
                            <Input type="text" placeholder="Escribe el direccion aquí"/>
                        </FormControl>  
                        <FormControl  p="4">
                            <FormLabel>Costo</FormLabel>
                            <Input type="numeral" placeholder="s/. 200"/>
                        </FormControl>  
                    </form>
                </ModalBody>
                <ModalFooter d="flex" alignItems="center" justifyContent="center">
                    <Button variant="primary">Aceptar</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>   
            </div>
            
        </>
    )
}
