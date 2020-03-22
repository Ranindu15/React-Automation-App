import React, {Component} from 'react';
import { SliderBox } from 'react-native-image-slider-box';

export default class SlideShow extends Component{
    constructor(props) {     
        super(props);     
        this.state = {       
        images: [         
        require('../assests/audi.jpg'),        
        require('../assests/benz.jpg'),
        require('../assests/bmw1.png'),
        require('../assests/vega.png'),
        ]
        };
    }

    render(){
        return(
        <SliderBox images={this.state.images} sliderBoxHeight={300}
          onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}  
          dotColor="#FFEE58" inactiveDotColor="#90A4AE" paginationBoxVerticalPadding={20}   
          autoplay 
          circleLoop>
        </SliderBox>
        )
    }
}

