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

import {
  DocumentView,
  RNPdftron,
  Config,
} from './submodules/pdftron-react-native';
const App = () => {
  useEffect(() => {
    RNPdftron.initialize(
      'NITROLABS LIMITED(luminPDF.com):OEM:LuminPDF::IA+:AMS(20220417):97B559530487480A73603E3AC992737860617F7ED708A57544D7C609FDB7F3F25629BEF5C7',
    );
  }, []);
  const docRef = useRef();
  const path =
    'https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf';
  const onDocumentLoaded = () => {
    if (docRef.current) {
      const xfdfCommand =
        '<?xml version="1.0" encoding="UTF-8"?><xfdf xmlns="http://ns.adobe.com/xfdf/" xml:space="preserve"><add><circle style="solid" width="5" color="#E44234" opacity="1" creationdate="D:20201218025606Z" flags="print" date="D:20201218025606Z" name="9d0f2d63-a0cc-4f06-b786-58178c4bd2b1" page="0" rect="56.4793,584.496,208.849,739.369" title="PDF" /></add><modify /><delete /><pdf-info import-version="3" version="2" xmlns="http://www.pdftron.com/pdfinfo" /></xfdf>';
      docRef.current?.importAnnotationCommand(xfdfCommand).catch(err => {
        console.log(err);
      });
    }
  };
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
          docRef.current.setToolMode(Config.Tools.pan);
        }}>
        <Text>Freehand Text</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          docRef.current.findText('PDFTron', false, false, true, false);
        }}>
        <Text>Search Text</Text>
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
        onDocumentLoaded={onDocumentLoaded}
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
