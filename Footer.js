import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Footer = (props) => {
  const { textStyle, backFooter } = styles;
  return (
    <View style={backFooter}>
      <Text style={textStyle}>Copyright @Ainul Mardiah 2019</Text>
    </View>
  );
};
const styles = {
    backFooter: {
      backgroundColor: 'pink',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      paddingBottom: 10,
      position: 'relative',
    },
    textStyle: {
      fontSize: 18,
      color: 'black',
      textAlign: 'center'
    }
};
export default Footer;
