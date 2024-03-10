
import { View, Text, FlatList, Image } from 'react-native'
import Estilo from './Estilo'

const menuDados = [
  { id: 1, nome: 'Expresso', preco: 5.99, imagem: require('../assets/cafe-preto.jpg') },
  { id: 2, nome: 'Cappuccino', preco: 8.99, imagem: require('../assets/cappuccino.jpg') },
  { id: 3, nome: 'Matcha', preco: 10.99, imagem: require('../assets/matcha.jpg') },
  { id: 4, nome: 'Macchiato', preco: 13.99, imagem: require('../assets/latte-macchiato.jpg') },
];

export default () => {
  const renderMenuItem = ({ item }: { item: { id: number; nome: string; preco: number; imagem: any } }) => (
    <View style={Estilo.menuItem}>
      <Image source={item.imagem} style={Estilo.menuItemImagem} />
      <Text style={Estilo.menuItemName}>{item.nome}</Text>
      <Text style={Estilo.menuItemPrice}>R$ {item.preco.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={Estilo.containerCardapio}>
      <Text style={Estilo.title}>Cardápio</Text>
      <FlatList
        data={menuDados}
        renderItem={renderMenuItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};


