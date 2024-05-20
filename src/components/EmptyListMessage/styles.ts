import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical:48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: colors.gray400,
    width: '100%',
    marginBottom: 20,
  },
  title: {
    color: colors.gray300,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'bold',
    fontFamily: 'Inter-Bold',
    marginTop: 16,
  },
  subtitle: {
    color: colors.gray300,
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Inter-Regular',
  },
})