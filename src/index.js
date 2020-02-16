import { useRef, useState, useEffect } from 'react'

const useLifecycleHelpers = (state = {}, props = {}) => {
  const [prevState, setPrevState] = useState(state)
  const [prevProps, setPrevProps] = useState(props)

  /**
   * useDidMount() is invoked immediately after a component is mounted.
    this is a good place to instantiate the network request.

    This method is a good place to set up any subscriptions.
    If you do that, don’t forget to unsubscribe in componentWillUnmount().

    You may call setState() immediately in useDidMount().
    It will trigger an extra rendering.
   * @param {Function} callback
   */
  const useDidMount = (callback) => {
    useEffect(() => {
      callback()
      // eslint-disable-next-line
    }, [])
  }

  /**
   * useDidUpdate() is invoked immediately after updating occurs.
    This method is not called for the initial render.

    Use this as an opportunity to operate on the DOM when the component has been updated.
    This is also a good place to do network requests as long as you compare the current props to previous props (e.g. a network request may not be necessary if the props have not changed).
   * @param {Function} callback
   */
  const useDidUpdate = (
    callback
  ) => {
    const isFirstRender = useRef(true)

    useEffect(() => {
      if (isFirstRender.current) {
        isFirstRender.current = false
      } else {
        callback(prevState, prevProps)
        setPrevState(state)
        setPrevProps(props)
      }
      // eslint-disable-next-line
    }, [state, props])
  }

  /**
   * useDepsDidChange() is invoked immediately after one of the dependencies changed.
   * This is also a good place to do network requests as long as you compare the current dependencies to previous dependencies value
   * EXP : useDepsDidChange(
            prevState => {
              console.log('componentDidUpdate', state, prevState)
            },
            [state]
          )
   * @param {Function} callback
   * @param {Array} dependencies
   */
  const useDepsDidChange = (
    callback,
    dependencies
  ) => {
    const isFirstRender = useRef(true)
    const refsDependencies = dependencies.map(dep => state[dep])

    useEffect(() => {
      if (isFirstRender.current) {
        isFirstRender.current = false
      } else {
        const prevDependenciesState = dependencies.map(dep => ({
          [dep]: prevState[dep]
        }))
        callback(Object.assign({}, ...prevDependenciesState))
        setPrevState(state)
      }
      // eslint-disable-next-line
    }, refsDependencies)
  }

  /**
   * useWillUnmount() is invoked immediately before a component is unmounted and destroyed.
   * Perform any necessary cleanup in this method, such as invalidating timers,
   * canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().

   * You should not call setState() in useWillUnmount() because the component will never be re-rendered.
   * Once a component instance is unmounted, it will never be mounted again.
   * @param {Function} callback
   */
  const useWillUnmount = callback => {
    useEffect(() => {
      return () => {
        callback()
      }
      // eslint-disable-next-line
    }, [])
  }

  return {
    useDidMount,
    useDepsDidChange,
    useDidUpdate,
    useWillUnmount
  }
}

export default useLifecycleHelpers
