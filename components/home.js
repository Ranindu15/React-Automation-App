import  React, { Component }  from 'react';
import { SliderBox } from 'react-native-image-slider-box';
import { View, Image, ScrollView, Text, Button } from 'react-native';
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
    ],   
    myloop: [] 
    };
}
  render() {
    for (let i = 0; i < 3; i++) {
      this.state.myloop.push(
        <View style={Styles.overView} key={i}>
          <View style={Styles.layOutView}>
              <Image
                style={Styles.imageView}
                source={{ uri: 'https://www.dike.lib.ia.us/images/sample-1.jpg/image' }}
              />
              <View style={Styles.textView}>
                <Text style={Styles.titleView}>{'Title'}</Text>
                <Text style={Styles.subtitleView}>{'Subtitle'}</Text>
                <Button
                    icon={<Icon name='apple' type='font-awesome' size={20} color="yellow"/>}
                    title="Press here"/>
              </View>
          </View>
          <View style={Styles.layOutView}>
              <Image
                style={Styles.imageView}
                source={{ uri: 'https://www.dike.lib.ia.us/images/sample-1.jpg/image' }}
              />
              <View style={Styles.textView}>
                <Text style={Styles.titleView}>{'Title'}</Text>
                <Text style={Styles.subtitleView}>{'Subtitle'}</Text>
                <Button
                    icon={<Icon name='apple' type='font-awesome' size={20} color="yellow"/>}
                    title="Press here"/>
              </View>
          </View>
        </View>
      );
    }
    return (
      <ScrollView contentContainerStyle={Styles.contentContainer}>
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

        {this.state.myloop}

        {/* <View style={Styles.overView}>
          <View style={Styles.layOutView}>
              <Image
                style={Styles.imageView}
                source={{ uri: 'https://www.dike.lib.ia.us/images/sample-1.jpg/image' }}
              />
              <View style={Styles.textView}>
                <Text style={Styles.titleView}>{'Title'}</Text>
                <Text style={Styles.subtitleView}>{'Subtitle'}</Text>
                <Button
                    icon={<Icon name='apple' type='font-awesome' size={20} color="yellow"/>}
                    title="Press here"/>
              </View>
          </View>
          <View style={Styles.layOutView}>
              <Image
                style={Styles.imageView}
                source={{ uri: 'https://www.dike.lib.ia.us/images/sample-1.jpg/image' }}
              />
              <View style={Styles.textView}>
                <Text style={Styles.titleView}>{'Title'}</Text>
                <Text style={Styles.subtitleView}>{'Subtitle'}</Text>
                <Button
                    icon={<Icon name='apple' type='font-awesome' size={20} color="yellow"/>}
                    title="Press here"/>
              </View>
          </View>
        </View>

        <View style={Styles.overView}>
          <View style={Styles.layOutView}>
              <Image
                style={Styles.imageView}
                source={{ uri: 'https://www.dike.lib.ia.us/images/sample-1.jpg/image' }}
              />
              <View style={Styles.textView}>
                <Text style={Styles.titleView}>{'Title'}</Text>
                <Text style={Styles.subtitleView}>{'Subtitle'}</Text>
                <Button
                    icon={<Icon name='apple' type='font-awesome' size={20} color="yellow"/>}
                    title="Press here"/>
              </View>
          </View>
          <View style={Styles.layOutView}>
              <Image
                style={Styles.imageView}
                source={{ uri: 'https://www.dike.lib.ia.us/images/sample-1.jpg/image' }}
              />
              <View style={Styles.textView}>
                <Text style={Styles.titleView}>{'Title'}</Text>
                <Text style={Styles.subtitleView}>{'Subtitle'}</Text>
                <Button
                    icon={<Icon name='apple' type='font-awesome' size={20} color="yellow"/>}
                    title="Press here"/>
              </View>
          </View>
        </View> */}
      </ScrollView>

    );
  }
   
}

const Styles ={
  contentContainer:{
    paddingVertical: 20,
    backgroundColor: '#2f3542'
  },
  overView:{
    flex: 1,
    flexDirection: 'row'
  },
  layOutView:{
    flex:1, 
    width: 200, 
    height: 200, 
    flexDirection:'row', 
    margin:5
  },
  imageView:{
    width: 200, 
    height: 200, 
    position: 'absolute'
  },
  textView:{
    flex: 1, 
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    alignSelf: 'flex-end'
  },
  titleView:{
    color: 'white', 
    fontSize: 20, 
    margin: 6
  },
  subtitleView:{
    color: 'white', 
    margin: 6
  }
}
