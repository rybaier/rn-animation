import React, { useState } from 'react'
import { View, Animated, Text, StyleSheet, Dimensions, 
    PanResponder, PanResponderCallbacks } from 'react-native'
import { Card, Button, Image } from 'react-native-elements'

const Deck = ({ data, renderCard, onSwipeRight, onSwipeLeft, renderNoMoreCards }) => {
    const SCREEN_WIDTH = Dimensions.get('window').width
    const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH
    const SWIPEOUT_DURATION = 250
    const [index, setIndex]  = useState(0)

    let position = new Animated.ValueXY()
  

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove : (event, gesture ) =>{ 
            position.setValue({ x: gesture.dx, y: gesture.dy })
        },
        onPanResponderRelease: (event, gesture) => {
            if (gesture.dx > SWIPE_THRESHOLD){
                forseSwipe('right')
                console.log('swipe right')
            } else if (gesture.dx < SWIPE_THRESHOLD) {
                forseSwipe('left')
                console.log('swipe left')
            } else {
                resetPosition()
            }
        }
        
    })
    
    const forseSwipe = (direction) => {
        const x = direction ==='right' ? SCREEN_WIDTH : -SCREEN_WIDTH
        Animated.timing(position, {toValue: { x: x, y: 0 }, 
        duration: SWIPEOUT_DURATION }).start(() => onSwipeComplete(direction))
    }

    const onSwipeComplete = (direction) => {
        // const { onSwipeLeft, onSwipeRight } 
        const item = data[index]

        direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item) 
        setIndex(index + 1)
        position.setValue({ x: 0, y: 0 })
    }

    const resetPosition = () => {
        Animated.spring(position, {toValue: {x: 0, y:0 }}).start()
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

      const renderCards = () => data.map((item, i) => {
     
          if (i < index){ return null }

            if (i === index) {
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
    
      const areThereCards = () => {
         index >= data.length ? renderNoMoreCards : renderCards
      }
      
    return <View>{renderCards()}</View>;
}

export default Deck



   