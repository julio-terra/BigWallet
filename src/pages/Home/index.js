import { 
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';


export default function App() {
  const list = [
    {
      id:1,
      label: 'Smartphone',
      value: '300.90',
      date: '09/22/2022',
      type: 0 //expenses
    },
    {
      id:2,
      label: 'Wage',
      value: '10,000.90',
      date: '09/14/2022',
      type: 1 //gain
    },
    {
      id:3,
      label: 'Laptop',
      value: '1,500.90',
      date: '09/18/2022',
      type: 0 //expenses
    },
    
  ]
  return (
    <View style={styles.container}>
      <Header 
        name="Júlio Terra"
        />
      <Balance 
        balance="15,000.00" 
        expenses="390.00"
        />
      <Actions /> 
      <Text style={styles.title}>last movements</Text>
      <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Movements data={item} />}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
});
