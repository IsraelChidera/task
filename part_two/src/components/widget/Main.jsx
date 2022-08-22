import React from 'react';
import Box from '../ui/Box';
import Text from '../ui/Text';
import Button from '../ui/Button';
import filtericon from '../assets/filtericon.svg';
import revenueicon from '../assets/revenueicon.svg';
import personicon from '../assets/personicon.svg';
import labelicon2 from '../assets/labelicon2.svg';
import food1 from '../assets/food1.png';
import chart from '../assets/chart.png';

const Main = () => {
  return (
    <Box className='px-8 pt-10'>
        <Box className='mb-14'>
            <Text className='text-2xl font-semibold text-black'>
                Dashboard
            </Text>

            <Text>
                Friday, 12 Aug, 2022
            </Text>
        </Box>

        <Box 
            className='grid maincontent'
            // style={{gridTemplateColumn:"3fr 2fr"}}    
        >
            <Box className='pb-10'>
                
                <Box className='grid grid-cols-3 space-x-6 mb-20'>
                    
                    <Box className='bg-primary rounded-md text-white'>
                        <Box className='p-4'>
                            <Box className='mb-4'>
                                <img 
                                    src={revenueicon}
                                    alt="person icon"
                                />
                            </Box>

                            <Text className='text-2xl first-line:text-white font-semibold'>
                                $10,234,50
                            </Text>

                            <Text className='text-sm text-white'>
                                Total Revenue
                            </Text>
                        </Box>
                    </Box>

                    <Box className='bg-blogtext rounded-md text-white'>
                        <Box className='p-4'>
                            <Box className='mb-4'>
                                <img 
                                    src={labelicon2}
                                    alt="label icon"
                                />
                            </Box>

                            <Text className='text-2xl text-white font-semibold'>
                                23,456
                            </Text>

                            <Text className='text-sm text-white'>
                                Total Dish Ordered
                            </Text>
                        </Box>
                    </Box>

                    <Box className='bg-darktext rounded-md text-white'>
                        <Box className='p-4'>
                            <Box className='mb-4'>
                                <img 
                                    src={personicon}
                                    alt="person icon"
                                />
                            </Box>

                            <Text className='text-2xl text-white font-semibold'>
                                1,234
                            </Text>

                            <Text className='text-sm text-white'>
                                Total Customers
                            </Text>
                        </Box>
                    </Box>
                </Box>

                <Box className='bg-menu border border-secondary rounded-md p-6'>
                    <Box className='flex justify-between items-center'>
                        <Text className='font-bold text-xl'>
                            Order Report
                        </Text>

                        <Box 
                            className='border border-primary rounded
                                flex justify-between items-center
                                text-white px-4 py-2 bg-primary
                                space-x-2'
                        >
                            <img 
                                src={filtericon}
                                alt="filter icon" 
                                className='text-white'   
                            />

                            <span>
                                Filter Order
                            </span>
                        </Box>
                    </Box>

                    <Box className='mt-6'>
                        <Box className='pt-4'>
                            <Box 
                                className='grid grid-cols-4
                                border-b border-b-darktext
                                pb-2'
                            >

                                <Text>
                                    Customer
                                </Text>

                                <Text>
                                    Menu Order
                                </Text>

                                <Text>
                                    Total Payment
                                </Text>

                                <Text>
                                    Status
                                </Text>
                                
                            </Box>
                        </Box>

                        <Box className='pt-6'>
                            <Box className='grid grid-cols-4'                               
                            >

                                <Text>
                                    Table 10
                                </Text>

                                <Text>
                                    Menu Order
                                </Text>

                                <Text>
                                    $125
                                </Text>

                                <Button>
                                    Completed
                                </Button>
                                
                            </Box>
                        </Box>

                        <Box className='pt-6'>
                            <Box className='grid grid-cols-4'                               
                            >

                                <Text>
                                    Table 6
                                </Text>

                                <Text>
                                    Menu Order
                                </Text>

                                <Text>
                                    $125
                                </Text>

                                <Button>
                                    Preparing
                                </Button>
                                
                            </Box>
                        </Box>

                        <Box className='pt-6'>
                            <Box className='grid grid-cols-4'                               
                            >

                                <Text>
                                    Table 19
                                </Text>

                                <Text>
                                    Menu Order
                                </Text>

                                <Text>
                                    $245
                                </Text>

                                <Button>
                                    Completed
                                </Button>
                                
                            </Box>
                        </Box>

                        <Box className='pt-6'>
                            <Box className='grid grid-cols-4'                               
                            >

                                <Text>
                                    Table 15
                                </Text>

                                <Text>
                                    Menu Order
                                </Text>

                                <Text>
                                    $85
                                </Text>

                                <Button className=''>
                                    Completed
                                </Button>
                                
                            </Box>
                        </Box>

                        <Box className='pt-6'>
                            <Box className='grid grid-cols-4'                               
                            >

                                <Text>
                                    Table 13
                                </Text>

                                <Text>
                                    Menu Order
                                </Text>

                                <Text>
                                    $105
                                </Text>

                                <Button>
                                    Pending
                                </Button>
                                
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Box>

            <Box>
                <Text 
                    className='py-4 pl-2 bg-menubg mb-4 
                    border border-b-primary rounded-md'
                >
                    Most Ordered
                </Text>

                <Box className='bg-menubg p-4 mb-8'>
                    <Box className='flex space-x-2'>
                        <img src={food1} alt="picture of food"/>

                        <Box className=''>
                            <Text className='text-sm font-semibold'>
                                Rice and Chicken
                            </Text>
                            <Text className='text-xs'>
                                200 dishes ordered
                            </Text>
                        </Box>
                    </Box>

                    <Box className='flex space-x-2 mt-2'>
                        <img src={food1} alt="picture of food"/>

                        <Box>
                            <Text className='text-sm font-semibold'>
                                Rice and Chicken
                            </Text>
                            <Text className='text-xs'>
                                200 dishes ordered
                            </Text>
                        </Box>
                    </Box>

                    <Box className='mt-6 mb-4'>
                        <Button className='w-full bg-secondary'>
                            View All
                        </Button>
                    </Box>
                </Box>

                <Box className='bg-dbcolor p-4'>
                    <img 
                        src={chart} 
                        alt="chart image"
                    />
                </Box>
            </Box>
        </Box>

    </Box>
  )
}

export default Main