import React from 'react';
import { Center, Square, Circle } from '@chakra-ui/react'
import Tabledata from './Table';
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
  import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
  } from '@chakra-ui/react'

  

const items = [
  { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
  { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
  { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0 },
  { id: 4, name: "Smartphone", category: "Electronics", price: 799.99 },
  { id: 5, name: "Headphones", category: "Accessories", price: 199.99 },
];

function Mainfile() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary nav2">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><h2>Broadcast Simulator</h2></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" ><h3>Status : Connected</h3></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<StatGroup position={"absolute"} top={"5rem"} left={"1rem"}>
  <Stat>
    <StatLabel><h4>Nifty</h4></StatLabel>
    <StatNumber>345,670</StatNumber>
    <StatHelpText>
      <StatArrow type='increase' />
      23.36%
    </StatHelpText>
  </Stat>

</StatGroup>

<StatGroup position={"absolute"} top={"5rem"} left={"15rem"} backdropBlur>
  <Stat>
    <StatLabel><h4 >Sensex</h4></StatLabel>
    <StatNumber>345,670</StatNumber>
    <StatHelpText>
      <StatArrow type='decrease' />
      23.36%
    </StatHelpText>
  </Stat>

</StatGroup>
<StatGroup position={"absolute"} top={"5rem"} left={"30rem"} backdropBlur>
  <Stat>
    <StatLabel><h4 >Sensex</h4></StatLabel>
    <StatNumber>345,670</StatNumber>
    <StatHelpText>
      <StatArrow type='decrease' />
      23.36%
    </StatHelpText>
  </Stat>

</StatGroup>
<StatGroup position={"absolute"} top={"5rem"} left={"45rem"} backdropBlur>
  <Stat>
    <StatLabel>To start stop broatdcast service click below</StatLabel>
   
      
      <button><h1>Start</h1></button>
    
    
     
  </Stat>

</StatGroup>
<StatGroup position={"absolute"} top={"5rem"} left={"30rem"} backdropBlur>
  <Stat>
    <StatLabel><h4 >Sensex</h4></StatLabel>
    <StatNumber>345,670</StatNumber>
    <StatHelpText>
      <StatArrow type='decrease' />
      23.36%
    </StatHelpText>
  </Stat>

</StatGroup>
    <div className='mw' >
        <TableContainer >
  <Table variant='simple' color={"white"}>
    
    <Thead color={"white"}>
      <Tr>
        <Th color={"white"}><h5>Symbol</h5></Th>
        <Th color={"white"}><h5> Open</h5></Th>
        <Th color={"white"}><h5>High</h5></Th>
        <Th color={"white"}><h5>Low</h5></Th>
        <Th color={"white"}><h5>LTP</h5></Th>
        <Th color={"white"}><h5>Volume</h5></Th>
        <Th isNumeric color={"white"}><h5>Value</h5></Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
      <Tabledata/></Tr>
      <Tr>
      <Tabledata/></Tr>
      <Tr>
      <Tabledata/></Tr>
    </Tbody>
    
  </Table>
</TableContainer>

    </div>
    <div className="btn2">
      
      <button><h1>Edit</h1></button>
    </div>
    </>
  );
}

export default Mainfile;
