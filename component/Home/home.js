import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, Button, Alert, ImageBackground, Pressable} from 'react-native';


const image = {uri: 'https://marketplace.canva.com/EAEtlMvlBDg/1/0/900w/canva-pastel-peach-watercolour-mobile-phone-wallpaper--8ZGLXxywc8.jpg'};

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Wordle Game</Text>
        <Pressable style={styles.button} onPress={() => alert("jogando")}>
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
    fontSize: 45, 
    paddingTop: 20,
    paddingBottom: 400
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
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
