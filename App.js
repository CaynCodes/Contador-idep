import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";

export default function App() {
  const [contador, setContador] = useState(0);

  // Dentro da função App():
  const [nome, setNome] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />
      <Text style={styles.boasVindas}>
        {nome.trim() ? `Olá, ${nome}!` : "Olá, estudante!"}
      </Text>

      <Text style={styles.subtitulo}>Programação Mobile I</Text>

      <Text style={styles.contador}>Cliques: {contador}</Text>
      
      


      <Pressable style={styles.botao} onPress={() => setContador(contador + 1)}>
        <Text style={styles.textoBotao}>Clique aqui</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1E3A8A",
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 17,
    color: "#475569",
    marginBottom: 35,
  },
  contador: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  botao: {
    backgroundColor: "#2563EB",
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 10,
  },
  textoBotao: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },
});
