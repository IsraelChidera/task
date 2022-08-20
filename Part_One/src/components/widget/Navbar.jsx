import React, {useState} from 'react';
import Box from '../ui/Box';
import Text from '../ui/Text';
import Button from '../ui/Button';
import logo from '../assets/logonwhite.svg';
import search from '../assets/searchicon.svg';
import cart from '../assets/carticon.svg';
import hamburger from '../assets/hamburger.svg';


import closeicon from '../assets/closeicon.svg';
import homeicon from '../assets/homeicon.svg';
import shopicon from '../assets/shopicon.svg';
import carticon from '../assets/carticon.svg';
import boardicon from '../assets/boardicon.svg';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [close, setClose] = useState(false);
    const openmobilemenu = () => {
        setOpen(true)        
    }

    const closemobilemenu = () => {
        setOpen(false) 
    }

  return (
    <nav>
        <Box 
            className={open? 'hidden': 'flex  justify-around items-center py-4'}
            // className='flex justify-around items-center py-4'
        >
            
                <Box>
                    <img 
                        src={logo} 
                        alt="logo"
                        className='h-9 cursor-pointer'    
                    />
                </Box>

                <Box className=' '>
                    <ul className='hidden md:flex justify-between items-center space-x-6 text-secondary text-sm'>
                        <li className='text-secondary hover:text-primary'>
                            <a href="#">
                                Home
                            </a>
                        </li>

                        <li className='text-secondary hover:text-primary'>
                            <a href="#">
                                Menu
                            </a>
                        </li>

                        <li className='text-secondary hover:text-primary'>
                            <a href="#">
                                Meal Plans
                            </a>
                        </li>
                    </ul>
                </Box>                            

                <Box className='flex justify-center items-center space-x-16'>
                    <Box className='flex justify-between items-center text-secondary text-sm space-x-6'>
                        <Box className='hidden md:block'>
                            <img 
                                src={search} 
                                alt="search icon"
                                className='cursor-pointer'
                                />
                        </Box>

                        <Box>
                            <img 
                                src={cart} 
                                alt="cart icon"
                                className='cursor-pointer'    
                            />
                        </Box>

                        <Box className='md:hidden block'>                            
                            <img 
                                src={hamburger} 
                                alt="hamburger icon"
                                className='cursor-pointer'
                                onClick={openmobilemenu}
                            />                                             
                        </Box>
                    </Box>

                    <Box 
                        className='hidden md:flex justify-between items-center space-x-6 text-sm'
                    >
                        <Text className='text-sm text-secondary'>
                            Sign In
                        </Text>

                        <Button className='px-8 py-2 '>
                            Create Account
                        </Button>
                    </Box>    
                </Box>
                
            

        </Box>   

        <Box
            className={open? 'mobileMenu  h-screen md:hidden block p-8':'hidden'} 
            // className="mobileMenu  h-screen md:hidden block p-8"
        >
            <Box className="flex justify-end">
                <img 
                    src={closeicon} 
                    alt="close icon"  
                    className='cursor-pointer' 
                    onClick={closemobilemenu}                 
                />
            </Box>

            <Box className='mt-10 flex justify-between items-center'>
                <Button className='text-sm'>
                    Create Account
                </Button>

                <button 
                    className='bg-white text-secondary border
                    border-primary text-sm px-4 py-1 rounded-3xl'
                >
                    Sign In
                </button>
            </Box>

            <ul className='mt-6'>
                <li className='space-x-6 flex text-left mt-6'>
                    <img 
                        src={homeicon} 
                        alt='home icon'
                        className='h-5 w-5'
                    />
                    <Text className='text-secondary text-sm cursor-pointer'>
                        Home
                    </Text>
                </li>

                <li className='space-x-6 flex text-left mt-6'>
                    <img 
                        src={shopicon} 
                        alt='shop icon'
                        className='h-5 w-5'
                    />
                    <Text className='text-secondary text-sm cursor-pointer'>
                        Menu
                    </Text>
                </li>

                <li className='space-x-6 flex text-left mt-6'>
                    <img 
                        src={carticon} 
                        alt='cart icon'
                        className='h-5 w-5'
                    />
                    <Text className='text-secondary text-sm cursor-pointer'>
                        My Tray
                    </Text>
                </li>

                <li className='space-x-6 flex text-left mt-6'>
                    <img 
                        src={boardicon} 
                        alt='board icon'
                        className='h-5 w-5'
                    />
                    <Text className='text-secondary text-sm cursor-pointer'>
                        Meal Plans
                    </Text>
                </li>
            </ul>
        </Box>
     
    </nav>
  )
}

export default Navbar