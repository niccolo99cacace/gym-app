import { StyleSheet,View, Text, Button, TextInput, TouchableOpacity,Modal } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Header, Icon } from 'react-native-elements';
import { useState } from 'react';

function Home(props) {
    const [exercises, setExercises] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [name, setName] = useState("");
    const [repetitions, setRepetitions] = useState("");
    const [min, setMin] = useState("");
    const [sec, setSec] = useState("");
  
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const hideModal = () => {
      setIsModalVisible(false);
    };
  
    const addExerciseHandler = () => {
      const newExercise = {
        name: name,
        repetitions: parseInt(repetitions),
        time: `${min}:${sec}`,
        key: Math.floor(Math.random() * 10000).toString(),
      };
      setExercises([...exercises, newExercise]);
      setName("");
      setRepetitions("");
      setMin("");
      setSec("");
      hideModal();
    };
  
    return (
      <View >
        <Header
          backgroundColor="lime"
          centerComponent={{
            text: "GYM MOMENT",
            style: { color: "#000", fontSize: 18, fontWeight: "bold" },
          }}
          centerContainerStyle={{ justifyContent: "center" }}
          rightComponent={<Icon name="add" color="#000" onPress={showModal} />}
        />
        <Modal visible={isModalVisible} animationType="slide">
          <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
            <View >
              <Text >ADD EXERCISE</Text>
            </View>
            
              <TextInput
              style={styles.textInput}
                placeholder="EXERCISE NAME"
                value={name}
                onChangeText={setName}
              />
              <TextInput
              style={styles.textInput}
                placeholder="REPETITIONS"
                value={repetitions}
                onChangeText={setRepetitions}
                keyboardType="numeric"
              />
              
                <TextInput
                style={styles.textInput}
                  placeholder="MINUTES"
                  value={min}
                  onChangeText={setMin}
                  keyboardType="numeric"
                />
                <TextInput
                style={styles.textInput}
                  placeholder="SECONDS"
                  value={sec}
                  onChangeText={setSec}
                  keyboardType="numeric"
                />
                </View>

            <View style={{flexDirection: 'row',flex:1,justifyContent: "space-around" }}>
            <View style={styles.buttonCancel}>
              <Button  color="red" title='CANCEL' onPress={hideModal}  />
              </View>
              <View style={styles.buttonAdd}>
              <Button color="lime" title='ADD' onPress={addExerciseHandler} /></View>
            
              
          </View>
        </Modal>
        {/* List of Exercises */}
      </View>
    );
  }
export default Home;



const styles = StyleSheet.create({
    textInput: {
      borderWidth: 1,
      width:'80%',
      borderColor: '#cccccc',
      marginRight: 8,
      marginTop: 35,
      padding: 8,
    },
    buttonCancel: {
        width:100,
      },
      buttonAdd: {
        width:100,
        
      },
  });
  