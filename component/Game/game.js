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
  var cont = 1;

export default function Game({navigation}){
  const image = {uri: 'https://templatefor.net/wp-content/uploads/2018/04/iPhone-forest-mysterious-wallpaper-245619875-576x1024.jpg'};
  const [history, setHistory] = React.useState(`Consigo abrir meus olhos, mas não enxergo nada, nada que eu consiga entender. Quem são vocês? Por que me olham? O que querem? 
  Percebo que estou na antiga cabana de meus falecidos pais, os estranhos saem do quarto, e eu fico deitada. Vejo a janela aberta que me chama em direção a floresta, mas a curiosidade me chama a escutar o que falam…`);
  const [option1, setOption1] = React.useState("Escuto a conversa");
  const [option2, setOption2] = React.useState("Pulo a janela");

  const choose1 = () => {
    if(cont === 1){
      setHistory(`Me levanto e coloco meus ouvidos sobre a porta, ela está velha, há muitos cupins nela, eu quebro a parte superior da porta, fazendo um barulho relativamente alto. Portanto, escuto
      – “Nós não temos muitas opções restando, ela não vai colaborar e vcs já estão percebendo!”
      Em seguida ouço passos em direção ao meu quarto e a dúvida lateja em minha cabeça`);
      setOption1("Me deito");
      setOption2("Pulo a janela");
      cont = 2;

    } else if (cont === 2) {
      setHistory(` Deitada eles entram novamente no quarto, me olham e conversam entre si. 
      Estranho! O que falam? Não entendo nada. Começo a chorar! Por que eu estou chorando? 
      Tudo parece tão confuso e um moço vem do meu lado, ele parece estranho e fala para fugirmos juntos. 
      Eu conheço ele, mas não lembro de onde, será que eu confio nele?`);
      setOption1("Fujo com ele");
      setOption2("Nego o pedido");
      cont = 3;

    } else if (cont === 3) {
      setHistory(`Pulo a janela e ele logo vem comigo, tento pedir para ele onde estamos e por que querem nos manter naquela casa. 
      Ele apenas me indica que não há tempo para discutir. 
      Logo depois vemos um guarda ambiental, o moço estranho rapidamente me olha e pede para nos escondermos, estou começando a ficar com medo dele.`);
      setOption1("Peço ajuda ao guarda");
      setOption2("Me escondo");
      cont = 4;

    } else if (cont === 4) {    
      navigation.navigate('TextFinal', { finalText: `Peço ajuda ao guarda: Ele logo manda nós dois voltarmos a casa, caso contrário não vamos ganhar sobremesa por um mês. 
      Como assim sobremesa? Eu quero sair daqui,não sobremesa!  
      – Vamos de volta para a clínica! Vocês estão me dando problemas demais, pelo menos hoje você não quer me bater Beatriz! ` });
      cont = 1;

    } else if (cont === 11){
      setHistory(`Vejo uma árvore perto de mim, fico escondida atrás dela e espero a pessoa chegar perto. 
      Estou morrendo de medo, será que querem me pegar? O que aconteceu comigo? 
      Quando finalmente o moço passa vejo que é um guarda ambiental.`);
      setOption1("Converso com o guarda");
      setOption2("Espero ele passar");
      cont = 12;

    } else if (cont === 12){
      navigation.navigate('TextFinal', { finalText: `Assim, que eu vou em direção ao guarda ele me olha meio estranho e fala:
      – Achei ela
      Penso em correr mas, quando eu menos espero, levo uma agulhada.
      E ao acordar percebo que estou em um quarto, o que aconteu? Onde estou?. 
      Vejo uma janela aberta que me chama em direção à floresta, mas a curiosidade me chama a escutar o que algumas pessoas falam em frente a minha porta `});
      cont = 1;

    }  else if (cont === 21){
      navigation.navigate('TextFinal', { finalText:  `Ele fala que eu preciso voltar para a clínica, eu preciso de tratamento.
      – Como assim tratamento? Não estou doente! Quero sair daqui!
      – Vamos lá! Vou lhe mostrar uns livros e vamos conversar um pouco, você está tratando dessas amnésias dissociativas que cada vez estão mais frequentes. 
      Fique tranquila eu vou lhe explicar tudo de novo.` });
      cont = 1;

    }  else if (cont === 22){
      navigation.navigate('TextFinal', { finalText: `Um moço vem rapidamente em minha direção. 
      – Não acredito, como você consegue fugir tantas vezes? É impressionante , agora vou ligar para os enfermeiros virem te buscar.
      — Onde eu estou? Me ajuda!
      — Tu tá complicando o meu trabalho. Nunca vi um TDI com amnésia dissociativa tão esperto quanto você! Parece que esse lugar te chama`});
      cont = 1;

    }  else if (cont === 23){
      navigation.navigate('TextFinal', { finalText: `Eles acham que eu estou brincando? Por que me olham assim? Quem são esses?
      – Nós viemos te visitar, precisávamos te ver de novo.
      – Por que você chora moça? O que aconteceu? Onde estou?
      – Desculpa, você precisa se tratar sobrinha. Você está com alguns probleminhas psicológicos por causa da morte de seus pais…` });
      cont = 1;
    } 

    console.log(cont)
  }

  const choose2 = () => {
    if(cont === 1 || cont === 2){
    setHistory(`Lembrando de quando eu brincava com meu irmão, pulo com cuidado a janela. Sei por onde ir, é um instinto construído que aos poucos vai se tornando uma memória recuperada. 
    Em direção ao Leste da floresta, corro, e não paro. Tento não fazer barulhos, e ficar sempre atenta. 
    Escuto um barulho à minha frente, não consigo ver o que é, mas escuto uma voz cantando. É uma pessoa! O que eu faço?`);
    setOption1("Me escondo");  
    setOption2("Converso com a pessoa");
    cont = 11;
  
  } else if (cont === 3) {
    setHistory(`Falo que não e ele começa a rir de mim, não consigo entender. 
    Ele pula a janela sozinho, isso me fez desistir de fugir, seja lá a liberdade que lá fora possa me dar ele também terá ela. 
    Os outros começam a chamar um moço, parece ser um enfermeiro, ele fala com um aparelho pedindo para buscarem o cara estranho.  `);
    setOption1("Converso com os outros");
    setOption2("Converso com ele");
    cont = 13;

  } else if (cont === 4) {  
    navigation.navigate('TextFinal', { finalText:  `Duas pessoas atrás de uma mesma árvore não é um bom esconderijo!
    – O que vocês fazem ai?
    – Não acredito que fugiram de novo! De quem foi a ideia dessa vez? E ainda na frente dos tios da Beatriz!
    Em seguida, só sinto uma picada no meu braço e assim que eu acabo voltando para um quarto, mas peraí onde eu estou?`});
    cont = 1;

  } else if (cont === 11){
    setHistory(`Vou com cautela em direção à voz, quando chego perto vejo que é um guarda ambiental.
    -- Olá, você consegue me ajudar? Não sei o que aconteceu comigo, vim parar na antiga cabana de meus pais e não me lembro de nada.
    -- Olá, Dona Beatriz. Você não se lembra de mim?
        Meu mundo começa a girar, e quando finalmente volto ao meu estado normal, vejo que o guarda está falando no walk-talk. 
        Não sei se ele não está envolvido no que aconteceu comigo, o que eu faço agora?`);
    setOption1("Continuo conversando");
    setOption2("Corro");  
    cont = 21;

  } else if (cont === 12){
    setHistory(`Continuo caminhando e sigo reto, finalmente chego ao final da floresta e percebo que estou em uma Ilha.
     Ilha? Cabana? Onde estou? Acho que me sequestraram! Não, por que iriam fazer isso?
     Começo a me sentir mal, não consigo mais andar direito, mas vejo uma guarita por perto.`);
    setOption1("Vou até a guarita");  
    setOption2("Me escondo e descanso");
    cont = 22;

  }   else if (cont === 13){
    navigation.navigate('TextFinal', { finalText: ` Ele fala que eu fui internada para um tratamento.
    – Como assim tratamento? Você está me enganando!
    – Sua família não conseguia mais ajudar você, então eles pediram para nós cuidarmos de você. Você tem irmãos e tios que te amam e entendem todos seus traumas.` });
    cont = 1;
  
  } else if (cont === 21){
    navigation.navigate('TextFinal', { finalText: `Assim que começo a correr o guarda para de conversar e vêm atrás de mim, ele pede para eu parar, mas não paro. 
    De repente tudo começa a girar e quando eu vejo estou dentro de um quarto algemada e há uns aparelhos estranhos, 
    parece que injetam algo na minha veia e me deixam estranhamente mais calma. Uma enfermeira chega e fala
    – Te achamos de novo! Se você continuar assim o seu tratamento vai durar mais do que o esperado!` });
    cont = 1;
    
  } else if (cont === 22){
    navigation.navigate('TextFinal', { finalText:  `Abro meus olhos e estou em um quarto branco, tem uns aparelhos estranhos, parece que injetam algo na minha veia, quero gritar, mas não consigo. Uma enfermeira chega se identifica e fala
    – Calma, você precisa se acalmar ou te sedaremos novamente!  
    – Onde eu estou?
    – Acho que da próxima vez eu coloco um papel aqui. Já te falei, você está em tratamento, NÃO adianta ficar fugindo!` });
    cont = 1;
  
  }

  console.log(cont)
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
  