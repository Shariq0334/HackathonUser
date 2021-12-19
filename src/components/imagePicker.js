import React, { useState, useEffect } from 'react';
import { Button, Image, View,} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImageSelector({uriState, setUriState, buttonText}) {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setUriState(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
      <Button title={buttonText} onPress={pickImage} />
      {uriState && <Image source={{ uri: uriState }} style={{ width: 200, height: 200, marginTop: 10 }} />}
    </View>
  );
}