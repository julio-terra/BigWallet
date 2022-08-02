import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import { AntDesign } from '@expo/vector-icons'

const Actions = () => {
  return (
    <ScrollView horizontal={true} style={styles.container} showsHorizontalScrollIndicator={false}>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="addfolder" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>
          Entereds
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="tagso" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>
          Purchases
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="creditcard" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>
          Wallet
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="barcode" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>
          Tickets
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="setting" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>
          Account
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 84,
    marginBottom: 14,
    marginTop: 18,
    paddingEnd: 18,
    paddingStart: 14
  },
  actionButton: {
    alignItems: 'center',
    marginRight: 32,
  },
  areaButton: {
    backgroundColor: '#ecf0f1',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  labelButton:{
    marginTop: 4,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

export default Actions;