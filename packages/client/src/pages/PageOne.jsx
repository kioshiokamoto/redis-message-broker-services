import React from 'react'
import '../styles/register.css'
import VIcon from '../components/VIcon/Logo'
import { Box, Text, FormControl, FormLabel, Input, Button, Image, Link } from "@chakra-ui/react"
import { useForm } from '../hooks/useForm'

export default function PageOne() {
    const [values, handleInputChange] = useForm({ email:"", password:""})
    const { email, password} = values
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
    }
    return (
        <div>
                <div className="ConteinerFondo">
                    <Image src="Celebration-pana 1.svg"/>
                </div>
                <div className="ConteinerForm">
                    <Box ml="50" width="400px">
                            <Box p="20" ml="15">
                                <Link
                                color="#525252"
                                fontFamily="Poppins"
                                fontStyle="normal"
                                fontSize="18px"
                                p="10"
                                href="register">Registrarse</Link>
                            </Box>
                            <Box mt="30">
                                <VIcon ></VIcon>
                                <Text
                                color="#9C94F2"
                                fontFamily="Poppins"
                                fontStyle="normal"
                                fontSize="30px"
                                p="1">Inicio de sesión</Text>
                                <Text
                                color="#525252"
                                fontFamily="Poppins"
                                fontStyle="normal"
                                fontSize="20px"
                                p="1">¡Bienvenido otra vez a Eventimor!</Text>
                                <form onSubmit={handleSubmit}>
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
                                        type="email"
                                        onChange={handleInputChange}
                                        value={email}
                                        name="email"
                                        />
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
                                        type="password"
                                        onChange={handleInputChange}
                                        value={password}
                                        name="password"
                                        />
                                    </FormControl>
                                    <Box pt="10">
                                        <Button
                                        colorScheme="#5D467C"
                                        textAlign="left"
                                        w="400px"
                                        bg="#A179D9"
                                        color="#FFFFFF"
                                        fontFamily="Poppins"
                                        fontStyle="normal"
                                        fontSize="20px"
                                        borderRadius="7px"
                                        type="submit"
                                        >Iniciar Sesión</Button>
                                    </Box>
                                </form>
                            </Box>
                        </Box>
                </div>
        </div>
    )
}
