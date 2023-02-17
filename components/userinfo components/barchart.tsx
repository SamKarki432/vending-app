import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import {CategoryScale} from 'chart.js';
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Flex, Heading, Stack, useColorModeValue } from "@chakra-ui/react";

Chart.register(CategoryScale);

export default function BarChart(){
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [20, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  return (
    <div>
             <Center py={6}>
        <Stack
          // borderWidth="1px"
          // borderRadius="lg"
          w={{ sm: '100%', md: '100%', lg:'75%' }}
          height={{ sm: '500px', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          //bg={useColorModeValue('white', 'gray.900')}
          // boxShadow={'2xl'}
          borderRadius="lg"
          boxShadow={'2xl'}
          padding={4}>
          <Flex flex={1} 
          justifyContent="center"
          >
                 <Bar data={data} />
          </Flex>
        </Stack>
      </Center>
     
   
    </div>
  );
};