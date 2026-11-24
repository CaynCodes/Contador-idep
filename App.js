import { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";

export default function App() {
  const [nome, setNome] = useState("");
  const [contador, setContador] = useState(0);
  const [temaEscuro, setTemaEscuro] = useState(false);

  const corFundo = temaEscuro ? "#0F172A" : "#F1F5F9";
  const corTexto = temaEscuro ? "#F8FAFC" : "#0F172A";

  return (
    <View style={[styles.container, { backgroundColor: corFundo }]}>
      <StatusBar barStyle={temaEscuro ? "light-content" : "dark-content"} />
      <ScrollView contentContainerStyle={styles.conteudo}>
        <View style={styles.cartao}>
          <Text style={styles.titulo}>Meu Primeiro Aplicativo</Text>
          <Text style={styles.subtitulo}>Programação Mobile I</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor="#64748B"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.boasVindas}>
            {nome.trim() ? `Olá, ${nome}!` : "Olá, estudante!"}
          </Text>

          <View style={styles.visor}>
            <Text style={styles.rotulo}>CONTADOR</Text>
            <Text style={styles.numero}>{contador}</Text>
          </View>

          {contador >= 10 ? (
            <Text style={styles.mensagem}>
              Parabéns! Você chegou a 10 ou mais!
            </Text>
          ) : (
            <Text style={styles.dica}>Continue testando os botões.</Text>
          )}

          <View style={styles.linhaBotoes}>
            <Pressable
              disabled={contador === 0}
              style={[
                styles.botao,
                styles.botaoMenos,
                contador === 0 && styles.botaoDesabilitado,
              ]}
              onPress={() => setContador((valor) => Math.max(0, valor - 1))}
            >
              <Text style={styles.textoBotao}>− Diminuir</Text>
            </Pressable>

            <Pressable
              style={[styles.botao, styles.botaoMais]}
              onPress={() => setContador((valor) => valor + 1)}
            >
              <Text style={styles.textoBotao}>+ Adicionar</Text>
            </Pressable>
          </View>

          <View style={styles.linhaBotoes}>
            <Pressable
              style={[styles.botao, styles.botaoZerar]}
              onPress={() => setContador(0)}
            >
              <Text style={styles.textoBotao}>Zerar</Text>
            </Pressable>

            <Pressable
              style={[styles.botao, styles.botaoTema]}
              onPress={() => setTemaEscuro((valor) => !valor)}
            >
              <Text style={styles.textoBotao}>Mudar tema</Text>
            </Pressable>
          </View>
        </View>

        <Text style={[styles.rodape, { color: corTexto }]}>
          Desenvolvido na aula de Mobile I
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  conteudo: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 40,
  },
  cartao: {
    width: "100%",
    maxWidth: 430,
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 22,
    elevation: 4,
    shadowColor: "#000000",
    shadowOpacity: 0.12,
    shadowRadius: 10,
  },
  titulo: {
    fontSize: 23,
    fontWeight: "700",
    color: "#1E3A8A",
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 15,
    color: "#64748B",
    textAlign: "center",
    marginTop: 6,
    marginBottom: 18,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 12,
    padding: 13,
    color: "#0F172A",
  },
  boasVindas: {
    fontSize: 17,
    fontWeight: "600",
    color: "#0F172A",
    textAlign: "center",
    marginVertical: 15,
  },
  visor: {
    backgroundColor: "#EEF2FF",
    borderRadius: 18,
    padding: 20,
    alignItems: "center",
    marginBottom: 12,
  },
  rotulo: {
    color: "#475569",
    fontSize: 12,
    fontWeight: "700",
  },
  numero: {
    color: "#312E81",
    fontSize: 52,
    fontWeight: "800",
  },
  mensagem: {
    color: "#15803D",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 14,
  },
  dica: {
    color: "#64748B",
    textAlign: "center",
    marginBottom: 14,
  },
  linhaBotoes: {
    flexDirection: "row",
    marginBottom: 10,
  },
  botao: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  botaoMenos: {
    backgroundColor: "#2563EB",
    marginRight: 6,
  },
  botaoMais: {
    backgroundColor: "#16A34A",
    marginLeft: 6,
  },
  botaoZerar: {
    backgroundColor: "#64748B",
    marginRight: 6,
  },
  botaoTema: {
    backgroundColor: "#7C3AED",
    marginLeft: 6,
  },
  botaoDesabilitado: {
    opacity: 0.45,
  },
  textoBotao: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
  rodape: {
    marginTop: 18,
    fontSize: 12,
    textAlign: "center",
  },
});
