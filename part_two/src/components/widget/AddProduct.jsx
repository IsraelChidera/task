import React, {useEffect, useState} from 'react';
import Box from '../ui/Box';
import Text from '../ui/Text';
import Button from '../ui/Button';

const getDatafromLS = () => {
    const data = localStorage.getItem('dishes');
    if(data){
        return JSON.parse(data);
    }
    else{
        return []
    }
}

const AddProduct = () => {
    const [dishes, setDishes] = useState(getDatafromLS())

    const [food, setFood] = useState('');
    const [price, setPrice] = useState('');
    
    const handleSubmit = (e) =>{
        e.preventDefault();

        let dish = {
            food,
            price
        }
        setDishes([...dishes, dish]);
        setFood('');
        setPrice('');
    }

    const handleDelete = (price) => {
        const filteredDishes = dishes.filter((element, index)=>{
            return element.price !== price
        })

        setDishes(filteredDishes);
    }

    useEffect(()=>{
        localStorage.setItem('dishes', JSON.stringify(dishes));
    }, [dishes])

    const handleInputChange = (e) => {
       
    }

    

    


  return (
    <Box className='mx-4 pt-10 relative'>
        <Text className='text-xl font-bold'>
            Product Description
        </Text>

        <Box className='bg-menubg p-8 mt-8'>
            <form 
                className='space-y-6 my-6'
                onSubmit={handleSubmit}
            >
                <Box>
                    <label className='block pb-1'>
                        Name of dish
                    </label>
                    <input 
                        // value={name}
                        // onChange={(e)=>setName(e.target.value)}
                        // value={values.food}
                        name="food"                        
                        onChange={(e)=>setFood(e.target.value)}
                        type="text"
                        placeholder='Swallow with egusi soup'
                        className='py-1 pl-2 w-full border rounded-md'
                    />
                </Box>

                <Box>
                    <label className='block pb-1'>
                        Price of dish
                    </label>
                    <input 
                        // value={values.price}
                        name="price"
                        onChange={(e)=>setPrice(e.target.value)}
                        type="text"
                        placeholder='$40'
                        className='py-1 pl-2 w-full border rounded-md'
                    />
                </Box>

                <Box>
                    <button type="submit"> Add dish </button>
                </Box>
                
            </form>

            <Text className='mb-2 mt-8 text-2xl font-bold'>
                Menu
            </Text>

           <Box className=''>
                {
                    dishes.length>0 && <>
                        <Box className='bg-white rounded-2xl menu'>                    

                            {/* <Box className='p-4'>
                                <Text 
                                    className='font-semibold mb-2'
                                    style={{color:"#4d4d4d"}}
                                >
                                    {todo.text}
                                </Text>
                                <Text className='mb-2 text-sm'>
                                    Fried potato/yam chips with egg sauce
                                    or any topping of your choice
                                </Text>

                                <Box className='md:block flex justify-between items-center'>
                                    <Text className='text-secondary text-lg'>
                                        ₦ 1,000
                                    </Text>                            
                                </Box>
                            </Box> */}

                            <Box className='grid grid-cols-4 gap-4'>
                                {
                                    dishes.map(dish=>(
                                        <Box key={dish.price}>
                                            <Box className='p-4'>
                                                <Text 
                                                    className='font-semibold mb-2 text-2xl'
                                                    style={{color:"#4d4d4d"}}
                                                >
                                                    {dish.food}
                                                </Text>

                                                <Text className=' pt-6 mb-2 text-sm'>
                                                    Price:
                                                </Text>

                                                <Box className=' md:block flex justify-between items-center'>
                                                    <Text className='text-secondary text-lg'>
                                                        {dish.price}
                                                    </Text>                            
                                                </Box>

                                                <Button 
                                                    className='cursor-pointer mt-6 rounded-b-2xl text-center
                                                    p-4 bg-primary text-white'
                                                    onClick={()=>handleDelete(dish.price)} 
                                                >
                                                    Delete dish
                                                </Button>
                                            </Box>
                                            
                                        </Box>
                                    ))
                                }
                            </Box>
                            
                        </Box>  
                    </>
                }
           </Box>
            
            
            
            {/* <Box>                
                <Box className='grid grid-cols-4 gap-4'>
                {
                    
                    todos.map((todo) => (
                                                                                            
                        <Box key={todo.id} className='bg-white rounded-2xl menu'>                    

                            <Box className='p-4'>
                                <Text 
                                    className='font-semibold mb-2'
                                    style={{color:"#4d4d4d"}}
                                >
                                    {todo.text}
                                </Text>
                                <Text className='mb-2 text-sm'>
                                    Fried potato/yam chips with egg sauce
                                    or any topping of your choice
                                </Text>

                                <Box className='md:block flex justify-between items-center'>
                                    <Text className='text-secondary text-lg'>
                                        ₦ 1,000
                                    </Text>                            
                                </Box>
                            </Box>

                            <Box 
                                className='cursor-pointer mt-6 rounded-b-2xl text-center
                                p-4 bg-primary text-white'
                                onClick={handleDelete} 
                            >
                                Delete dish
                            </Box>
                        </Box>                                                                                                                
                        
                    ))
                }
                </Box>
                
            </Box> */}
        </Box>        
    </Box>
  )
}

export default AddProduct