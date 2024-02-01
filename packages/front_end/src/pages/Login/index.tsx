import React from 'react';
import {Text, View} from 'tamagui';
const Login = ({navigation}: any) => {
  return (
    <View flex={1} alignItems="center" justifyContent="center">
      <Text onPress={() => navigation.navigate('Content', {screen: 'Chat'})}>
        Login
      </Text>
    </View>
  );
};
export {Login};
