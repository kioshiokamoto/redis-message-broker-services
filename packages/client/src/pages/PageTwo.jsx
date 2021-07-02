import React from 'react'
import '../styles/register.css'
import VIcon from '../components/VIcon/Logo'
import { Box, 
    Text, 
    FormControl, 
    FormLabel, 
    Input, 
    Button, 
    Image, 
    Link } from "@chakra-ui/react"

export default function PageTwo() {
    return (
        <div>
            <div className="ConteinerFondo">
                <Image src="Celebration-pana 1.svg"/>
            </div>
            <div className="ConteinerForm">
                <Box ml="50" width="400px">
                        <Box pt="10" mr="10">
                            <Link
                            color="#525252"
                            fontFamily="Poppins" 
                            fontStyle="normal"
                            fontSize="18px"
                            textAlign="center"
                            href = "/pageOne" 
                            >Iniciar Sesión</Link>
                        </Box>
                        <Box mt="20">
                            <VIcon ></VIcon>
                            <Text 
                            color="#9C94F2"
                            fontFamily="Poppins" 
                            fontStyle="normal"
                            fontSize="30px"
                            p="1">Registro</Text>
                            <form>
                                <FormControl>
                                    <FormLabel 
                                    color="#525252" 
                                    fontFamily="Poppins" 
                                    fontStyle="normal" 
                                    fontSize="18px"
                                    p="3">Nombre</FormLabel>
                                    <Input borderColor="Black"
                                    _hover={{
                                        color: "black",
                                    }} 
                                    type="text"/>
                                </FormControl>
                                <FormControl>
                                    <FormLabel 
                                    color="#525252" 
                                    fontFamily="Poppins" 
                                    fontStyle="normal" 
                                    fontSize="18px"
                                    p="3">Apellidos</FormLabel>
                                    <Input borderColor="Black"
                                    _hover={{
                                        color: "black",
                                    }} 
                                    type="text"/>
                                </FormControl>
                                <FormControl>
                                    <FormLabel 
                                    color="#525252" 
                                    fontFamily="Poppins" 
                                    fontStyle="normal" 
                                    fontSize="18px"
                                    p="3">Departamento</FormLabel>
                                    <Input borderColor="Black"
                                    _hover={{
                                        color: "black",
                                    }} 
                                    type="text"/>
                                </FormControl>
                                <FormControl>
                                    <FormLabel 
                                    color="#525252" 
                                    fontFamily="Poppins" 
                                    fontStyle="normal" 
                                    fontSize="18px"
                                    p="3">Provincia</FormLabel>
                                    <Input borderColor="Black"
                                    _hover={{
                                        color: "black",
                                    }} 
                                    type="text"/>
                                </FormControl>
                                <FormControl>
                                    <FormLabel 
                                    color="#525252" 
                                    fontFamily="Poppins" 
                                    fontStyle="normal" 
                                    fontSize="18px"
                                    p="3">Correo electrónico</FormLabel>
                                    <Input borderColor="Black"
                                    _hover={{
                                        color: "black",
                                    }} 
                                    type="email"/>
                                </FormControl>
                                <FormControl>
                                    <FormLabel 
                                    color="#525252" 
                                    fontFamily="Poppins" 
                                    fontStyle="normal" 
                                    fontSize="18px"
                                    p="3">Contraseña</FormLabel>
                                    <Input borderColor="Black"
                                    _hover={{
                                        color: "black",
                                    }} 
                                    type="password"/>
                                </FormControl>
                                <Box pt="10">
                                    <Button 
                                    width="100%"
                                    colorScheme="#5D467C"
                                    bg="#A179D9"
                                    color="#FFFFFF"
                                    fontFamily="Poppins" 
                                    fontStyle="normal"
                                    fontSize="20px"
                                    borderRadius="7px">Registrarse</Button>
                                </Box>
                            </form>
                        </Box>
                    </Box>
            </div>
            
        </div>
    )
}
