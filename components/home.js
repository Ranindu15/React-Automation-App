import  React, { Component }  from 'react';
import SlideShow from './slideshow';
import { View, Image, ScrollView, Text, Button } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={Styles.contentContainer}>
         <SlideShow/>
        <View style={Styles.overView}>
          <View style={Styles.layOutView}>
              <Image
                style={Styles.imageView}
                source={require('../assests/car.png')}
              />
              <View style={Styles.textView}>
                <Text style={Styles.titleView}>{'Cars'}</Text>
                <Text style={Styles.subtitleView}>{'sport cars'}</Text>
                <Button
                    // icon={<Icon name='apple' type='font-awesome' size={20} color="yellow"/>}
                    title="Press here"/>
              </View>
          </View>
          <View style={Styles.layOutView}>
              <Image
                style={Styles.imageView}
                source={require('../assests/jeep.png')}
              />
              <View style={Styles.textView}>
                <Text style={Styles.titleView}>{'Jeep'}</Text>
                <Text style={Styles.subtitleView}>{'Jeeps'}</Text>
                <Button
                    // icon={<Icon name='apple' type='font-awesome' size={20} color="yellow"/>}
                    title="Press here"/>
              </View>
          </View>
        </View>
        <View style={Styles.overView}>
          <View style={Styles.layOutView}>
              <Image
                style={Styles.imageView}
                source={require('../assests/crossover.png')}
              />
              <View style={Styles.textView}>
                <Text style={Styles.titleView}>{'Crossover'}</Text>
                <Text style={Styles.subtitleView}>{'Outlander'}</Text>
                <Button
                  //  icon={<Icon name='apple' type='font-awesome' size={20} color="yellow"/>}
                    title="Press here"/>
              </View>
          </View>
          <View style={Styles.layOutView}>
              <Image
                style={Styles.imageView}
                source={require('../assests/minicooper.png')}
              />
              <View style={Styles.textView}>
                <Text style={Styles.titleView}>{'Mini Cooper'}</Text>
                <Text style={Styles.subtitleView}>{'mini coopers'}</Text>
                <Button
                //    icon={<Icon name='apple' type='font-awesome' size={20} color="yellow"/>}
                    title="Press here"/>
              </View>
          </View>
        </View>
        <View style={Styles.overView} >
          <View style={Styles.layOutView}>
              <Image
                style={Styles.imageView}
                source={require('../assests/wagonR.png')}
              />
              <View style={Styles.textView}>
                <Text style={Styles.titleView}>{'MINI Vans'}</Text>
                <Text style={Styles.subtitleView}>{'vagonR '}</Text>
                <Button
                 //   icon={<Icon name='apple' type='font-awesome' size={20} color="yellow"/>}
                    title="Press here"/>
              </View>
          </View>
          <View style={Styles.layOutView}>
              <Image
                style={Styles.imageView}
                source={require('../assests/pickup.png')}
              />
              <View style={Styles.textView}>
                <Text style={Styles.titleView}>{'Pick up'}</Text>
                <Text style={Styles.subtitleView}>{'Trucks'}</Text>
                <Button
                 //   icon={<Icon name='apple' type='font-awesome' size={20} color="yellow"/>}
                    title="Press here"/>
              </View>
          </View>
        </View>
        </ScrollView>
    );
  } 
}

const Styles ={
  contentContainer:{
    backgroundColor: '#2f3542'
  },
  overView:{
    paddingTop:5,
    flex: 1,
    flexDirection: 'row'
  },
  layOutView:{
    flex:1, 
    width: 200, 
    height: 200, 
    flexDirection:'row', 
    margin:3
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
