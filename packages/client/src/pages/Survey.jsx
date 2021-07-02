import React from 'react'
import '../styles/register.css'
import { Box, Text, FormControl, FormLabel, Checkbox, Button, Image
, Grid } from "@chakra-ui/react"

export default function survey(){
    return(
        <div>
            <div className="ConteinerFondoEncuesta">
                <Image src='Celebration-rafiki 1.svg'/>
            </div>
            <div className="ConteinerForm">
                <Box justify-content="center">
                    <Text 
                    color="#304659"
                    fontFamily="Poppins" 
                    fontStyle="normal"
                    fontSize="40px"
                    textAlign="center"
                    justify-content ="center"
                    p="4">Encuesta</Text>
                    <form> 
                        <FormControl>
                            <FormLabel 
                            color="#304659"
                            fontFamily="Poppins" 
                            fontStyle="normal"
                            fontSize="32px"
                            p="4">¿Qué categorías te interesan?</FormLabel>
                            <Grid templateColumns="repeat(2,1fr)" templateRows= "repeat(4,1fr)" gap="4">
                            <Checkbox
                            p="6"
                            color="#304659"
                            fontFamily="Poppins" 
                            fontStyle="normal"
                            fontSize="30px">Tecnologia</Checkbox>
                            <Checkbox
                            p="6"
                            color="#304659"
                            fontFamily="Poppins" 
                            fontStyle="normal"
                            fontSize="30px">Moda y belleza</Checkbox>
                            <Checkbox
                            p="6"
                            color="#304659"
                            fontFamily="Poppins" 
                            fontStyle="normal"
                            fontSize="30px">Empleo</Checkbox>
                            <Checkbox
                            p="6"
                            color="#304659"
                            fontFamily="Poppins" 
                            fontStyle="normal"
                            fontSize="30px">Videojuegos</Checkbox>
                            <Checkbox 
                            p="6"
                            color="#304659"
                            fontFamily="Poppins" 
                            fontStyle="normal"
                            fontSize="30px">Emprendimiento</Checkbox>
                            <Checkbox
                            p="6"
                            color="#304659"
                            fontFamily="Poppins" 
                            fontStyle="normal"
                            fontSize="30px">Economía</Checkbox>
                            <Checkbox
                            p="6"
                            color="#304659"
                            fontFamily="Poppins" 
                            fontStyle="normal"
                            fontSize="30px">Salud</Checkbox>
                            <Checkbox
                            p="6"
                            color="#304659"
                            fontFamily="Poppins" 
                            fontStyle="normal"
                            fontSize="30px">Diseño</Checkbox>
                            </Grid>
                        </FormControl>
                        <Box pl="10" p="6"
                        justify-content="center">
                            <Button
                            width="300px"
                            textAlign="left" 
                            bg="#A179D9"
                            color="#FFFFFF"
                            fontFamily="Poppins" 
                            fontStyle="normal"
                            fontSize="20px"
                            borderRadius="7px">Guardar</Button>
                        </Box>
                    </form>
                </Box>
            </div>
        </div>
    )
}