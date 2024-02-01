import React from 'react';
import {TamaguiProvider, createTamagui} from 'tamagui';
import {config} from '@tamagui/config/v2';
const tamaguiConfig = createTamagui({
  ...config,
});
type Conf = typeof tamaguiConfig;
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
const ThemeProvider = ({children}: any) => {
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light_purple">
      {children}
    </TamaguiProvider>
  );
};

export {ThemeProvider};
