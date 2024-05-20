import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 16
  },
  header: {
    backgroundColor: colors.gray700,
    paddingVertical: 72,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    gap: 4,
    paddingHorizontal: 24,
    position: 'absolute',
    top: 144,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: colors.gray500,
    borderRadius: 6,
    color: colors.gray100,
    fontFamily: 'Inter-Regular',
    padding: 16,
    lineHeight: 22,
    fontSize: 16,
  },
  inputFocused: {
    borderColor: colors.purpleDark,
    borderWidth: 2,
  },
  button: {
    height: 56,
    width: 56,
    backgroundColor: colors.blueDark,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  }
})