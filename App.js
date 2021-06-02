import { StatusBar } from 'expo-status-bar';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Button, Alert, Platform, Dimensions,} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
export default function App() {
//   const handlePressed = () => console.log(Dimensions.get("screen"));
//   console.log(useDimensions());
//   console.log(useDeviceOrientation());
//   const { landscape } = useDeviceOrientation();
//   return (
//     // <SafeAreaView style={styles.container}>
//     //   <Text numberOfLines={1} onPress={handlePressed}>Hello World Hello WorldHello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World</Text>
//     //   <TouchableOpacity>
//     //   <Image source={require('./assets/favicon.png')}/>
//     //   </TouchableOpacity>
//     //   <TouchableWithoutFeedback>
//     //   <Image source={require('./assets/favicon.png')}/>
//     //   </TouchableWithoutFeedback>
//     // <TouchableHighlight>
//     //  <Image 
//     //   // blurRadius={10}
//     //   loadingIndicatorSource={require('./assets/favicon.png')}
//     //   fadeDuration={1000}
//     //   source={{ 
//     //     width: 200,
//     //     height: 300,
//     //     uri: "https://picsum.photos/200/300" }}/>
//     // </TouchableHighlight>
//     // <Button 
//     // color='orange'
//     // title='Click Me' onPress={() => Alert.alert('Ammar', "My Message", [
//     //   {text: "Yes"},
//     //   {text: "No"},
//     //   ])}/>
//     //   <StatusBar style="auto" />
//     //   <View
//     //   style={{
//     //     backgroundColor: "dodgerblue",
//     //     width: "100%",
//     //     height: landscape ? '100%' : '30%',
//     //   }}
//     //   >

//     //   </View>
//     // </SafeAreaView>
//   <View
//   style={{
  
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   //  flexWrap: 'wrap',
//    // alignContent: 'center'
//   }}
//   >
// <View style={{
//   backgroundColor: "pink",
//   //flex: 5
//  // alignSelf: "flex-start",
//   width: 100,
//   height: 100,
// }}/>
// <View style={{
//   backgroundColor: "tomato",
//   width: 100,
//   height: 100,
//  // flex: 1
// }}/>
// <View style={{
//   backgroundColor: "green",
//   width: 100,
//   height: 100,
//   //flex: 1
// }}/>
// <View style={{
//   backgroundColor: "black",
//   width: 100,
//   height: 100,
//   top: 30,
//   //flex: 1
// }}/>

//   </View>
//   );
return  <ViewImageScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
