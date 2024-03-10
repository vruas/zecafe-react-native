import { View, Text, Image } from 'react-native';
import Estilo from './Estilo';

export default () => {
  return (
    <View style={{ backgroundColor: '#603F20' }}>
      <View style={Estilo.cards}>
        <View>
          <Text style={Estilo.nomeCard}>Vitor Ruas</Text>
          <Text style={Estilo.rmCard}>RM550871</Text>
        </View>
        <View>
          <Image
            source={require('../assets/zecafe-logo.png')}
            style={{ width: 80, height: 80, borderRadius: 100 }}
          />
        </View>
        <View>
          <Text style={Estilo.nomeCard}>Gabriel Previ</Text>
          <Text style={Estilo.rmCard}>RM98774</Text>
        </View>
      </View>
      <Text style={Estilo.copy}>
        © 2024 Zecafé. Todos os direitos reservados.
      </Text>
    </View>
  );
};
