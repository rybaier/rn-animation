import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,  } from 'react-native';
import { Card, Button, Image } from 'react-native-elements'

// import Ball from './src/Ball';
import Deck from './src/Deck';

const DATA = [
  { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];

const renderCard = (item) => {
  return(
    <Card key={item.id}  >
      <Card.Title>{ item.text }</Card.Title>
      <Card.Image source={{uri: item.uri}} style={{ padding: 0}}/>
      <Text> I can customize the Card Further</Text>
      <Button icon={{name: 'code'}} backgroundColor='#03A9F4' title='View Now!' />
    </Card>
  )
}
export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Deck data ={ DATA } renderCard= { renderCard }/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
