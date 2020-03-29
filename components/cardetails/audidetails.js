// import * as React from 'react';
// import { Button, View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

// export default function AudiA1({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//          onPress={() => navigation.goBack()} title="Go back" />
//       />
//     </View>
//   );
// }
// function AudiA3({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button
//           onPress={() => navigation.navigate('Notifications')}
//           title="Go to notifications"
//         />
//       </View>
//     );
//   }
//   function AudiA4({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button
//           onPress={() => navigation.navigate('Notifications')}
//           title="Go to notifications"
//         />
//       </View>
//     );
//   }


// const Drawer = createDrawerNavigator();

// export default function AudiDetails() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="AudiA1" component={AudiA1} />
//         <Drawer.Screen name="AudiA3" component={AudiA3} />
//         <Drawer.Screen name="AudiA4" component={AudiA4} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
