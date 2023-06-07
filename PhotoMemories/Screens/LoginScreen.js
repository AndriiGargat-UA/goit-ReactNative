import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/photoBG.png")}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.loginContainer}>
          <Text style={styles.title}>Увійти</Text>
          <TextInput
            style={styles.input}
            placeholder="Адреса електронної пошти"
          />
          <TextInput style={styles.input} placeholder="Пароль" />
          <TouchableOpacity style={styles.logInButton}>
            <Text style={styles.logInBtnText}>Увійти</Text>
          </TouchableOpacity>
          <Text style={styles.text}>Немає акаунту? Зареєструватися</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 323,
  },
  container: {
    flex: 1,
  },
  title: {
    marginBottom: 33,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    color: "#212121",
  },
  input: {
    marginBottom: 16,
    padding: 16,
    width: 343,
    height: 50,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },

  logInButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 27,
    marginBottom: 16,
    width: 343,
    height: 51,
    backgroundColor: '#FF6C00', 
    borderRadius: 100,
  },

  logInBtnText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#FFFFFF',
  },

  text: {
    marginBottom: 144,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#1B4371',
  },

  loginContainer: {
    alignItems: "center",
    paddingTop: 32,
    paddingBottom: 144,
    width: "100%",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
});
