import React, { useState } from 'react';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from "react-icons/hi";

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

    const [openMenu,setOpenMenu] = useState(false)
    return (
        <div className='bg-white border-b'>
            <Container>
            <div className=' flex justify-between'>
            {/* Logo  */}
            <div className='py-3'>
                <img src="/logo.png" alt="" />
            </div> 
            {/* Ul item */}
               <div onClick={()=>{setOpenMenu(!openMenu)}} className='flex items-center gap-2'>
                   <ul className=' gap-2 lg:flex hidden'>
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
                    {/* Menu Icon */}
                <div className='text-3xl lg:hidden block px-7 py-6 cursor-pointer border-b-[3px] border-white  hover:border-[#6E3996]'>
                   <HiMenuAlt3></HiMenuAlt3>
               </div>
               </div>  
            </div>
             
            </Container>
            <div className={` ${openMenu ? 'h-full opacity-100':'h-0 opacity-0 hidden'}  bg-white absolute w-full transition-all duration-1000`}>
            <ul className=' gap-2 flex flex-col '>
                    {
                        listItem?.map((navItem)=> (
                            <div   key={navItem.id} className='group'>
                            <Link to={navItem.link}>
                             <li className='py-2 font-semibold text-base px-5 border-b-[3px] uppercase border-white cursor-pointer '>{navItem.NavName}</li>
                            </Link>
                            {/* <div className={`bg-white ${navItem.DropDown.length === 0 ? 'group-hover:hidden':''} shadow-xl min-h-full w-[200px]  overflow-y-auto hidden group-hover:block text-black absolute `}>                               
                                {navItem?.DropDown.map((DropDownItem)=> (
                                    <Link  key={DropDownItem.id}>
                                     <li className='px-4 py-4 border-b  hover:text-[#6E3996]'>
                                         {DropDownItem.NavName}
                                     </li>
                                    </Link>
                                ))}
                            </div> */}
                            </div> 
                        ))
                    }
                   </ul>
            </div>
        </div>

    );
};

export default Navbar;