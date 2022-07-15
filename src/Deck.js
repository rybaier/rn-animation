import React, { useState, useEffect } from 'react'
import { View, Animated, Text, StyleSheet, Dimensions, LayoutAnimation, UIManager,
    PanResponder, PanResponderCallbacks } from 'react-native'
import { Card, Button, Image } from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width

const Deck = ({ data, renderCard, onSwipeRight, onSwipeLeft, renderNoMoreCards }) => {
    
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
                console.log(gesture.dx)
                forseSwipe('right')
                console.log('swipe right')
            } else if (gesture.dx < (SWIPE_THRESHOLD * -1)) {
                console.log(SWIPE_THRESHOLD)
                forseSwipe('left')
                console.log('swipe left')
            } else {
                resetPosition()
                console.log('reset')
            }
        }
        
    })
    
    useEffect (() => {
        setIndex(0)
    }, [ data ])

    
    const forseSwipe = (direction) => {
        const x = direction ==='right' ? SCREEN_WIDTH : -SCREEN_WIDTH
        Animated.timing(position, {toValue: { x: x, y: 0 }, 
        duration: SWIPEOUT_DURATION, 
        useNativeDriver: false}).start(() => onSwipeComplete(direction))
    }

    const onSwipeComplete = (direction) => {
        const item = data[index]

        direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item) 
        setIndex(index + 1)
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)
        LayoutAnimation.spring()
        position.setValue({ x: 0, y: 0 })

    }

    const resetPosition = () => {
        Animated.spring(position, {toValue: {x: 0, y:0 },
        useNativeDriver: false}).start()
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

    // const areThereCards = () => {
    //     console.log(index, data.length)
    //      index >= data.length ? renderNoMoreCards() : renderCards()
    //   }
      
      const renderCards = () => data.map((item, i) => {
        //   if ( index >= data.length) { return renderNoMoreCards() }

          if (i < index) { return null }

          if (i === index) {
                return(
                    <Animated.View 
                    key = {item.id}
                    style= {[ getCardStyle(), styles.cardStyle ]} 
                    {...panResponder.panHandlers}>
                        { renderCard(item)}
                    </Animated.View>
                )
            }
            return (
                <Animated.View
                 key={item.id} 
                style={[styles.cardStyle, { top: 20 * ( i - index ) }]}>
                    { renderCard(item) }
                </Animated.View>
            )
      }).reverse();
    
  
    return <View>{index >= data.length ? renderNoMoreCards() : renderCards()}</View>;
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    cardStyle: {
        position: 'absolute',
        width: SCREEN_WIDTH,
    }
})
export default Deck



   