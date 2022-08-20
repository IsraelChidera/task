import React from 'react';
import Box from '../ui/Box';
import Text from '../ui/Text';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Avatar from '../assets/Avatar.svg';
import quoteicon from '../assets/quoteicon.svg';

const Testimonial = () => {
  return (
    <Box className="testimonialBG py-16 flex justify-center items-center ">
        <Box className='md:w-2/3 w-full p-10 md:p-0'>
            <Box className='block md:flex justify-between items-center'>
                <Box>
                    <Text 
                        style={{color: '#363A40'}}
                        className='text-3xl font-semibold'
                    >
                        What our customers say about us
                    </Text>

                    <Text 
                        style={{color:'#67758D'}}
                        className='text-sm mt-4 text-darktext'
                    >
                        At vero eos et accusamus et iusto 
                        odio dignissimos ducimus qui 
                        blanditiis praesentium voluptatum.
                    </Text>
                </Box>

                <Box className='md:mt-0 mt-6 md:ml-6 bg-white testimonial px-4 py-10 relative'>
                    <Box className='absolute top-6 right-6'>
                        <img src={quoteicon} alt="quotes icon"/>
                    </Box>

                    <Box className='block md:flex justify-between items-center space-x-4'>
                        <Box className='testimonialflex text-center block md:flex justify-center items-center'>
                            
                            <Box className='flex md:block md:mb-0 mb-4'>
                                <Box className='flex justify-center items-center'>
                                    <img 
                                        src={Avatar} 
                                        className="text-center w-12 
                                        h-12 md:w-auto md:h-auto" 
                                        alt="testimonial image"
                                    />      
                                </Box>                          

                                <Box className='ml-4 md:ml-0'>
                                    <Text className='mt-2 font-semibold text-lg text-tertiary'>
                                        John Samson
                                    </Text>

                                    <Text className='mt-4 text-darktext'>
                                        ENUGU, NIGERIA
                                    </Text>
                                </Box>
                            </Box>
                        </Box>

                        <Box className='testimonialflex2'>
                            <Text className=''>
                                White dwarf a still more glorious 
                                dawn awaits tingling of the spine 
                                emerged into consciousness Vangelis 
                                shores of the cosmic ocean. Tendrils 
                                of gossamer clouds kindling the energy 
                                hidden in matter concept of the number 
                                one permanence.
                            </Text>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Testimonial