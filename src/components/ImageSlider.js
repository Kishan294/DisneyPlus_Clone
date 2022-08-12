import React from 'react'
import Slider from 'react-slick';
import styled from 'styled-components';
import Slider_1 from '../assets/images/slider-badging.jpg'
import Slider_2 from '../assets/images/slider-badag.jpg'

const ImageSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
    return (
        <Carousel {...settings} >
            <Wrap>
                <img src={Slider_1} alt="" />
            </Wrap>
            <Wrap>
                <img src={Slider_2} alt="" />
            </Wrap>
        </Carousel>
    )
}

export default ImageSlider

const Carousel = styled(Slider)`
    margin-top: 20px;

    ul li button{
        &:before{
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before{
        color: white;
    }
    .slick-list{
        overflow: visible;
    }

    button{
        z-index: 1;
    }
`

const Wrap = styled.div`
    cursor: pointer;
    img {
        border: 4px solid transparent;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition: 300ms;

        &:hover{
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
    }
`