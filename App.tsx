/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useRef} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {DocumentView, RNPdftron, Config} from 'react-native-pdftron';
const App = () => {
  useEffect(() => {
    RNPdftron.initialize('Insert commercial license key here after purchase');
  }, []);
  const docRef = useRef();
  const path =
    'https://pdftron.s3.amazonaws.com/downloads/pl/PDFTRON_mobile_about.pdf';

  return (
    <View style={{paddingTop: 60, flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          docRef.current.setToolMode(Config.Tools.annotationCreateFreeHand);
        }}>
        <Text>Freehand tool</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          docRef.current.setToolMode(Config.Tools.annotationCreateFreeText);
        }}>
        <Text>Freehand Text</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          docRef.current.undo();
        }}>
        <Text>Undo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          docRef.current.redo();
        }}>
        <Text>Redo</Text>
      </TouchableOpacity>
      <DocumentView
        collabEnabled={true}
        currentUser={'Pdftron'}
        ref={docRef}
        document={path}
        autoSaveEnabled={false}
      />
    </View>
  );
};

export default App;
