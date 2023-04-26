import React from "react";
import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView, 
    ImageBackground, 
    Pressable} 
from 'react-native';

const image = {uri: 'https://templatefor.net/wp-content/uploads/2018/04/iPhone-forest-mysterious-wallpaper-245619875-576x1024.jpg'};

export default function TextFinal({route, navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.boxText}>
            <Text style={styles.text}>{route.params.finalText}</Text>
        </View>
        <Pressable style={styles.button}  onPress={() => navigation.navigate('Home')}>
          <Text style={styles.button_text}>Home</Text>
        </Pressable>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 1000,
  },
  boxText: {
    backgroundColor: 'rgba(86,102,55,0.5)',
    height: 600,
    width: 340,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginBottom: 50
    },
    text: {
    fontSize: 22, 
    paddingTop: 20,
    paddingBottom: 10,
    color: 'white'
    },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 420
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#666261',
  },
  button_text: {
    // fontFamily: 'Oval',
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
  },
});
