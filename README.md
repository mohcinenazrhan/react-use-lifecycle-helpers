# react-use-lifecycle-helpers

> Helpers functions arround useEffect hook to make your life easier, providing the most use cases of useEffect hook, among them the lifecycle of class component.

[![NPM](https://img.shields.io/npm/v/react-use-lifecycle-helpers.svg)](https://www.npmjs.com/package/react-use-lifecycle-helpers) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-use-lifecycle-helpers
```

[See Example](https://codesandbox.io/s/test-useeffect-helpers-mzz2m)

## Usage

### `useDidMount`

This hook is a replacement for the `componentDidMount` method.

```javascript
import useLifecycleMethods from "react-use-lifecycle-helpers";

export default function MyComponent() {
  const { useDidMount } = useLifecycleMethods();

  useDidMount(() => {
    console.log("MyComponent is mounted");
  });
}
```

### `useDidUpdate`

This hook is similar to the `componentDidUpdate` method.

```javascript
import useLifecycleMethods from "react-use-lifecycle-helpers";

export default function MyComponent(props) {
  const [state, setState] = useState({ count: 0, bool: false });

  const { useDidUpdate } = useLifecycleMethods(state, props);

  useDidUpdate(() => {
    console.log("MyComponent is updated");
  });
}
```

### `useWillUnmount`

A hook that's a replacement for the `componentWillUnmount` method.

```javascript
import useLifecycleMethods from "react-use-lifecycle-helpers";

export default function MyComponent() {
  const { useWillUnmount } = useLifecycleMethods();

  useWillUnmount(() => {
    console.log("MyComponent will unmount");
  });
}
```

### `useDepsDidChange`

Track multiple or one of the state properties.

```javascript
import useLifecycleMethods from "react-use-lifecycle-helpers";

export default function MyComponent(props) {
  const [state, setState] = useState({ count: 0, bool: false });

  const { useDepsDidChange } = useLifecycleMethods(state, props);

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
}
```

## License

MIT © [Mohcine NAZRHAN](https://github.com/Mohcine NAZRHAN)

## Contributors

- [Myself](https://github.com/mohcinenazrhan)
- [Fahmi Salman](https://github.com/SalmanFahmi-IT)

## Todo

- [ ] Migrate to TypeScript
