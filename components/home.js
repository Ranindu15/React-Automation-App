import  React, { Component }  from 'react';
import { SliderBox } from 'react-native-image-slider-box';
import { View, Text, StyleSheet } from 'react-native';

export default class Home extends Component{
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
  render() {
    return (
      <View style={Styles.container}>
        <SliderBox 
          images={this.state.images}   
          sliderBoxHeight={400}   
          onCurrentImagePressed={
            index => console.warn(`image ${index} pressed`)
          }  
          dotColor="#FFEE58"   
          inactiveDotColor="#90A4AE"   
          paginationBoxVerticalPadding={20}   
          autoplay   
          circleLoop >
        </SliderBox>
        <Text>HEllo</Text>
      </View>

    );
  }
   
}

const Styles ={
  container:{
    flex: 2,
    backgroundColor: '#2f3542'
  }
}
