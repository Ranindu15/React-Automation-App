import  React, { Component }  from 'react';
import { SliderBox } from 'react-native-image-slider-box';
import { View, Text, Button } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home extends Component {
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
          sliderBoxHeight={300}   
          onCurrentImagePressed={
            index => console.warn(`image ${index} pressed`)
          }  
          dotColor="#FFEE58"   
          inactiveDotColor="#90A4AE"   
          paginationBoxVerticalPadding={20}   
          autoplay   
          circleLoop >
        </SliderBox>

        <Card style={{alignItems:'center'  }}
                title='Bruce Wyne'
                image={require('../assests/batman.png')}>
                <Text style={{marginBottom: 10}}>
                    The idea with React Native Elements 
                    is more about component structure than actual design.
                </Text>
                <Button
                    icon={<Icon name='apple' type='font-awesome' size={20} color="yellow"/>}
                    buttonStyle={{borderRadius: 20, marginLeft: 0, marginRight: 200, marginBottom: 0}}
                    title="Press here"/>
            </Card>
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
