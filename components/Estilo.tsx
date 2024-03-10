import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  containerBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    marginTop: 20,
  },
  logo: {
    width: 200,
    height: 200,
  },
  txt1:{
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 16,
    color: '#603F20',
    textAlign: 'center',
  },
  txt2: {
    fontSize: 14,
     color: '#603F20',
    textAlign: 'center'
  },
  containerCardapio: {
  flex: 1,
  padding: 20,
},
title: {
  fontSize: 24,
  fontWeight: 'bold',
  marginTop: 16,
  marginBottom: 16,
  color: '#603F20',
  textAlign: 'center',
},
menuItem: {
  alignItems: 'center',
  marginBottom: 16,
  padding: 12,
  borderRadius: 8,
},
menuItemName: {
  textAlign: 'center',
  color: '#603F20',
  marginTop:10,
  fontSize: 18,
  fontWeight: 'bold',
},
menuItemPrice: {
  textAlign: 'center',
  fontSize: 16,
  fontWeight: 'bold',
  color: '#603F20',
},
menuItemImagem: {
  width: 150,
  height: 150,
  borderRadius: 30
},
copy: {
  paddingVertical: 20,
  textAlign: 'center',
  fontWeight: 'bold',
  color: '#FFE4C8'
},
cards: {
  marginVertical: 20,
  paddingHorizontal: 20,
  flexDirection: 'row',
  justifyContent: 'space-between'
},
nomeCard: {
  fontSize: 12,
  fontWeight: 'bold',
  color: '#FFE4C8'
},
rmCard: {
  fontSize: 12,
  fontWeight: 'bold',
  color: '#FFE4C8'
}



});
