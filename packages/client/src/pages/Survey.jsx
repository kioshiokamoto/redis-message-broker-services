import React, { useState } from 'react'
import '../styles/register.css'
import { Box, Text, FormControl, FormLabel, Checkbox, Button, Image
, Grid } from "@chakra-ui/react"

export default function Survey(){
    const [state, setState] = useState({
        tecnologia: false,
        moda: false,
        empleo:false,
        videojuegos:false,
        emprendimiento:false,
        economia:false,
        salud:false,
        diseño:false,
      });

    const handleToggle = ({ target }) =>{
        setState(s => ({ ...s, [target.name]: !s[target.name] }));
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state)
    }
    return(
        <div>
             <div className="wrapper-content" style={{height:'100vh', display: 'flex', alignItems: 'center'}}>
            <div className="ConteinerFondoEncuesta">
                <Image src='Celebration-rafiki 1.svg'/>
            </div>
            <div>
                <Box>
                    <Text 
                    color="#304659"
                    fontFamily="Poppins" 
                    fontStyle="normal"
                    fontSize="40px"
                    textAlign="center"
                    justify-content ="center"
                    p="4">Encuesta</Text>
                    <form onSubmit={handleSubmit}> 
                        <FormControl>
                            <FormLabel 
                            color="#304659"
                            fontFamily="Poppins" 
                            fontStyle="normal"
                            fontSize="32px"
                            p="4">¿Qué categorías te interesan?
                            </FormLabel>
                                <Grid templateColumns="repeat(2,1fr)" templateRows= "repeat(4,1fr)" gap="1">
                                    <Checkbox
                                    onChange={handleToggle}
                                    colorScheme="green"
                                    p="6"
                                    color="#304659"
                                    fontFamily="Poppins" 
                                    fontStyle="normal"
                                    fontSize="30px"
                                    name="tecnologia"
                                    value="tecnologia"
                                    checked={state['tecnologia']}
                                    >Tecnologia</Checkbox>
                                    <Checkbox
                                    onChange={handleToggle}
                                    colorScheme="green"
                                    p="6"
                                    color="#304659"
                                    fontFamily="Poppins" 
                                    fontStyle="normal"
                                    name="moda"
                                    value="moda"
                                    checked={state['moda']}
                                    fontSize="30px">Moda y belleza</Checkbox>
                                    <Checkbox
                                    onChange={handleToggle}
                                    colorScheme="green"
                                    p="6"
                                    color="#304659"
                                    fontFamily="Poppins" 
                                    fontStyle="normal"
                                    name="empleo"
                                    value="empleo"
                                    checked={state['empleo']}
                                    fontSize="30px">Empleo</Checkbox>
                                    <Checkbox
                                    onChange={handleToggle}
                                    colorScheme="green"
                                    p="6"
                                    color="#304659"
                                    fontFamily="Poppins" 
                                    fontStyle="normal"
                                    name="videojuegos"
                                    value="videojuegos"
                                    checked={state['videojuegos']}
                                    fontSize="30px">Videojuegos</Checkbox>
                                    <Checkbox
                                    onChange={handleToggle}
                                    colorScheme="green" 
                                    p="6"
                                    color="#304659"
                                    fontFamily="Poppins" 
                                    fontStyle="normal"
                                    name="emprendimiento"
                                    value="emprendimiento"
                                    checked={state['emprendimiento']}
                                    fontSize="30px">Emprendimiento</Checkbox>
                                    <Checkbox
                                    onChange={handleToggle}
                                    colorScheme="green"
                                    p="6"
                                    color="#304659"
                                    fontFamily="Poppins" 
                                    fontStyle="normal"
                                    name="economia"
                                    value="economia"
                                    checked={state['economia']}
                                    fontSize="30px">Economía</Checkbox>
                                    <Checkbox
                                    onChange={handleToggle}
                                    colorScheme="green"
                                    p="6"
                                    color="#304659"
                                    fontFamily="Poppins" 
                                    fontStyle="normal"
                                    name="salud"
                                    value="salud"
                                    checked={state['salud']}
                                    fontSize="30px">Salud</Checkbox>
                                    <Checkbox
                                    onChange={handleToggle} 
                                    colorScheme="green"
                                    p="6"
                                    color="#304659"
                                    fontFamily="Poppins" 
                                    fontStyle="normal"
                                    name="diseño"
                                    value="diseño"
                                    checked={state['diseño']}
                                    fontSize="30px">Diseño</Checkbox>
                                </Grid>
                        </FormControl>
                        <Box pt="10" p="6">
                            <Button
                            width="300px"
                            colorScheme="#5D467C"
                            textAlign="center"
                            float="center"
                            bg="#A179D9"
                            color="#FFFFFF"
                            fontFamily="Poppins" 
                            fontStyle="normal"
                            fontSize="20px"
                            type="submit"
                            borderRadius="7px">Guardar</Button>
                        </Box>
                    </form>
                </Box>
            </div>
            </div>
        </div>
    )
}