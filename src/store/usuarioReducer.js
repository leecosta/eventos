const INITIAL_STATE = {
  usuarioEmail: "",
  usuarioLogado: 0, //0 é falso, 1 é verdadeiro
};

// reducer recebe o estado anterior e uma action
function usuarioReducer(state = INITIAL_STATE, action) {
  // baseado na action.type ele faz uma alteração no estado
  switch (action.type) {
    case "LOG_IN":
      //...state -> Pegando o state atual
      return { ...state, usuarioLogado: 1, usuarioEmail: action.usuarioEmail };
    case "LOG_OUT":
      return { ...state, usuarioLogado: 0, usuarioEmail: null };
    default:
      return state;
  }
}

export default usuarioReducer;
