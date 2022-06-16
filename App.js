import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,  } from 'react-native';
import { Card, Button, Image } from 'react-native-elements'

// import Ball from './src/Ball';
import Deck from './src/Deck';

const DATA = [
  { id: 1, text: 'Card #1', uri: 'https://lh3.googleusercontent.com/A9EW40zeq5iG7y9tr2qHD6v2ZwhUl2SKa-2ZCQl-KUybMOOBSDAI76FoZyXD-SSg2fdyysN57VWaTpteL9XyIiFNU0StpFaN5uCnuGOE7VW-ZYqts-xycS5u5mcD6nywqBrjscaO' },
  { id: 2, text: 'Card #2', uri: 'https://lh6.googleusercontent.com/ebUn8EDjkj6PptHigEabCR6Qi-fG2Ji_40H7g0CQPgFPo5NFJ_MojkmxShYKDwAAQu1x5ksJcyGTS1lPluZA0nNUlT375oPXogmfnjxCqU92-B6HSTF_YeAGQABPOxQ0O6YvcUDb' },
  { id: 3, text: 'Card #3', uri: 'https://lh4.googleusercontent.com/xKalcaU2zFyXZm1KVe-49EZ3T3Ti4r27iCf5gEa7yWGxq3d9-gDBcZJv-N8HIXDyvVPMGWBSvDN4eah367NGji81VTTA6QfyT0_xDJV5r5ZM4XmloFzoT6IDvnyK8RHHGoGcu28M' },
  { id: 4, text: 'Card #4', uri: 'https://lh5.googleusercontent.com/wKadmy0QrjAS54a7UeMUrx3nqHXNeeiUHFI6St77m0Q8_6uf3Sdp3LU2VK4ZvUFuS4nXMUywTboqZUdSn0O9lktaFeuO9XdoEl4xvEDRzh82Uy6PgIRchX3P6rVtQ-loa6TYpgXy' },
  { id: 5, text: 'Card #5', uri: 'https://lh4.googleusercontent.com/SwZ2dhIWzeCC7sTt4DWpUUSSlrjrKqNg0uzb4qUuOFjnsfVKdqqxoqK4cNKEJF9i-Rw3_u-_65rN1_kWrhUbAz2A31YY_hOTHq1WMM5FLvwCG1-P98yZv4IHvWP0zJtdnPoPJ1kL' },
  { id: 6, text: 'Card #6', uri: 'https://lh3.googleusercontent.com/k2x-DQyF_N3Uk3qcwKTciySeeJxE_KQ1481lHAXvoBalMysE-TaAik6wM96hhzYzqcGNE2HKysAtGsH8BscwpMd4Pd-5nlVxzUC9vIqsyc1596mxY8rRfKqAxF6I7b9PSartmncp' },
  { id: 7, text: 'Card #7', uri: 'https://lh4.googleusercontent.com/xKalcaU2zFyXZm1KVe-49EZ3T3Ti4r27iCf5gEa7yWGxq3d9-gDBcZJv-N8HIXDyvVPMGWBSvDN4eah367NGji81VTTA6QfyT0_xDJV5r5ZM4XmloFzoT6IDvnyK8RHHGoGcu28M' },
  { id: 8, text: 'Card #8', uri: 'https://lh5.googleusercontent.com/mUe7DY3Ei2zKYN3uz_-ML0pYu6rOZuk8lJ1OaCV2CUGoyFrWS6JbJ-rkdgX1e6rIvKvIkbBk9ljjYFWMdk36rv9sEIdT1ZdEhmsHRwo84VWEU6RZbtIAQjfB6gABj7NQwgpX8p8d' },
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
const renderNoMoreCards = (item) => {
  return(
    <Card key={'empty card'}>
      <Card.Title> All Done!</Card.Title>
      <Text> There's no more cards to view</Text>
      <Button icon={{name: 'code'}} backgroundColor='#03A9F4' title='Get More!' />
    </Card>
  )
}
const onSwipeRight = () => {

}
const onSwipeLeft = () => {

}

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Deck data ={ DATA } renderCard= { renderCard }
      onSwipeLeft={ onSwipeLeft } onSwipeRight = { onSwipeRight }
      renderNoMoreCards = { renderNoMoreCards }/>
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
