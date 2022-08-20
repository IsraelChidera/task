import React from 'react';
import Box from '../ui/Box';
import Container from '../ui/Container';
import Text from '../ui/Text';
import Button from '../ui/Button';
import blog1 from '../assets/blog1.svg';
import blog2 from '../assets/blog2.svg';
import blog3 from '../assets/blog3.svg';
const Blog = () => {
  return (
    <Box className='bg-white'>
        <Container>
            <Box className='md:w-1/2 w-full md:px-0 px-6 mx-auto py-8 text-center'>
                <Text className='font-semibold text-3xl'>
                    Blog Our Latest News
                </Text>

                <Text className='pt-6 text-secondary'>
                    Have you ever browsed food blogs 
                    like mine and wondered how to 
                    start a food blog of your very own? 
                </Text>
            </Box>

            <Box>

                <Box className='grid md:grid-cols-3 md:gap-6 grid-cols-1 gap-y-6'>
                    <Box className='blogGrid md:mx-0 mx-6 pb-4'>
                        <Box className='flex justify-center items-center text-center'>
                            <img src={blog1} alt="food blog image"/>
                        </Box>

                        <Box className='p-4'>
                            <Box className='flex items-center space-x-4 text-xs'>
                                <Text className='text-primary'>
                                    Design
                                </Text>
                                <Text className='text-blogtext'>
                                    01 October 2019
                                </Text>
                            </Box>

                            <Text className='text-tertiary font-bold mt-4'>
                                Better Than Takeout Kung Pao Chicken
                            </Text>

                            <Text className='text-secondary mt-2 text-sm'>
                                This spicy, tangy, and sweet better 
                                than takeout no peanut kung pao 
                                chicken stir fry recipe
                            </Text>

                            <Box className='mt-6'>
                                <a href="#" className='text-primary font-bold text-sm no-underline'>
                                    READ MORE
                                </a>
                            </Box>
                        </Box>
                    </Box>

                    <Box className='blogGrid2 md:mx-0 mx-6 pb-4'>
                        <Box className='flex justify-center items-center text-center'>
                            <img src={blog2} alt="food blog image"/>
                        </Box>

                        <Box className='p-4'>
                            <Box className='flex items-center space-x-4 text-xs'>
                                <Text className='text-primary'>
                                    Design
                                </Text>
                                <Text className='text-blogtext'>
                                    01 October 2019
                                </Text>
                            </Box>

                            <Text className='text-tertiary font-bold mt-4'>
                                The Best Sesame Soy Broccoli Salad
                            </Text>

                            <Text className='text-secondary mt-2 text-sm'>
                                Hello broccoli salad! Broccoli salad
                                with a sweet and tangy dressing 
                                is my new go to for summer parties. 
                            </Text>

                            <Box className='mt-6'>
                                <a href="#" className='text-primary font-bold text-sm no-underline'>
                                    READ MORE
                                </a>
                            </Box>
                        </Box>
                    </Box>

                    <Box className='blogGrid md:mx-0 mx-6 pb-4'>
                        <Box className='flex justify-center items-center text-center'>
                            <img src={blog3} alt="food blog image"/>
                        </Box>

                        <Box className='p-4'>
                            <Box className='flex items-center space-x-4 text-xs'>
                                <Text className='text-primary'>
                                    Design
                                </Text>
                                <Text className='text-blogtext'>
                                    01 October 2019
                                </Text>
                            </Box>

                            <Text className='text-tertiary font-bold mt-4'>
                                Better Than Takeout Kung Pao Chicken
                            </Text>

                            <Text className='text-secondary mt-2 text-sm'>
                                This super easy version of dan 
                                dan noodles is fast, flavorful, 
                                and vegetarian to boot. It is 
                                definitely 
                            </Text>

                            <Box className='mt-6'>
                                <a href="#" className='text-primary font-bold text-sm no-underline'>
                                    READ MORE
                                </a>
                            </Box>
                        </Box>
                    </Box>

                </Box>

            </Box>
        </Container>
    </Box>
  )
}

export default Blog