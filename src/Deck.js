import React from 'react'
import { View, Animated, Text, StyleSheet, PanResponder, PanResponderCallbacks } from 'react-native'
import { Card, Button, Image } from 'react-native-elements'
const Deck = ({ data, renderCard }) => {
 
    let position = new Animated.ValueXY()

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove : (event, gesture ) =>{ 
            position.setValue({ x: gesture.dx, y: gesture.dy })
        },
        onPanResponderRelease: () => {

        }
    })

      const renderCards = () => { 
          data.map((item, index) => {
            if (index === 0) {
                return(
                    <Animated.View 
                    style= {position.getLayout()} 
                    {...panResponder.panHandlers}>
                        { renderCard(item)}
                    </Animated.View>
                )
            }
            return renderCard(item)
        });
    }
      
    return <View>{renderCards()}</View>;
}

export default Deck
