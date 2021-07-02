import { Text,Box, Grid, Flex, Button, useDisclosure,Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalFooter, ModalHeader, FormControl,FormLabel, Input,Select} from "@chakra-ui/react"
import CardModal from '../components/CardModal'
    const [values, handleInputChange, reset]=useForm({name:"", category:"",date:"", department:"", province:"", cost:"" })
    const {name, category, date, department, province, cost}=values
    const handleNewPublishSubmit = (e) => {
        e.preventDefault()
        console.log(values)
        onClose()
    }

    useEffect(() => {
        reset()
    }, [isOpen])
    return (
        <>
            <div className="wrapper-content">
                {
                    (role!=="admin") ? (
                        <>
                            <Text fontSize="4xl" py="5" align="center" fontWeight="semibold">Encuentra tu evento</Text>
                            <Text fontSize="md">Publicaciones para ti</Text>
                        </>
                    ) : (
                        <>
                            <Text fontSize="4xl" py="5" align="center" fontWeight="semibold">Publicar evento</Text>
                            <Flex justify="center"><Button variant="primary"w="60" onClick={onOpen}>Nuevo</Button></Flex>
                        </>
                    )
                }                
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
                    <form onSubmit={handleNewPublishSubmit}>
                        <FormControl  p="4">
                            <FormLabel>Nombre del evento</FormLabel>
                            <Input type="text" placeholder="Escribe el nombre aquí" name="name" value={name} onChange={handleInputChange}/>
                        </FormControl>  
                        <Grid templateColumns="repeat(2,1fr)">
                            <FormControl  p="4">
                                <FormLabel>Elige unua categoría</FormLabel>
                                <Select
                                placeholder="Seleccionar categoría"
                                variant="outline"
                                name="category" 
                                value={category}
                                onChange={handleInputChange}
                                >
                                    <option value="category1" style={{color:'var(--black)'}}>Categoria 1</option>
                                    <option value="category2" style={{color:'var(--black)'}}>Categoria 2</option>
                                </Select>
                            </FormControl>
                            <FormControl  p="4">
                                <FormLabel>Fecha</FormLabel>
                                <Input type="date" placeholder="Seleccionar fecha" name="date" value={date} onChange={handleInputChange} />
                            </FormControl>
                            <FormControl  p="4">
                                <FormLabel>Departamento</FormLabel>
                                <Input type="text" placeholder="Escribe el departamento aquí" name="department" value={department} onChange={handleInputChange}/>
                            </FormControl>
                            <FormControl  p="4">
                                <FormLabel>Provincia</FormLabel>
                                <Input type="text" placeholder="Escribe el provincia aquí" name="province" value={province} onChange={handleInputChange}/>
                            </FormControl>
                        </Grid> 
                        <FormControl  p="4">
                            <FormLabel>Costo</FormLabel>
                            <Input type="numeral" placeholder="s/. 200" name="cost" value={cost} onChange={handleInputChange}/>
                        </FormControl>  
                        <Box d="flex" justifyContent="center"><Button variant="primary" type="submit" size="lg">Aceptar</Button></Box>
                    </form>
                </ModalBody>

                </ModalContent>
            </Modal>   
            </div>
            
        </>
    )
}
