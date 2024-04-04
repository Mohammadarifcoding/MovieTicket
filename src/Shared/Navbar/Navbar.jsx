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
                    id:1,
                    NavName:'dropdown1',
                    link:'/dropdown2'
                },
                {
                    id:2,
                    NavName:'dropdown1',
                    link:'/dropdown2'
                },
                {
                    id:3,
                    NavName:'dropdown1',
                    link:'/dropdown2'
                },
                {
                    id:4,
                    NavName:'dropdown1',
                    link:'/dropdown2'
                },
                {
                    id:5,
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
                    id:1,
                    NavName:'dropdown1',
                    link:'/dropdown2'
                },
                {
                    id:2,
                    NavName:'dropdown1',
                    link:'/dropdown2'
                },
                {
                    id:3,
                    NavName:'dropdown1',
                    link:'/dropdown2'
                },
                {
                    id:4,
                    NavName:'dropdown1',
                    link:'/dropdown2'
                },
                {
                    id:5,
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
                    id:1,
                    NavName:'dropdown1',
                    link:'/dropdown2'
                },
                {
                    id:2,
                    NavName:'dropdown1',
                    link:'/dropdown2'
                },
                {
                    id:3,
                    NavName:'dropdown1',
                    link:'/dropdown2'
                },
                {
                    id:4,
                    NavName:'dropdown1',
                    link:'/dropdown2'
                },
                {
                    id:5,
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
               <div className='lg:block hidden'>
                   <ul className='flex gap-2 '>
                    {
                        listItem?.map((navItem)=> (
                            <div   key={navItem.id} className='relative group'>
                            <Link to={navItem.link}>
                             <li className='py-6 text-lg px-5 border-b-[3px] uppercase border-white cursor-pointer group-hover:border-[#6E3996] group-hover:text-[#6E3996]'>{navItem.NavName}</li>
                            </Link>


                            <div className={`bg-white ${navItem.DropDown.length === 0 ? 'group-hover:hidden':''} shadow-xl min-h-full w-[200px]  overflow-y-auto hidden group-hover:block text-black absolute `}>
                               
                                {navItem?.DropDown.map((DropDownItem)=> (
                                    <Link  key={DropDownItem.id}>
                                     <li className='px-4 py-4 border-b  hover:text-[#6E3996]'>
                                         {DropDownItem.NavName}
                                     </li>
                                    </Link>
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