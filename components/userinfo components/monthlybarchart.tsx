import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import {CategoryScale} from 'chart.js';
import { CSSProperties } from 'react';
import {  Center, Flex,  Stack, useColorModeValue } from "@chakra-ui/react";

Chart.register(CategoryScale);

const styles: { [key: string]: CSSProperties } = {
    container: {
      height: '40vh',
      width: '40vw',
      position: 'relative' as const,
    },
    containerMedia: {
      height: 'auto',
      width: 'auto',
      position: 'static' as const,
    },
  };

export default function BarChart({userdatadb}:any){
  const labels = ["January", "February", "March", "April", "May", "June","July","August","September","October","November","December"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Amount spent",
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
        // borderColor: "rgb(255, 99, 132)",
        data: [200, 100, 200, parseInt(userdatadb?.total_price),0, 0, 0,0,0,0,0,0],
      },
    ],
  };
  return (
    <Center py={6}>
          <Stack
            w={{ base: '90%', sm: '80%', md: '90%', lg: '70%' }}
            height={{ base: '400px', sm: '300px', md: '20rem' }}
            direction={{ base: 'column', md: 'row' }}
            borderRadius="lg"
            boxShadow="rgb(26 32 44 / 24%) 0px 16px 32px 0px, rgb(26 32 44 / 12%) 0px 8px 16px 0px"
            sx={{ borderRadius: "10%" }}
            padding={4}
            bg={useColorModeValue('white', 'gray.900')}
          >
            <Flex flex={1} justifyContent="center">
            <Bar
                  data={data}
                  options={{
                    plugins: {
                      title: {
                        display: true,
                        text: "Monthly transactions",
                        font: {
                          size: 30 
                        }
                      },
                      legend: {
                        display: false,
                      },
                    },
                    maintainAspectRatio: false, // Set this to false
                   
                  }}
                />

            </Flex>
          </Stack>
    </Center>

  );
};