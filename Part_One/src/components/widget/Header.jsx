import React from 'react';
import Box from '../ui/Box';
import Text from '../ui/Text';
import Button from '../ui/Button';
import Container from '../ui/Container';
import food from '../assets/food.svg';
import chaticon from '../assets/disqus.svg';
import shadow1 from '../assets/shadow1.svg';
import shadow2 from '../assets/shadow2.svg';
import searchicon from '../assets/searchicon.svg';
import mobilefood from '../assets/mobilefood.svg';

const Header = () => {
  return (
    <header className='relative pb-10'>

        <Box className='md:hidden block'>
            <Box className='bg-primary text-white relative'>
                <Box>
                    <Box className='absolute'>
                        <img 
                            src={shadow2} 
                            alt="shadow vector"
                            className='top-16 left-0'    
                        />
                    </Box>

                    <Box className='w-10/12 px-8 flex justify-center'>
                        <Box>
                            <Text className='text-4xl font-bold pt-16'>
                                Delicious meals at your convenience
                            </Text>

                            <Text className='text-lg mt-4 opacity-70'>
                                Order your meals from us and 
                                we will have it delivered 
                                at your doorstep.
                            </Text>

                            <Box className='mt-8'>
                                <form>
                                    <label className='block mb-1'>
                                        Instant Order
                                    </label>

                                    <Box className='relative'>
                                        <img 
                                            src={searchicon}
                                            alt="search icon"
                                            className='absolute h-5 w-5 top-4 left-0'
                                        />    
                                        <input 
                                            type='text' 
                                            placeholder='Search for meal'
                                            className='w-full mobileInput bg-tertiary'
                                        />
                                    </Box>
                                </form>
                                
                            </Box>
                        </Box>
                    </Box>

                    <Box className='w-full mt-6 text-center flex justify-center items-center'>
                        <img 
                            src={mobilefood}
                            alt="picture of a plate of rice" 
                            className='text-center'   
                        />
                    </Box>

                    <Box className='absolute right-0 top-80'>
                        <img src={shadow1} alt="shadow vector"/>
                    </Box>
                </Box>
            </Box>
        </Box>

        
        <Container>
            <Box className='hidden md:flex justify-between items-center'>
                <Box className='flex flex-col'>
                    <Text 
                        className='text-6xl font-semibold w-3/4'
                        style={{color:'#1a1a1a'}}      
                    >
                        Delicious meals at your
                        convenience
                    </Text>
                    
                    <Text 
                        className='w-1/2 mt-4 opacity-70'
                        style={{color:'#13254A'}}    
                    >
                        Order your meals from us 
                        and we will have it 
                        delivered at your doorstep
                    </Text>

                    <Box className='mt-4 w-2/5'>
                        <Button className='text-sm px-20 py-2 text-center'>
                            Get Started
                        </Button>
                    </Box>
                                
                </Box>

                <Box>
                    <img 
                        src={food} 
                        alt="header food"
                    />
                </Box>
            </Box>       
        </Container>  

        <Box className='absolute bottom-0 right-0 pt-10'>
            <img 
                src={chaticon} 
                alt="chat icon" 
                className='md:h-40 h-24'
            />
        </Box>   
    </header>
  )
}

export default Header