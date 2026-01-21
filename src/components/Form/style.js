import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 16,
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  inputContainer: {
    paddingTop: 20,
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
    marginTop: 40,
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
});

export default styles;
