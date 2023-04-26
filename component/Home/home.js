import React from "react";
import { 
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
  Pressable}
from 'react-native';

const image = {uri: 'https://templatefor.net/wp-content/uploads/2018/04/iPhone-forest-mysterious-wallpaper-245619875-576x1024.jpg'};

export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Game's name</Text>
        <Pressable style={styles.button}  onPress={() => navigation.navigate('Game')}>
          <Text style={styles.button_text}>JOGAR</Text>
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
  text: {
    fontSize: 48, 
    paddingTop: 20,
    paddingBottom: 400,
    textShadowColor: 'white',
    textShadowOffset: {width: -2, height: 1},
    textShadowRadius: 20
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
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
  },
});
