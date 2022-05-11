import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import {ImageHeader, logo} from '../../assets';
import {ButtonIcon, PesananAktif, Saldo} from '../../component';

const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={ImageHeader} style={styles.header}>
          <Image source={logo} style={styles.logo} />
          <View style={styles.hello}>
            <Text style={styles.welcome}>Selamat Datang</Text>
            <Text style={styles.username}>Aldi Skax</Text>
          </View>
        </ImageBackground>
        <Saldo />
        <View style={styles.layanan}>
          <Text style={styles.label}>Layanan Kami</Text>
          <View style={styles.iconLayanan}>
            <ButtonIcon title="Kiloan" type="layanan" />
            <ButtonIcon title="Satuan" type="layanan" />
            <ButtonIcon title="Vip" type="layanan" />
            <ButtonIcon title="Karpet" type="layanan" />
            <ButtonIcon title="Setrika" type="layanan" />
            <ButtonIcon title="Express" type="layanan" />
          </View>
        </View>
        <View style={styles.pesananAktif}>
          <Text style={styles.label}>Pesanan Aktif</Text>
          <PesananAktif title="Pesanan No. 0979872" status="Sudah selesai" />
          <PesananAktif title="Pesanan No. 0979873" status="Masih Dicuci" />
          <PesananAktif title="Pesanan No. 0979874" status="Sudah selesai" />
          <PesananAktif title="Pesanan No. 0979875" status="Sudah selesai" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.3,
    paddingHorizontal: 25,
    paddingTop: 10,
  },
  logo: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.06,
  },
  hello: {
    marginTop: windowWidth * 0.03,
  },
  welcome: {
    fontFamily: 'TitilliumWeb-Regular',
    fontSize: 20,
  },
  username: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 18,
  },
  layanan: {
    paddingLeft: 30,
    paddingTop: 15,
  },
  label: {
    fontSize: 15,
    fontFamily: 'TitilliumWeb-Bold',
  },
  iconLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    flexWrap: 'wrap',
  },
  pesananAktif: {
    paddingTop: 10,
    paddingHorizontal: 30,
    backgroundColor: '#F6F6F6',
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
