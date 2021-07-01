import React from 'react'
import {
    NavLink
  } from "react-router-dom";
import { Text } from "@chakra-ui/react"
export default function Navbar() {
    return (
        <div>
            <ul>
            <li >
                 <NavLink exact to="/" > <Text fontSize="6xl" ml="2">Home</Text></NavLink>
            </li>
            <li >
                <NavLink exact to="/pageTwo"><Text fontSize="6xl" ml="2">Explorar</Text></NavLink>
            </li>
            </ul>
        </div>
    )
}
