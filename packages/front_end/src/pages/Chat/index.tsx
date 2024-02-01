import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text, View} from 'tamagui';

const Chat = () => {
  const insets = useSafeAreaInsets();
  return (
    <View mt={insets.top}>
      <Text>Chat</Text>
    </View>
  );
};
export {Chat};
