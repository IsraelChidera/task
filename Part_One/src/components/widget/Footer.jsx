import React from 'react';
import Box from '../ui/Box';
import Container from '../ui/Container';
import Text from '../ui/Text';
import Button from '../ui/Button';
import logo from '../assets/logonwhite.svg';
import facebookicon from '../assets/facebookicon.svg';
import instagramicon from '../assets/instagramicon.svg';
import twittericon from '../assets/twittericon.svg';

const Footer = () => {
  return (
    <Box className='bg-graybg pt-12 mt-24'>
        <Container>
            <Box className='block md:flex md:space-x-40'>
                <Box className='md:mb-0 mb-10'>
                    <img src={logo} alt="logo"/>
                </Box>

                <Box className='md:mt-0 mt-4 flex md:justify-between space-x-20'>
                    <ul className='space-y-2'>
                        <li 
                            className='font-bold text-footertext'                        
                        >
                            Company
                        </li>

                        <li className='text-secondary text-sm'>
                            <a href="#">
                                Blog
                            </a>
                        </li>

                        <li className='text-secondary text-sm'>
                            <a href="#">
                                About us
                            </a>
                        </li>

                        <li className='text-secondary text-sm'>
                            <a href="#">
                                Contact us
                            </a>
                        </li>
                    </ul>

                    <ul className='space-y-2'>
                        <li 
                            className='font-bold text-footertext'                        
                        >
                            Services
                        </li>

                        <li className='text-secondary text-sm'>
                            <a href="#">
                                FAQs
                            </a>
                        </li>

                        <li className='text-secondary text-sm'>
                            <a href="#">
                                Our Menu
                            </a>
                        </li>
                    </ul>
                </Box>
                
                
            </Box>

            <Box 
                className='mt-16 md:border-t md:border-footerbar 
                flex md:flex-row flex-col-reverse md:justify-between md:items-center pt-4'
            >
                <Text 
                    className='text-xs md:mt-0 mt-6 text-tertiary
                    border-t border-footerbar md:border-none
                    md:pt-0 pt-6'
                >
                    &copy; 2022 Meals. All rights reserved
                </Text>

                <Box className='md:my-0 my-4 flex md:justify-center md:items-center space-x-4'>
                    <Box>
                        <img src={facebookicon} alt="facebook icon"/>
                    </Box>

                    <Box>
                        <img src={instagramicon} alt="instagram icon"/>
                    </Box>

                    <Box>
                        <img src={twittericon} alt="twitter icon"/>
                    </Box>                
                </Box>            
            </Box>
        </Container>

        

    </Box>
  )
}

export default Footer