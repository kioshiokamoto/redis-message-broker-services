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
                 <NavLink exact to="/" > <Text fontSize="6xl" ml="2">Link 1</Text></NavLink>
            </li>
            <li >
                <NavLink exact to="/pageTwo"><Text fontSize="6xl" ml="2">Link 2</Text></NavLink>
            </li>
            </ul>
        </div>
    )
}
