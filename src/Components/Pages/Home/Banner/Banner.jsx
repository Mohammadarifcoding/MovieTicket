import React, { useEffect, useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const Banner = () => {
    const [sliderNumber,setSliderNumber] = useState(0)
    const SliderData = [
        {
            title:'This is title',
            shortDescription:'this is description',
            description:'This is the description for the slider',
            image:'/FirstPicture.jpg',
        },
        {
            title:'This is title',
            shortDescription:'this is description',
            description:'This is the description for the slider',
            image:'/SecondPicture.png',
        },
        {
            title:'This is title',
            shortDescription:'this is description',
            description:'This is the description for the slider',
            image:'/ThirdPicture.png',
        },
        {
            title:'This is title',
            shortDescription:'this is description',
            description:'This is the description for the slider',
            image:'/FouthPicture.jpg',
        }
    ]

    const GoForwardSlider = ()=>{
        if(sliderNumber == (SliderData.length - 1)){
           return setSliderNumber(0)
        }
        const newSliderNumber = sliderNumber + 1
        setSliderNumber(newSliderNumber)
    }
    const GoBackSlider = ()=>{
         if(sliderNumber == 0){
            return setSliderNumber((SliderData.length - 1))
         }
         const newSliderNumber = sliderNumber - 1
         setSliderNumber(newSliderNumber)
    }
    console.log(sliderNumber)
    return (
        <div style={{
            backgroundImage:`url(${SliderData[sliderNumber]?.image})`
        }} className=' z-20 bg-cover bg-center bg-fixed h-[85vh] w-full opacity-100 duration-300 transition-all'>
           {/* Right Arrow */}
           <div onClick={GoBackSlider} className='text-6xl absolute top-[45%]  cursor-pointer'>
           <IoIosArrowBack />
            </div> 
            {/* Left Arrow */}
            <div  onClick={GoForwardSlider} className='text-6xl right-0 absolute top-[45%]  cursor-pointer'>
           <IoIosArrowForward />
            </div> 
            <div className='flex justify-start items-center py-24'>
            <div className='flex flex-col px-24 justify-center  items-start'>
                    <h2 className='text-5xl font-semibold h-[60px] transition-all duration-200 overflow-hidden before:h-0'>This is the title</h2>
             </div>
            </div>
            <div className='w-full  flex justify-center'>
            <div  className='flex justify-center absolute bottom-10 mx-auto items-center gap-5 '>
                   {SliderData.map((item,idx)=> (
                    <div onClick={()=>{setSliderNumber(idx)}} key={idx} className={`${sliderNumber == idx ? 'scale-110':'scale-100'} cursor-pointer duration-200 transition-all w-[200px] h-[120px] `}>
                        <img className='w-full h-full  rounded-2xl' src={item.image} alt="" />
                    </div>
                   ))}
               </div>
            </div>

        </div>
    );
};

export default Banner;