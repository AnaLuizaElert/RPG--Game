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

export default function Game(){
  const image = {uri: 'https://templatefor.net/wp-content/uploads/2018/04/iPhone-forest-mysterious-wallpaper-245619875-576x1024.jpg'};
  const [history, setHistory] = React.useState(`Consigo abrir meus olhos, mas não enxergo nada, nada que eu consiga entender. Quem são vocês? Por que me olham? O que querem? 
  Percebo que estou na antiga cabana de meus falecidos pais, os estranhos saem do quarto, e eu fico deitada. Vejo a janela aberta que me chama em direção a floresta, mas a curiosidade me chama a escutar o que falam…`);
  const [option1, setOption1] = React.useState("Escuto a conversa");
  const [option2, setOption2] = React.useState("Pulo a janela");

  function choose1(){
    setHistory(`Me levanto e coloco meus ouvidos sobre a porta, ela está velha, há muitos cupins nela, eu quebro a parte superior da porta, fazendo um barulho relativamente alto. Portanto, escuto
    – “Nós não temos muitas opções restando, ela não vai colaborar e vcs já estão percebendo!”
    Em seguida ouço passos em direção ao meu quarto e a dúvida lateja em minha cabeça`);
    setOption1("Me deito");
    setOption2("Pulo a janela");
    Pressable.call(choose11())
  }

  function choose2(){
    setHistory(`Rapidamente me levanto e lembrando de quando eu brincava com meu irmão, pulo com cuidado a janela. Sei por onde ir, é um instinto construído que aos poucos vai se tornando uma memória recuperada. 
    Em direção ao Leste da floresta, corro, e não paro. Tento não fazer barulhos, e ficar sempre atenta. 
    Escuto um barulho à minha frente, não consigo ver o que é, mas escuto uma voz cantando. É uma pessoa! O que eu faço?`);
    setOption1("Me escondo");  
    setOption2("Converso com a pessoa");
  }

  function choose11(){
    setHistory(` Deitada eles entram novamente no quarto, me olham e conversam entre si. 
    Estranho! O que falam? Não entendo nada. Começo a chorar! Por que eu estou chorando? 
    Tudo parece tão confuso e um moço vem do meu lado e chora junto, quando eu miro ele outra moça se aproxima e me pede desculpa.`);
    setOption1("Me deito");
    setOption2("Pulo a janela");
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

    return(
        <SafeAreaView style={styles.container} id="container">
          <ScrollView
            contentContainerStyle={styles.scrollView}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}> 
              <View style={styles.boxText}>
                <Text style={styles.text}>{history}</Text>
              </View>
              <Pressable style={styles.button} onPress={choose1}>
                <Text style={styles.button_text}>{option1}</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={choose2}>
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
      alignItems: 'center',
      justifyContent: 'space-evenly'
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
      width: 420,
      height: 800
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
  