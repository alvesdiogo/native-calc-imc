import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  form: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 16,
    paddingTop: 40,
  },
  container: {
    width: '100%',
    height: '100%',
  },
  inputContainer: {
    justifyContent: 'left',
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    fontSize: 14,
    width: '100%',
    backgroundColor: '#F5F5F5',
    borderRadius: 100,
    paddingLeft: 20,
    paddingRight: 20,
  },
  resultImc: {
    color: '#FF0043',
  },
  button: {
    backgroundColor: '#FF0043',
    borderRadius: 100,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  errorMessage: {
    fontSize: 10,
    color: '#FF0043',
  },

  exhibitionResultImc: {
    width: '100%',
    height: '50%',
  },
  resultImcItem: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FF0043',
    width: '100%',
    paddingRight: 20,
  },
  textResultItemList: {
    fontSize: 16,
    color: '#FF0043',
  },
});

export default styles;
