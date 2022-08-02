import React from 'react';
import { 
  View,
  Text, 
  StyleSheet, 
  StatusBar,
  TouchableOpacity
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { MotiView, MotiText } from 'moti';

const statusBarHight = StatusBar.currentHeight? StatusBar.currentHeight + 22 : 64;

const Header = ({name}) => {
  return (
    <View style={styles.container}>
      <MotiView 
        style={styles.content}
        from={{
          translateY: -150,
          opacity: 0
        }}
        animate={{
          translateY: 0,
          opacity: 1
        }}
        transition={{
          type: "timing",
          duration: 800,
          delay: 300
        }}
      >
        <MotiText 
          style={styles.userName}
          from={{
            translateX: -300,
          }}
          animate={{
            translateX: 0,
          }}
          transition={{
            type: "timing",
            duration: 800,
            delay: 800
          }}
        >
          {name}
        </MotiText>
        <TouchableOpacity style={styles.buttonUser} activeOpacity={0.9}>
          <Feather 
            name="user" 
            size={27}
          />
        </TouchableOpacity>
      </MotiView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#8000ff',
    paddingTop: statusBarHight,
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44
  },
  content: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  userName: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
  buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 44 / 2
  }
})
export default Header;