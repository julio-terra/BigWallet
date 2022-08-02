import React, { useState } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity
 } from 'react-native';


const Movements = ({data}) => {
  const [showValue, setShowValue] = useState(false);

  return (
    <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)}>
      <Text>{data.date}</Text>
      <View style={styles.content}>
        <Text style={styles.label}>
          {data.label}
        </Text>
        {
          showValue? (
            <Text style={data.type === 1 ? styles.value : styles.expenses}>
              {data.type === 1 ?  `$ ${data.value}` : `$ -${data.value}`}
            </Text>
          ) : (
            <Text style={styles.skeleton}>*****</Text>
          )
        }
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: '#dadada'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
    marginBottom: 8
  },
  date: {
    color: '#dadada',
    fontWeight: 'bold'
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16
  },
  value: {
    color: '#2ecc71',
    fontSize: 16
  },
  expenses: {
    color: '#e74c3c',
    fontSize: 16
  },
  skeleton: {
    fontSize: 16
  }
})

export default Movements;