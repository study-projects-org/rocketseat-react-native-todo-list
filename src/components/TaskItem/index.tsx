import { Text, TouchableOpacity, View } from "react-native";
import Icon from '@expo/vector-icons/MaterialIcons';
import { colors } from "../../constants/colors";
import { styles } from "./styles";

type TaskItemProps = {
  title: string;
  isCompleted: boolean;
  onToggleCompletion: () => void;
  onDelete: () => void;
};

export function TaskItem({ title, isCompleted, onToggleCompletion, onDelete }: TaskItemProps) {

  const checkboxIcon = isCompleted ? <Icon name="check-circle" size={24} color={colors.purpleDark} /> : <Icon name="radio-button-unchecked" size={24} color={colors.blue} />;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.checkbox}
        onPress={onToggleCompletion}
      >
        {checkboxIcon}
      </TouchableOpacity>

      <Text
        style={[styles.taskText, isCompleted && styles.completedTaskText]}
      >
        {title}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onDelete}
      >
        <Icon name='delete-outline' size={24} color={colors.gray300} />
      </TouchableOpacity>
    </View>
  );
};