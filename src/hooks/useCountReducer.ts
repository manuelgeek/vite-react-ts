import { useReducer } from "react";

interface Action {
  type: string;
  payload?: any;
}

interface State {
  count: number;
}

export default function useCountReducer() {
    const initialState: State = { count: 0 };

    const reducer = (state: State, action: Action): State => {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case 'decrement':
                return { count: state.count - 1 };
            default:
                throw new Error();
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return {
        state, dispatch
    }
}
