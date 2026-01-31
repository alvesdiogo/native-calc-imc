import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Share } from 'react-native';
import styles from './style';

export default function ResultImc(props) {

  const onShare = async () => {
    const result = await Share.share({
      message: `Meu IMC é ${props.result} eu estou ${props.messageResult}`,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.boxSharedbutton}>
        <Text style={styles.text}>{props.message}</Text>
        <Text style={styles.result}>{props.result}</Text>
        <Text style={styles.text}>{props.messageResult}</Text>
        <TouchableOpacity style={styles.shared} onPress={onShare}>
          <Text style={styles.sharedText}>Compartilhar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
