import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Modal,
  FlatList,
  ScrollView,
} from "react-native";
import { Header, Icon } from "react-native-elements";
import { useState, useEffect } from "react";
import ExerciseItem from "../components/ExerciseItem";
import Timer from "../components/Timer";

function Home(props) {
  const [exercises, setExercises] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalTimerVisible, setIsModalTimerVisible] = useState(false);
  const [name, setName] = useState("");
  const [repetitions, setRepetitions] = useState("");
  const [min, setMin] = useState("");
  const [sec, setSec] = useState("");
  const [isAddButtonEnabled, setIsAddButtonEnabled] = useState(false);
  const [timerValue, setTimerValue] = useState(8);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const showModalTimer = (id) => {
    exercises.forEach((exercise) =>{ if (exercise.id === id) {
      setTimerValue((exercise.min * 60)+(exercise.sec));
  }})
    setIsModalTimerVisible(true);
  };

  const hideModalTimer = () => {
    setIsModalTimerVisible(false);
  };

  //to remove an Item from the ExercisesList
  const onRemoveItem = (id) => {
    const filteredExercises = exercises.filter(
      (exercise) => exercise.id !== id
    );
    setExercises(filteredExercises);
  };


 
  const decreaseRepetitions = (id) => {
    const updatedExercises = exercises.map((exercise) => {
      if (exercise.id === id) {
        return { ...exercise, repetitions: exercise.repetitions - 1 };
      }
      return exercise;
    });
    setExercises(updatedExercises);
  };


  //to validate inputs of the form "AddExercise"
  const validateInputs = () => {
    const nameValid = name.length >= 1 && name.length <= 20;
    const repetitionsValid = parseInt(repetitions) >= 1;
    const minValid = parseInt(min) >= 0 && parseInt(min) <= 59;
    const secValid = parseInt(sec) >= 0 && parseInt(sec) <= 59;

    return nameValid && repetitionsValid && minValid && secValid;
  };

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleRepetitionsChange = (text) => {
    setRepetitions(text);
  };

  const handleMinChange = (text) => {
    setMin(text);
  };

  const handleSecChange = (text) => {
    setSec(text);
  };

  const addExerciseHandler = () => {
    const newExercise = {
      name: name,
      repetitions: parseInt(repetitions),
      min: parseInt(min),
      sec: parseInt(sec),
      id: Math.floor(Math.random() * 10000).toString(),
    };
    setExercises([...exercises, newExercise]);
    setName("");
    setRepetitions("");
    setMin("");
    setSec("");
    hideModal();
  };

  useEffect(() => {
    setIsAddButtonEnabled(validateInputs());
  }, [name, repetitions, min, sec]);


  useEffect(() => {
    exercises.forEach((exercise) =>{ 
    if(exercise.repetitions === 0 ) onRemoveItem(exercise.id);
  })
  }, [exercises]);
 

  return (
    <View>
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
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View>
            <Text style={{ fontWeight: "bold" }}>ADD EXERCISE</Text>
          </View>

          <TextInput
            style={styles.textInput}
            placeholder="EXERCISE NAME"
            value={name}
            onChangeText={handleNameChange}
          />
          <Text>(Min 1 Max 20 characters)</Text>
          <TextInput
            style={styles.textInput}
            placeholder="REPETITIONS"
            value={repetitions}
            onChangeText={handleRepetitionsChange}
            keyboardType="numeric"
          />
          <Text>(Min 1)</Text>
          <TextInput
            style={styles.textInput}
            placeholder="MINUTES"
            value={min}
            onChangeText={handleMinChange}
            keyboardType="numeric"
          />
          <Text>(Min 0 Max 59)</Text>
          <TextInput
            style={styles.textInput}
            placeholder="SECONDS"
            value={sec}
            onChangeText={handleSecChange}
            keyboardType="numeric"
          />
          <Text>(Min 0 Max 59)</Text>
        </View>
        
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-around",
            marginTop:15
          }}
        >
          <View style={styles.buttonCancel}>
            <Button color="red" title="CANCEL" onPress={hideModal} />
          </View>
          <View style={styles.buttonAdd}>
            <Button
              color="lime"
              title="ADD"
              onPress={addExerciseHandler}
              disabled={!isAddButtonEnabled}
            />
          </View>
        </View>
        </ScrollView>
      </Modal>





      <FlatList
        data={exercises}
        renderItem={({ item }) => (
          <ExerciseItem
          showTimer={showModalTimer}
          onDecreaseRepetitions={decreaseRepetitions}
            onRemoveExercise={onRemoveItem}
            title={item.name}
            repetitions={item.repetitions}
            min={item.min}
            sec={item.sec}
            id={item.id}
          />
        )}
        keyExtractor={(item) => item.id}
      />










  <Modal visible={isModalTimerVisible} >
  <View
          style={{ flex: 1, justifyContent: "center" }}
        >
    <Timer 
    initialValue={timerValue}
    nextExercise={hideModalTimer}></Timer>
    </View>
  </Modal>






    </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    width: "80%",
    borderColor: "#cccccc",
    marginRight: 8,
    marginTop: 35,
    padding: 8,
  },
  buttonCancel: {
    width: 100,
  },
  buttonAdd: {
    width: 100,
  },
});
