import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react' 
const Tabledata = () => {
  return (
    <>
        
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      
    </>
  )
}

export default Tabledata