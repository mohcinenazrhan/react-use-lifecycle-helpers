import React, { useState } from 'react'
import useLifecycleMethods from 'react-use-lifecycle-helpers'

import ChildComponent from "./ChildComponent";

const App = (props) => {
  const [state, setState] = useState({ count: 0, bool: false });

  const {
    useDidMount,
    useDepsDidChange,
    useDidUpdate,

  } = useLifecycleMethods(state, props);

  useDidMount(() => {
    console.log("useDidMount");
  });

  useDidUpdate((prevState, prevProps) => {
    console.log("useDidUpdate", prevState, state, prevProps, props);
  });

  useDepsDidChange(
    prevState => {
      console.log("useDepsDidChange Count", state.count, prevState.count);
    },
    ["count"]
  );

  useDepsDidChange(
    prevState => {
      console.log("useDepsDidChange Bool", state.bool, prevState.bool);
    },
    ["bool"]
  );

  useDepsDidChange(
    prevState => {
      console.log("useDepsDidChange Count", state.count, prevState.count);
      console.log("useDepsDidChange Bool", state.bool, prevState.bool);
    },
    ["bool", "count"]
  );

  return (
    <div>
      <button
        onClick={() => {
          setState({ ...state, count: state.count + 1 });
        }}
      >
        Increment
      </button>
      <p>{state.count}</p>
      <button
        onClick={() => {
          setState({ ...state, bool: !state.bool });
        }}
      >
        Toggle ChildComponent {state.bool.toString()}
      </button>
      {state.bool && <ChildComponent />}
    </div>
  );
}

export default App;