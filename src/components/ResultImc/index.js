import React from 'react';
import {Text, View } from 'react-native';
import Form from '../Form/'

export default function ResultImc(props) {
  return (
    <View>
      <Text>{props.messageResultImc}</Text>
      <Text>{props.ResultImc}</Text>
    </View>
  );
}