import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { EmptyListMessage } from "../EmptyListMessage";
import { TaskItem } from "../TaskItem";
import { Task } from "../../models/task";

type TaskListProps = {
  tasks: Task[];
  onToggleCompletion: (id: number) => void;
  onDelete: (id: number) => void;
}

export function TaskList({ tasks, onToggleCompletion, onDelete }: TaskListProps) {
  const createdTasksCount = tasks.length;
  const completedTasksCount = tasks.filter(task => task.isCompleted).length;
  
  const sortedTasks = tasks.sort((a, b) => { 
    if (a.isCompleted === b.isCompleted) {
      return a.id - b.id;
    }
    return a.isCompleted ? 1 : -1;
  });

  console.info('TaskList loaded');


  return (
    <View style={styles.container}>

      <View style={styles.headerList}>

        <View style={styles.titleGroup}>
          <Text style={[styles.title, styles.created]}>Criadas</Text>
          <Text style={[styles.amount]}>{createdTasksCount}</Text>
        </View>

        <View style={styles.titleGroup}>
          <Text style={[styles.title, styles.completed]}>Concluídas</Text>
          <Text style={[styles.amount]}>{completedTasksCount}</Text>
        </View>
      </View>

      <FlatList
        data={sortedTasks}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <TaskItem
            title={item.title}
            isCompleted={item.isCompleted}
            onToggleCompletion={() => onToggleCompletion(item.id)}
            onDelete={() => onDelete(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <EmptyListMessage />
        )}
        contentContainerStyle={{ paddingBottom: 32 }}
      />
    </View>
  )
}
