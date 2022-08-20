import React from 'react';
import Box from '../ui/Box';
import Container from '../ui/Container';
import Text from '../ui/Text';
import Button from '../ui/Button';
import food2 from '../assets/food2.svg';
import food3 from '../assets/food3.svg';
import food4 from '../assets/food4.svg';
import food5 from '../assets/food5.svg';
import food6 from '../assets/food6.svg';
import food7 from '../assets/food7.svg';
import addcart from '../assets/addcart.svg';

const CurrentMenu = () => {
  return (
    <Box 
        className='md:bg-menubg bg-white pt-2 pb-12'     
    >
        
        <Container>
            <Text className='text-primary text-sm'>
                Menu
            </Text>

            <Box className='md:mt-4 mt-2 block md:flex justify-between items-center'>
                <Text className='font-semibold text-3xl'>
                    Content menu
                </Text>

                <Box className='mt-6 md:m-0'>
                    <ul 
                        className='flex justify-between items-center 
                        rounded-lg md:space-x-4 text-xs md:text-sm'
                        style={{border:'1px solid #ebebeb'}}
                    >
                        <li className='bg-primary text-white p-2 rounded-lg'>
                            <a>
                                All
                            </a>
                        </li>

                        <li className='hover:bg-primary hover:text-white p-2 rounded-lg'>
                            <a>
                                Rice
                            </a>
                        </li>

                        <li className='hover:bg-primary hover:text-white p-2 rounded-lg'>
                            <a>
                                Beans
                            </a>
                        </li>

                        <li className='hover:bg-primary hover:text-white p-2 rounded-lg'>
                            <a>
                                Fries
                            </a>
                        </li>

                        <li className='hover:bg-primary hover:text-white p-2 rounded-lg'>
                            <a>
                                Swallow
                            </a>
                        </li>

                        <li className='hover:bg-primary hover:text-white p-2 rounded-lg'>
                            <a>
                                Others
                            </a>
                        </li>
                    </ul>
                </Box>
            </Box>

            <Box 
                className='mt-16 grid grid-cols-2 gap-x-4 gap-y-10 
                md:grid-cols-3 md:gap-8'
            >
                
                <Box className='bg-white rounded-2xl menu'>
                    <Box>
                        <img src={food2} alt="food pics"/>
                    </Box>

                    <Box className='p-4'>
                        <Text 
                            className='font-semibold mb-2'
                            style={{color:"#4d4d4d"}}
                        >
                            Jollof Rice and Chicken
                        </Text>
                        <Text className='mb-2 text-sm'>
                            Fried potato/yam chips with egg sauce
                            or any topping of your choice
                        </Text>

                        <Box className='md:block flex justify-between items-center'>
                            <Text className='text-secondary text-lg'>
                                ₦ 1,500
                            </Text>

                            <Box className='md:hidden block'>
                                <img
                                    src={addcart}
                                    alt="add to cart icon"
                                    className='h-8'
                                />    
                            </Box>
                        </Box>
                        
                    </Box>
                </Box>

                <Box className='bg-white rounded-2xl menu'>
                    <Box>
                        <img src={food3} alt="food pics"/>
                    </Box>

                    <Box className='p-4'>
                        <Text 
                            className='font-semibold mb-2'
                            style={{color:"#4d4d4d"}}
                        >
                            Swallow with Draw Soup
                        </Text>
                        <Text className='mb-2 text-sm'>
                            Fried potato/yam chips with egg sauce
                            or any topping of your choice
                        </Text>

                        <Box className='md:block flex justify-between items-center'>
                            <Text className='text-secondary text-lg'>
                                ₦ 1,000
                            </Text>

                            <Box className='md:hidden block'>
                                <img
                                    src={addcart}
                                    alt="add to cart icon"
                                    className='h-8'
                                />    
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box className='bg-white rounded-2xl menu'>
                    <Box>
                        <img src={food4} alt="food pics"/>
                    </Box>

                    <Box className='p-4'>
                        <Text 
                            className='font-semibold mb-2'
                            style={{color:"#4d4d4d"}}
                        >
                            Fries with Egg Sauce
                        </Text>
                        <Text className='mb-2 text-sm'>
                            Fried potato/yam chips with egg sauce
                            or any topping of your choice
                        </Text>

                        <Box className='md:block flex justify-between items-center'>
                            <Text className='text-secondary text-lg'>
                                ₦ 1,500
                            </Text>

                            <Box className='md:hidden block'>
                                <img
                                    src={addcart}
                                    alt="add to cart icon"
                                    className='h-8'
                                />    
                            </Box>
                        </Box>
                        
                    </Box>
                </Box>

                <Box className='bg-white rounded-2xl menu'>
                    <Box>
                        <img src={food5} alt="food pics"/>
                    </Box>

                    <Box className='p-4'>
                        <Text 
                            className='font-semibold mb-2'
                            style={{color:"#4d4d4d"}}
                        >
                            Swallow with Egusi Soup
                        </Text>
                        <Text className='mb-2 text-sm'>
                            Fried potato/yam chips with egg sauce
                            or any topping of your choice
                        </Text>

                        <Box className='md:block flex justify-between items-center'>
                            <Text className='text-secondary text-lg'>
                                ₦ 1,000
                            </Text>

                            <Box className='md:hidden block'>
                                <img
                                    src={addcart}
                                    alt="add to cart icon"
                                    className='h-8'
                                />    
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box className='bg-white rounded-2xl menu'>
                    <Box>
                        <img src={food6} alt="food pics"/>
                    </Box>

                    <Box className='p-4'>
                        <Text 
                            className='font-semibold mb-2'
                            style={{color:"#4d4d4d"}}
                        >
                            Beans
                        </Text>
                        <Text className='mb-2 text-sm'>
                            Fried potato/yam chips with egg sauce
                            or any topping of your choice
                        </Text>

                        <Box className='md:block flex justify-between items-center'>
                            <Text className='text-secondary text-lg'>
                                ₦ 700
                            </Text>

                            <Box className='md:hidden block'>
                                <img
                                    src={addcart}
                                    alt="add to cart icon"
                                    className='h-8'
                                />    
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box className='bg-white rounded-2xl menu'>
                    <Box>
                        <img src={food7} alt="food pics"/>
                    </Box>

                    <Box className='p-4'>
                        <Text 
                            className='font-semibold mb-2'
                            style={{color:"#4d4d4d"}}
                        >
                            Fried Rice
                        </Text>
                        <Text className='mb-2 text-sm'>
                            Fried potato/yam chips with egg sauce
                            or any topping of your choice
                        </Text>

                        <Box className='md:block flex justify-between items-center'>
                            <Text className='text-secondary text-lg'>
                                ₦ 600
                            </Text>

                            <Box className='md:hidden block'>
                                <img
                                    src={addcart}
                                    alt="add to cart icon"
                                    className='h-8'
                                />    
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Box>

            <Box className='text-center mt-20'>            
                <button className='bg-primary px-4 py-1 rounded-3xl text-sm text-white'>
                    Full Menu
                </button>
            </Box>

        </Container>
        
    </Box>
  )
}

export default CurrentMenu