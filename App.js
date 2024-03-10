import { View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native';

import Banner from './components/Banner';
import Cardapio from './components/Cardapio';
import Footer from './components/Footer';
import Estilo from './components/Estilo';

export default () => (
  <ScrollView backgroundColor={'#FFE4C8'}>
    <StatusBar backgroundColor={'#603F20'} barStyle={'#fff'} />
    <View>
      <SafeAreaView style={{ marginHorizontal: 20 }}>
        <Banner />
        <Text style={Estilo.txt1}>
          Nascida de um projeto do 1° ano na FIAP, a inspiração veio do apelido
          do nosso amigo Lucas, o Zeca.
        </Text>
        <Text style={Estilo.txt2}>
          Bem-vindo a Zecafé, onde oferecemos uma experiência única de café,
          destacando grãos de alta qualidade e bebidas artesanais em um ambiente
          acolhedor. Comprometidos com a sustentabilidade e a comunidade, nossa
          paixão se reflete não apenas em nossos produtos deliciosos, mas também
          em nosso espaço, concebido para criar momentos especiais e conexões
          significativas. Descubra uma jornada sensorial e social no Zecafé,
          onde cada xícara é mais do que café; é uma celebração do
          extraordinário.
        </Text>
        <Cardapio />
      </SafeAreaView>
      <Footer />
    </View>
  </ScrollView>
);
