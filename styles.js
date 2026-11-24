import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    width: "100%",
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

  linhaMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  barraFundo: {
    height: 10,
    backgroundColor: "#E2E8F0",
    borderRadius: 20,
    overflow: "hidden",
  },

  barraProgresso: {
    height: 10,
    backgroundColor: "#22A447",
    borderRadius: 20,
  },

  textoProgresso: {
    textAlign: "center",
    marginTop: 8,
    marginBottom: 15,
    color: "#64748B",
  },
});

export default styles;
