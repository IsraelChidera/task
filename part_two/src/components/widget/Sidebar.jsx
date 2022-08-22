import React from 'react';
import Box from '../ui/Box';
import Button from '../ui/Button';
import Container from '../ui/Container';
import Text from '../ui/Text';
import logo from '../assets/logonwhite.svg';
import homeicon from '../assets/homeicon.svg';
import settingsicon from '../assets/settingsicon.svg';
import labelicon from '../assets/labelicon.svg';
import producticon from '../assets/producticon.svg';
import logouticon from '../assets/logouticon.svg';
import reporticon from '../assets/reporticon.svg';
import {Link} from 'react-router-dom';

const Sidebar = () => {
  return (
    <Box 
        className='bg-menubg text-black 
        flex flex-col justify-between h-screen'
    >

        <Box className='px-4 flex flex-col space-y-10 pt-6'>
            <Box className='flex justify-start'>
                <img 
                    src={logo} 
                    alt="logo"
                    className='h-8 cursor-pointer'    
                />   
            </Box>

            <ul className='flex flex-col space-y-8'>
                <li>
                    <a 
                        className="flex justify-start space-x-2" 
                        href="#"
                    >
                        <img
                            src={homeicon}
                            alt="home icon"
                        />

                        <Text>
                            Dashboard
                        </Text>
                    </a>
                </li>

                <li>
                    <a 
                        className="flex justify-start space-x-2" 
                        href="#"
                    >
                        <img
                            src={reporticon}
                            alt="report icon"
                        />

                        <Text>
                            Report
                        </Text>
                    </a>
                </li>

                <li>
                    <Link to="/admin">
                        <Box 
                            className="flex justify-start space-x-2"                            
                        >
                            <img
                                src={producticon}
                                alt="product icon"
                            />

                            <Text>
                                Product
                            </Text>
                        </Box>
                    </Link>                    
                </li>

                <li>
                    <a 
                        className="flex justify-start space-x-2" 
                        href="#"
                    >
                        <img
                            src={labelicon}
                            alt="label icon"
                        />

                        <Text>
                            Label
                        </Text>
                    </a>
                </li>
            </ul>
        </Box>

        <Box className='px-4 pb-4'>
            <ul className='flex flex-col space-y-8'>
                <li>
                    <a 
                        className="flex justify-start space-x-2" 
                        href="#"
                    >
                        <img
                            src={settingsicon}
                            alt="settings icon"
                        />

                        <Text>
                            Settings
                        </Text>
                    </a>
                </li>

                <li>
                    <a 
                        className="flex justify-start space-x-2" 
                        href="#"
                    >
                        <img
                            src={logouticon}
                            alt="logout icon"
                        />

                        <Text>
                            Logout
                        </Text>
                    </a>
                </li>                
            </ul>
        </Box>

    </Box>
  )
}

export default Sidebar