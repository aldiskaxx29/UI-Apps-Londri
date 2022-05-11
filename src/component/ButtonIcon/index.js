import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {
  Saldo,
  Point,
  IconKiloan,
  IconSatuan,
  IconVip,
  IconKarpet,
  IconSetrika,
  IconExpres,
} from '../../assets';
import {WARNA_SEKUNDER} from '../../utils/constant';

const ButtonIcon = ({title, type}) => {
  const Icon = () => {
    if (title === 'Add Saldo') return <Saldo />;

    if (title === 'Get Point') return <Point />;

    if (title === 'Kiloan') return <IconKiloan />;

    if (title === 'Satuan') return <IconSatuan />;

    if (title === 'Vip') return <IconVip />;

    if (title === 'Karpet') return <IconKarpet />;

    if (title === 'Setrika') return <IconSetrika />;

    if (title === 'Express') return <IconExpres />;

    return <Saldo />;
  };

  return (
    <TouchableOpacity style={styles.container(type)}>
      <View style={styles.button(type)}>
        <Icon />
      </View>
      <Text style={styles.title(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  container: type => ({
    marginBottom: type === 'layanan' ? 12 : 0,
    marginRight: type === 'layanan' ? 30 : 0,
  }),

  button: type => ({
    backgroundColor: WARNA_SEKUNDER,
    padding: type === 'layanan' ? 12 : 7,
    borderRadius: 5,
  }),

  title: type => ({
    fontSize: type === 'layanan' ? 14 : 10,
    fontFamily:
      type === 'layanan' ? 'TitilliumWeb-Light' : 'TitilliumWeb-Reguler',
    textAlign: 'center',
  }),
});
