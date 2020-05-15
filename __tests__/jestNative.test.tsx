import React from 'react';
import {View, Text, Button} from 'react-native';
import {render} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

test('toHaveProp works correctly', () => {
  const {queryByTestId} = render(
    <View>
      <Text allowFontScaling={false} testID="text">
        text
      </Text>
      <Button disabled testID="button" title="ok" />
    </View>,
  );

  expect(queryByTestId('button')).toHaveProp('accessibilityStates', [
    'disabled',
  ]);
  expect(queryByTestId('button')).toHaveProp('accessible');
  expect(queryByTestId('button')).not.toHaveProp('disabled');
  expect(queryByTestId('button')).not.toHaveProp('title', 'ok');
});
