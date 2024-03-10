import {Image, View} from 'react-native';
import Estilo from './Estilo'

export default () => {
  return(
    <View style={Estilo.containerBanner}>
          <Image source={require('../assets/zecafe-logo.png')} style={Estilo.logo} />
          {/* Adicione outros componentes conforme necessário */}
        </View>
  )
}