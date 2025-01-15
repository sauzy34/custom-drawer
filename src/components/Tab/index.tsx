import React, {memo} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface Props extends TouchableOpacityProps {
  label: string;
}

function Tab({label, ...rest}: Props) {
  return (
    <TouchableOpacity {...rest}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    color: '#fff',
  },
});

export default memo(Tab);
