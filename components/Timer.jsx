import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const Timer = () => {
    const initialValue = 7;
    const [timerValue, setTimerValue] = useState(initialValue);
    const [isActive, setIsActive] = useState(false);
  
    useEffect(() => {
      let interval;
  
      if (isActive && timerValue > 0) {
        interval = setInterval(() => {
          setTimerValue(timerValue - 1);
        }, 1000);
      } else {
        clearInterval(interval);
      }
  
      if (timerValue === 0 && isActive) {
        onFinished();
      }
  
      return () => clearInterval(interval);
    }, [isActive, timerValue]);
  
    const resetTimer = () => {
      setTimerValue(initialValue);
    };
  
    const toggleTimer = () => {
      setIsActive(!isActive);
    };
  
    const radius = 110;
    const strokeWidth = 20;
    const circleCircumference = 2 * Math.PI * radius;
    const progress = (timerValue / initialValue) * circleCircumference;
  
    return (
      <View style={styles.container}>
        <Svg width={radius * 2} height={radius * 2} style={styles.timer}>
          <Circle
            cx={radius}
            cy={radius}
            r={radius}
            strokeWidth={strokeWidth}
            stroke="#ddd"
            fill="transparent"
          />
          <AnimatedCircle
            cx={radius}
            cy={radius}
            r={radius}
            strokeWidth={strokeWidth}
            stroke="#3498db"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={`${circleCircumference}, ${circleCircumference}`}
            strokeDashoffset={circleCircumference - progress}
          />
          <Text style={styles.timerText}>{timerValue}</Text>
        </Svg>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={toggleTimer} style={styles.button}>
            <Text style={styles.buttonText}>{isActive ? 'Ferma' : 'Avvia'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={resetTimer} style={styles.button}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const AnimatedCircle = Animated.createAnimatedComponent(Circle);


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    timer: {
      position: 'relative',
    },
    timerText: {
      position: 'absolute',
      fontSize: 40,
      fontWeight: 'bold',
      alignSelf: 'center',
      top: '40%',
    },
    buttonContainer: {
      flexDirection: 'row',
      marginTop: 20,
    },
    button: {
      backgroundColor: '#3498db',
      padding: 15,
      marginHorizontal: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
  });

export default Timer;