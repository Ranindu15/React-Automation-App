import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

export default class Cars extends Component {
  navigateToDetail = (item) => {
   this.props.navigation.navigate(item)
  }

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'A', data: ['Audi']},
            {title: 'B', data: ['BMW']},
            {title: 'H', data: ['Honda', 'Hyundai']},
            {title: 'J', data: ['Jaguar']},
            {title: 'K', data: ['Kia']},
            {title: 'M', data: ['Mazda','Mercedes-Benz', 'Mitsubishi']},
            {title: 'N', data: ['Nissan']},
            {title: 'T', data: ['Toyota']},
            {title: 'V', data: ['Volkswagen']},
          ]}
          renderItem={({item}) =><Text onPress={()=>this.navigateToDetail(item)} style={styles.item}>{item}</Text> }
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 35,
   backgroundColor:'#3c6382'
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#0a3d62',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
