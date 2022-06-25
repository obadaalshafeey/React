import React, { useState } from "react";
import './index.css';

function Slider(){
        const images=[
            {
                id:1,
                url:"https://th.bing.com/th/id/OIP.pXTU3YsjnLVefAFEoMEwDwHaFj?pid=ImgDet&rs=1"
            },
            {
                id:2,
                url:"https://th.bing.com/th/id/OIP.42V13kUl8W7mwilfAkmaxgHaFv?pid=ImgDet&rs=1"
            },
            {
                id:3,
                url:"https://th.bing.com/th/id/R.585a5912a9dcd3308fabbf4beee8cb28?rik=v%2fky3oK9iWeJDQ&pid=ImgRaw&r=0"
            }
        ];
        const [slideIndex,setSliderIndex]=useState(1);
        const count=0;
        const nextSlide=()=>{
            if(images.length!=slideIndex){
                setSliderIndex(slideIndex+1)
            }else{
                setSliderIndex(1)
            }
        }
        const prevSlide=()=>{
            if(slideIndex!=1){
                setSliderIndex(slideIndex-1)
            }else if(slideIndex==1){
                setSliderIndex(images.length)
            }
        }
        const dots=index=>{
            setSliderIndex(slideIndex);
        }
        return(
            <div className="container">
                {images.map((obj,index)=>{
                    return(
                        <div className={slideIndex === index+1 ? "slide active-anim" : "slide"} key={obj.id}>
                        <img src={`/images/${index+1}.png`} height="500px" width="50%" alt="" />
                    </div>
                    )
                })}
                <button className='btn-slide next' onClick={nextSlide}>
                    <img src="/images/arrow-right-solid.png" alt="" />  
                </button>
                <button className='btn-slide prev' onClick={prevSlide}>
                    <img src="/images/arrow-left-solid.png" alt="" />  
                </button>
                <div className="container-dots">
                {Array.from({length:3}).map((item, index)=>(
                <div onClick={ ()=>dots(index+1)} className={slideIndex === index+1 ? "dot active-dot" : "dot"}></div>
                ))}
            </div>
            </div>
        );
    };

export default Slider;