import React, { Component } from 'react';
import styles from './Slider.module.scss';
import arrow from '../../images/arrow.svg';
import mplecy from '../../images/slider/masaz-plecy.svg';
import mkarku from '../../images/slider/masaz-plecy.svg';
import mstop from '../../images/slider/masaz-stopy.svg';
import mzuchwy from '../../images/slider/masaz-zuchwa.svg';
import mplacow from '../../images/slider/masaz-plecy_2.svg';

const slides = [
    {
        title: 'Masaże kalsyczne',
        img: mplecy
    },
    {
        title: 'Masaż stóp',
        img: mstop
    },
    {
        title: 'Masaż karku',
        img: mkarku
    },
    {
        title: 'Masaż żuchwy',
        img: mzuchwy
    },
    {
        title: 'Masaż pleców',
        img: mplacow
    }

]

class Slider extends Component {

    state = {
        slideNumber: 0
    }

    changeSlides = (sign) => {
        //debugger;
        const prevSlide = this.state.slideNumber - 1;
        const nextSlide = this.state.slideNumber + 1;

        const slidesLength = slides.length;

        console.log(`przed zmianą state ${this.state.slideNumber}`)
        if (sign === '-') {
            if (prevSlide < 0) {
                this.setState({
                    slideNumber: slidesLength - 1
                })
            } else {
                this.setState({
                    slideNumber: prevSlide
                })
            }
        } else {
            if (nextSlide === slidesLength) {
                this.setState({
                    slideNumber: 0
                })
            } else {
                this.setState({
                    slideNumber: nextSlide
                })
            }

        }

    }

    render() {
        console.log(`w render ${this.state.slideNumber}`)
        //const nslides = [...slides]
        const { slider, circle_big, circle_small, slider_title, arrow_left, arrow_right, title } = styles;
        return (
            <div className={slider}>
                <div className={circle_big}>
                    <div className={circle_small}>
                        <img src={slides[this.state.slideNumber].img} alt="" />
                    </div>

                    <div className={slider_title}>
                        <div className={arrow_left} onClick={() => this.changeSlides('-')}>
                            <img src={arrow} alt="prawo" />
                        </div>
                        <div className={title}>
                            {slides[this.state.slideNumber].title}
                        </div>

                        <div className={arrow_right} onClick={this.changeSlides}>
                            <img src={arrow} alt="lewo" />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Slider;