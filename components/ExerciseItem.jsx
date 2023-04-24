import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity,Modal} from 'react-native';
import { Icon } from 'react-native-elements';


function ExerciseItem({showTimer, onDecreaseRepetitions, onRemoveExercise, title, repetitions, min, sec, id}) {



  const [showButtons, setShowButtons] = useState(false);
 




 
  const  showModalTimer = (id) => {
    showTimer(id);
  };


  const removeExercise = (id) => {
    onRemoveExercise(id);
  };

  const decreaseRepetitions = (id) => {
    onDecreaseRepetitions(id);
  };



  return (
    <View>
    
      
      {showButtons && (
        <View style={styles.buttonsContainer}>
           <TouchableOpacity style={styles.iconContainer2}>
            <Icon name="arrow-upward" type="material" size={24} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconContainer2}>
            <Icon name="arrow-downward" type="material" size={24} />
          </TouchableOpacity>
      
          <TouchableOpacity style={styles.iconContainer2}>
            <Icon name="edit" type="material" size={24} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconContainer2} onPress={() => removeExercise(id)}>
            <Icon name="close" type="material" size={24} color="red" />
          </TouchableOpacity>
        </View>
        )}
      
     
     <View>
      <TouchableOpacity style={styles.itemContainer} onPress={() => setShowButtons(!showButtons)}>
        <Text style={styles.itemTitle}>{title}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.itemDetail}>Repetitions: {repetitions}</Text>
          <Text style={styles.itemDetail}>
            {min} min {sec} sec
          </Text>
          <TouchableOpacity style={styles.iconContainer} onPress={() => {decreaseRepetitions(id);showModalTimer(id);}}>
            <Icon name="fitness-center" type="material" size={24} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      
    </View>

 
</View>
  );
}
export default ExerciseItem;

const styles = StyleSheet.create({
  
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Cambia 'space-between' in 'center'
    alignItems: 'center',
    left: 0,
    right: 0, 
    top: 0,
    bottom: 0,
    width: '100%', // Cambia la larghezza da '50' a '100%'
  backgroundColor:"#eceff1",
  marginTop:4,
  },
  itemContainer: {
    flexDirection: 'column',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    

  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemDetail: {
    fontSize: 14,
  },
  iconContainer: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
  
  },
  iconContainer2: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    marginHorizontal: 20, // Aggiungi un po' di margine orizzontale tra i bottoni
  },
});

/* 

      <Modal visible={isModalVisible} animationType="slide">
        <View>
          <Timer></Timer>
        </View>
      </Modal>

      */