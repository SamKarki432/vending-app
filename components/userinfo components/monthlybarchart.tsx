import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import {CategoryScale} from 'chart.js';
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Flex, Heading, Stack, useColorModeValue } from "@chakra-ui/react";

Chart.register(CategoryScale);

export default function BarChart(){
  const labels = ["January", "February", "March", "April", "May", "June","July","August","September","October","November","December"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Spending per Month",
        backgroundColor: [
            '#002B5B',
            '#2B4865',
            '#256D85',
            '#8FE3CF',
            '#F2CD5C',
            '#F2921D',
            '#A61F69',
            '#400E32',
            '#635985',
            '#443C68',
            '#393053',
            '#18122B'
        ],
        borderColor: "rgb(255, 99, 132)",
        data: [200, 100, 50, 100, 200, 300, 450,300,120,600,200,300],
      },
    ],
  };
  return (
    <Center py={6}>
        <Stack
          // borderWidth="1px"
          // borderRadius="lg"
          w={{ sm: '100%', md: '90%', lg:'70%' }}
          height={{ sm: '500px', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          //bg={useColorModeValue('white', 'gray.900')}
          borderRadius="lg"
          boxShadow={'2xl'}
          sx={{ borderRadius: "10%" }}
          padding={4}>
          <Flex flex={1} 
          justifyContent="center"
          >
                 <Bar data={data} 
                  options={{
                    plugins: {
                      title: {
                        display: true,
                        text: "Monthly transactions"
                      },
                      legend: {
                        display: false
                      }
                    }
                  }}/>
          </Flex>
        </Stack>
      </Center>
  );
};