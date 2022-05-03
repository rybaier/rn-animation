import React from 'react'
import { View, Animated, Text, StyleSheet, Dimensions, 
    PanResponder, PanResponderCallbacks } from 'react-native'
import { Card, Button, Image } from 'react-native-elements'

const Deck = ({ data, renderCard }) => {
    const SCREEN_WIDTH = Dimensions.get('window').width

    let position = new Animated.ValueXY()

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove : (event, gesture ) =>{ 
            position.setValue({ x: gesture.dx, y: gesture.dy })
        },
        onPanResponderRelease: () => {
            resetPosition()
        }
        
    })
    
    const resetPosition = () => {
        
    }

    const getCardStyle = () => {
        const rotate = position.x.interpolate({
            inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
            outputRange: ['120deg', '0deg', '120deg']
        })

        return {
            ...position.getLayout(),
            transform: [{ rotate }]
        }}

      const renderCards = () => data.map((item, index) => {
            if (index === 0) {
                return(
                    <Animated.View 
                    key = {item.id}
                    style= {getCardStyle()} 
                    {...panResponder.panHandlers}>
                        { renderCard(item)}
                    </Animated.View>
                )
            }
            return renderCard(item)
      });
    
      
    return <View>{renderCards()}</View>;
}

export default Deck
