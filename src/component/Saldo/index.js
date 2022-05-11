import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {WARNA_UTAMA} from '../../utils/constant';
import ButtonIcon from '../ButtonIcon';
import Gap from '../Gap';

const Saldo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.informasiSaldo}>
        <View style={styles.text}>
          <Text style={styles.labelSaldo}>Saldo</Text>
          <Text style={styles.valueSaldo}>Rp. 1.000.000</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.labelPoint}>Antar Point</Text>
          <Text style={styles.valuePoint}>100 Points</Text>
        </View>
      </View>
      <View style={styles.buttonAksi}>
        <ButtonIcon title="Add Saldo" />
        <Gap width={10} />
        <ButtonIcon title="Get Point" />
      </View>
    </View>
  );
};

export default Saldo;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 17,
    marginHorizontal: 30,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginTop: -windowHeight * 0.06,
    flexDirection: 'row',
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  informasiSaldo: {
    width: '60%',
  },
  buttonAksi: {},
  labelSaldo: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Regional',
  },
  valueSaldo: {
    marginTop: 1,
    fontSize: 16,
    fontFamily: 'TitilliumWeb-Bold',
  },
  labelPoint: {
    fontSize: 12,
    fontFamily: 'TitilliumWeb-Regional',
  },
  valuePoint: {
    fontSize: 12,
    fontFamily: 'TitilliumWeb-Bold',
    color: WARNA_UTAMA,
  },
  buttonAksi: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    justifyContent: 'space-between',
  },
});
