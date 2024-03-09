import React, {ReactNode, useMemo, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Colors} from '../../constants/Colors';
import ButtonComponent from './ButtonComponent';
import LineComponent from './LineComponent';
import RowComponent from './RowComponent';
import SessionComponent from './SessionComponent';

interface Props {
  placeholder: string;
  iconRightFirst: ReactNode;
  iconRightSecond: ReactNode;
  borderRadius?: number;
}

const InputMessengerScreenComponent = (props: Props) => {
  console.log(
    '================InputMessengerScreenComponent====================',
  );
  const {placeholder, iconRightFirst, iconRightSecond, borderRadius} = props;
  const [messenger, setMessenger] = useState('');
  const memoizedMessenger = useMemo(() => messenger, [messenger]);
  return (
    <View style={styles.container}>
      <LineComponent />
      <SessionComponent padding={10}>
        <RowComponent justify={'space-between'} alignItems="center">
          <TextInput
            value={memoizedMessenger}
            onChangeText={val => setMessenger(val)}
            placeholder={placeholder}
            style={[styles.input, {borderRadius: borderRadius ?? 5}]}
          />
          <ButtonComponent
            paddingHorizontal={10}
            onPress={() => {}}
            previousIcon={iconRightFirst}
          />
          <ButtonComponent onPress={() => {}} previousIcon={iconRightSecond} />
        </RowComponent>
      </SessionComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  input: {
    paddingLeft: 10,
    backgroundColor: Colors.GREY_5,
    flex: 1,
  },
});
export default InputMessengerScreenComponent;
