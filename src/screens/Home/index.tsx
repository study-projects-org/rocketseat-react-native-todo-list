import { View, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import Icon from '@expo/vector-icons/MaterialIcons';
import { styles } from "./styles";
import { colors } from "../../constants/colors";
import { useState } from "react";
import { TaskList } from "../../components/TaskList";
import { Task } from "../../models/task";

export function Home() {
  const [isFocused, setIsFocused] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskTitle, setTaskTitle] = useState('');

  function handleAdd(taskTitle: string) {
    if (taskTitle.trim() === '') {
      Alert.alert('Erro', 'Por favor, insira um título para a tarefa');
      return;
    }

    setTasks(prevState => [
      {
        id: new Date().getTime(),
        title: taskTitle,
        isCompleted: false
      },
      ...prevState
    ]);
    setTaskTitle('');
  }

  function handleToggleCompletion(id: number) {
    setTasks(prevState =>
      prevState.map(task => {
        if (task.id === id) {
          return {
            ...task,
            isCompleted: !task.isCompleted
          }
        }

        return task;
      })
    )
  }

  function handleDelete(id: number) {
    Alert.alert('Excluir', 'Deseja realmente excluir esta tarefa?', [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: () => {
          setTasks(prevState => prevState.filter(task => task.id !== id));
        }
      }
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/images/logo.png')} />
      </View>
      <View style={styles.form}>
        <TextInput
          value={taskTitle}
          onChangeText={setTaskTitle}
          style={[styles.input, isFocused && styles.inputFocused]}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={colors.gray300}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAdd(taskTitle)}
        >
          <Icon name='add-circle-outline' size={24} color={colors.gray100} />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <TaskList
          tasks={tasks}
          onToggleCompletion={handleToggleCompletion}
          onDelete={handleDelete}
        />
      </View>
    </View>
  )
}