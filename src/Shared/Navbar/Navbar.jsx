import React from 'react';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const listItem = [
        {
            id:1,
            NavName:'ShowItems',
            link:'/showitems',
            DropDown :[
            ]
        },
        {
            id:2,
            NavName:'Experience',
            link:'/experience',
            DropDown :[
                {
                    NavName:'dropdown1',
                    link:'/dropdown2'
                },
                {
                    NavName:'dropdown1',
                    link:'/dropdown2'
                },
                {
                    NavName:'dropdown1',
                    link:'/dropdown2'
                },
                {
                    NavName:'dropdown1',
                    link:'/dropdown2'
                },
                {
                    NavName:'dropdown1',
                    link:'/dropdown2'
                }
            ]
        },
        {
            id:3,
            NavName:'Offers',
            link:'/offers',
            DropDown :[
                {
                    NavName:'dropdown1',
                    link:'/dropdown2'
                },
                {
                    NavName:'dropdown1',
                    link:'/dropdown2'
                },
                {
                    NavName:'dropdown1',
                    link:'/dropdown2'
                },
                {
                    NavName:'dropdown1',
                    link:'/dropdown2'
                },
                {
                    NavName:'dropdown1',
                    link:'/dropdown2'
                }
            ]
        }
        ,
        {
            id:4,
            NavName:'Foods',
            link:'/foods',
            DropDown :[
                {
                    NavName:'dropdown1',
                    link:'/dropdown2'
                },
                {
                    NavName:'dropdown1',
                    link:'/dropdown2'
                },
                {
                    NavName:'dropdown1',
                    link:'/dropdown2'
                },
                {
                    NavName:'dropdown1',
                    link:'/dropdown2'
                },
                {
                    NavName:'dropdown1',
                    link:'/dropdown2'
                }
            ]
        },
        
        {
            id:5,
            NavName:'Location',
            link:'/location',
            DropDown :[
                {
                    NavName:'dropdown1',
                    link:'/dropdown2'
                },
                {
                    NavName:'dropdown1',
                    link:'/dropdown2'
                },
                {
                    NavName:'dropdown1',
                    link:'/dropdown2'
                },
                {
                    NavName:'dropdown1',
                    link:'/dropdown2'
                },
                {
                    NavName:'dropdown1',
                    link:'/dropdown2'
                }
            ]
        }
    ]
    return (
        <div className='bg-white border-b'>
            <Container>
            <div className=' flex justify-between'>
            {/* Logo  */}
            <div className='py-3'>
                <img src="/logo.png" alt="" />
            </div> 
            {/* Ul item */}
               <div className=''>
                   <ul className='flex gap-2 '>
                    {
                        listItem?.map((navItem)=> (
                            <div   key={navItem.id} className='relative group'>
                            <Link to={navItem.link}>
                             <li className='py-6 text-lg px-5 border-b-[3px] uppercase border-white cursor-pointer hover:border-[#6E3996] hover:text-[#6E3996]'>{navItem.NavName}</li>
                            </Link>


                            <div className='bg-white h-[100px] hidden group-hover:block text-black absolute px-3  pt-2'>
                                fdsfads
                                {navItem?.DropDown.map((DropDownItem)=> (
                                     <li>

                                     </li>
                                ))}
                            </div>
                            </div>
                          
                           
                        ))
                    }
                     

                   </ul>
               </div>
                   
            </div>
            </Container>

        </div>

    );
};

export default Navbar;