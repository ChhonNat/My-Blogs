import React from 'react';
import { Carousel } from 'react-bootstrap';
import img2 from '../../src/assets/beach-1404658.jpg';
import img3 from '../../src/assets/iceland-landscapes-2-1512233.jpg';
import img1 from '../../src/assets/img1.jpg';


function MyCarrousel() {
    const tmpData = [
        {
            imgSlice: img1,
            alt: 'First slice',
            title: 'First slide label',
            subTitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        },
        {
            imgSlice: img2,
            alt: 'second slice',
            title: 'second slide label',
            subTitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        },
        {
            imgSlice: img3,
            alt: 'third slice',
            title: 'third slide label',
            subTitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        },
    ]
    return (
        <Carousel data-bs-theme="dark">
            {
                tmpData.map((item, index) => {
                    const { imgSlice, alt, title, subTitle } = item;
                    return (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                src={imgSlice}
                                alt={alt}
                                style={{ height: "95vh" }}
                            />
                            <Carousel.Caption>
                                <h5>{title}</h5>
                                <p>{subTitle}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    )
}

export default MyCarrousel;