import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingStart: 12,
    paddingVertical: 12,
    paddingEnd: 8,
    borderRadius: 8,
    backgroundColor: colors.gray500,
    marginBottom: 8,
  },
  checkbox: {
    height: 24,
    width: 24,
  },
  taskText: {
    flex: 1,
    color: colors.gray100,
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Inter-Regular',
  },
  completedTaskText: {
    textDecorationLine: 'line-through',
    color: colors.gray300,
  },
  button: {
    height: 32,
    width: 32,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  }
})