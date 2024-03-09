import React, {useCallback, useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import Voice from '@react-native-voice/voice';

const AddScreen = () => {
  const [recognized, setRecognized] = useState('');
  const [pitch, setPitch] = useState('');
  const [error, setError] = useState('');
  const [end, setEnd] = useState('');
  const [started, setStarted] = useState('');
  const [results, setResults] = useState([]);
  const [partialResults, setPartialResults] = useState([]);

  const requestAudioPermission = async () => {
    try {
      const result = await check(PERMISSIONS.ANDROID.RECORD_AUDIO);
      if (result !== RESULTS.GRANTED) {
        const permissionResult = await request(
          PERMISSIONS.ANDROID.RECORD_AUDIO,
        );
        if (permissionResult !== RESULTS.GRANTED) {
          console.log('Audio recording permission denied.');
          return false;
        }
      }
      return true;
    } catch (error) {
      console.error(
        'Error checking or requesting audio recording permission:',
        error,
      );
      return false;
    }
  };

  const onSpeechStart = useCallback((e: any) => {
    console.log('onSpeechStart: ', e);
    setStarted('√');
  }, []);

  const onSpeechRecognized = useCallback((e: any) => {
    console.log('onSpeechRecognized: ', e);
    setRecognized('√');
  }, []);

  const onSpeechEnd = useCallback((e: any) => {
    console.log('onSpeechEnd: ', e);
    setEnd('√');
  }, []);

  const onSpeechError = useCallback((e: {error: any}) => {
    console.log('onSpeechError: ', e);
    setError(JSON.stringify(e.error));
  }, []);

  const onSpeechResults = useCallback(
    (e: {value: React.SetStateAction<never[]>}) => {
      console.log('onSpeechResults: ', e);
      setResults(e.value);
    },
    [],
  );

  const onSpeechPartialResults = useCallback(
    (e: {value: React.SetStateAction<never[]>}) => {
      console.log('onSpeechPartialResults: ', e);
      setPartialResults(e.value);
    },
    [],
  );

  const onSpeechVolumeChanged = useCallback(
    (e: {value: React.SetStateAction<string>}) => {
      console.log('onSpeechVolumeChanged: ', e);
      setPitch(e.value);
    },
    [],
  );

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechRecognized = onSpeechRecognized;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = () => onSpeechError;
    Voice.onSpeechResults = () => onSpeechResults;
    Voice.onSpeechPartialResults = () => onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = () => onSpeechVolumeChanged;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, [
    onSpeechStart,
    onSpeechRecognized,
    onSpeechEnd,
    onSpeechError,
    onSpeechResults,
    onSpeechPartialResults,
    onSpeechVolumeChanged,
  ]);

  const startRecognizing = async () => {
    setRecognized('');
    setPitch('');
    setError('');
    setStarted('');
    setResults([]);
    setPartialResults([]);
    setEnd('');

    try {
      await Voice.start('en-US');
    } catch (e) {
      console.error(e);
    }
  };

  const stopRecognizing = async () => {
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  };

  const cancelRecognizing = async () => {
    try {
      await Voice.cancel();
    } catch (e) {
      console.error(e);
    }
  };

  const destroyRecognizer = async () => {
    try {
      await Voice.destroy();
    } catch (e) {
      console.error(e);
    }
    setRecognized('');
    setPitch('');
    setError('');
    setStarted('');
    setResults([]);
    setPartialResults([]);
    setEnd('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native Voice!</Text>
      <Text style={styles.instructions}>
        Press the button and start speaking.
      </Text>
      <Text style={styles.stat}>{`Started: ${started}`}</Text>
      <Text style={styles.stat}>{`Recognized: ${recognized}`}</Text>
      <Text style={styles.stat}>{`Pitch: ${pitch}`}</Text>
      <Text style={styles.stat}>{`Error: ${error}`}</Text>
      <Text style={styles.stat}>Results</Text>
      {results.map((result, index) => (
        <Text key={`result-${index}`} style={styles.stat}>
          {result}
        </Text>
      ))}
      <Text style={styles.stat}>Partial Results</Text>
      {partialResults.map((result, index) => (
        <Text key={`partial-result-${index}`} style={styles.stat}>
          {result}
        </Text>
      ))}
      <Text style={styles.stat}>{`End: ${end}`}</Text>
      <TouchableHighlight onPress={startRecognizing}>
        <Image
          style={styles.button}
          source={require('../assets/images/bagIcon2.png')}
        />
      </TouchableHighlight>
      <TouchableHighlight onPress={stopRecognizing}>
        <Text style={styles.action}>Stop Recognizing</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={cancelRecognizing}>
        <Text style={styles.action}>Cancel</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={destroyRecognizer}>
        <Text style={styles.action}>Destroy</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  action: {
    textAlign: 'center',
    color: '#0000FF',
    marginVertical: 5,
    fontWeight: 'bold',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  stat: {
    textAlign: 'center',
    color: '#B0171F',
    marginBottom: 1,
  },
});

export default AddScreen;
