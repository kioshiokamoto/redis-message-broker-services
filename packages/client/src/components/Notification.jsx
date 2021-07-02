import React from 'react'
import { Text, Flex} from "@chakra-ui/react"
import VIcon from './VIcon'
export default function Notification({creator , event}) {
    return (

        <Flex color="gray" align="center" py="1">
            <VIcon name="avatar" color="blue" size={35}/>
            <Text px="4">{creator} acaba de publicar un evento <b>{event}</b></Text>
        </Flex>
       
    )
}
