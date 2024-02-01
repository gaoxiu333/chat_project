import React from 'react';
import {Button, H1, Spinner, Theme, View} from 'tamagui';

const Page = ({navigation}: any) => {
  return (
    <View>
      <Button onPress={() => navigation.navigate('Profile', {name: 'Jane'})}>
        Go to Jane's profile
        <Spinner size="large" color="$green10" />
      </Button>
      <H1>title</H1>
      <Theme name="dark">
        <Button>I'm a dark button</Button>
      </Theme>
      <Theme name="dark">
        <Button>I have the theme dark</Button>
        <Theme name="pink">
          <Button>I have the theme pink-dark</Button>
        </Theme>
      </Theme>
    </View>
  );
};

export default Page;
