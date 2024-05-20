import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginTop: 56,
  },
  headerList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%'
  },
  title: {
    fontSize: 14,
    fontFamily: 'Inter-Bold',
  },
  created: {
    color: colors.blue,
  },
  completed: {
    color: colors.purple
  },
  amount: {
    fontSize: 12,
    fontFamily: 'Inter-Bold',
    color: colors.gray200,
    backgroundColor: colors.gray400,
    borderRadius: 999,
    textAlign: 'center',
    paddingHorizontal: 8,
  },
  titleGroup: {
    gap: 16,
    flexDirection: 'row',
  },
})