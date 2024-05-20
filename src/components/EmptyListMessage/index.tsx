import { View, Text } from "react-native";
import Icon from '@expo/vector-icons/MaterialIcons';
import { colors } from "../../constants/colors";
import { styles } from "./styles";

export function EmptyListMessage() {
  return (
    <>
      <View style={styles.divider}></View>
      <View style={styles.container}>
        <Icon name='assignment' size={56} color={colors.gray300} />
        <Text style={styles.title}>
          Você ainda não tem tarefas cadastradas
        </Text>

        <Text style={styles.subtitle}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </>
  );
}