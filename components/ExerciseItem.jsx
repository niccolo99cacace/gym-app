import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity,Modal} from 'react-native';
import { Icon } from 'react-native-elements';

function ExerciseItem({ onRemoveExercise, title, repetitions, minutes, seconds, id}) {
  const [showButtons, setShowButtons] = useState(false);



  const removeExercise = (id) => {
    onRemoveExercise(id);
    console.log(id);
  };

  return (
    <View style={styles.container}>
      
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
        <Text style={styles.itemTitle}>{id}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.itemDetail}>Repetitions: {repetitions}</Text>
          <Text style={styles.itemDetail}>
            {minutes} min {seconds} sec
          </Text>
          <TouchableOpacity style={styles.iconContainer}>
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
  container: {
    flex: 1,
  },
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