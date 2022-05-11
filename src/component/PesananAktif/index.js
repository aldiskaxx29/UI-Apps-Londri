import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IconPesananAktif} from '../../assets';

const PesananAktif = ({title, status}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <IconPesananAktif />
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.status(status)}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PesananAktif;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    padding: 17,
    marginVertical: windowHeight * 0.01,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    alignItems: 'center',
  },
  text: {
    marginLeft: windowWidth * 0.02,
  },
  title: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-SemiBold',
  },
  status: status => ({
    fontSize: 14,
    fontFamily: 'TitilliumWeb-Light',
    color:
      status == 'Sudah selesai'
        ? '#55CB95'
        : status === 'Masih Dicuci'
        ? '#FF4D00'
        : 'yellow',
  }),
});
