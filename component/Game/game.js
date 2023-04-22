import React from  "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  ImageBackground, 
  Pressable, 
  RefreshControl, 
  ScrollView} 
  from 'react-native';


function choose1(){
  history = "asdasd";
  option1 = "asdas";
  option2 = "sdfcasdf";
  // onRefresh;
}

const [refreshing, setRefreshing] = React.useState(false);

const onRefresh = React.useCallback(() => {
  setRefreshing(true);
  setTimeout(() => {
    setRefreshing(false);
  }, 2000);
}, []);

const image = {uri: 'https://templatefor.net/wp-content/uploads/2018/04/iPhone-forest-mysterious-wallpaper-245619875-576x1024.jpg'};
let history = `Consigo abrir meus olhos, mas não enxergo nada, nada que eu consiga entender. Quem são vocês? Por que me olham? O que querem? 
Percebo que estou na antiga cabana de meus falecidos pais, os estranhos saem do quarto, e eu fico deitada. Vejo a janela aberta que me chama em direção a floresta, mas a curiosidade me chama a escutar o que falam…`;
let option1 = "Escuto a conversa";
let option2 = "Pulo a janela";


export default function Game(){
    return(
        <SafeAreaView style={styles.container} id="container">
          <ScrollView
            contentContainerStyle={styles.scrollView}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            <ImageBackground source={image} resizeMode="cover" style={styles.image}> 
              <View style={styles.boxText}>
                <Text style={styles.text}>{history}</Text>
              </View>
              <Pressable style={styles.button} onPress={choose1()}>
                <Text style={styles.button_text}>{option1}</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={choose1()}>
                <Text style={styles.button_text}>{option2}</Text>
              </Pressable>
            </ImageBackground>
          </ScrollView>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      height: 1000,
    },
    scrollView: {

    },
    boxText: {
        backgroundColor: 'rgba(86,102,55,0.5)',
        height: 450,
        width: 320,
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
      width: 310,
      height: 60,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#666261',
      marginBottom: 10,
    },
    button_text: {
      fontSize: 16,
      lineHeight: 21,
      letterSpacing: 0.25,
      color: 'white'
    },
  });
  