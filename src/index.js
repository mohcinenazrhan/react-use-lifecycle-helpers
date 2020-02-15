import { useRef, useState, useEffect } from 'react'

const useLifecycleHelpers = (state = {}, props = {}) => {
  const [prevState, setPrevState] = useState(state)
  const [prevProps, setPrevProps] = useState(props)

  /**
   * useComponentDidMount() is invoked immediately after a component is mounted.
    this is a good place to instantiate the network request.

    This method is a good place to set up any subscriptions.
    If you do that, don’t forget to unsubscribe in componentWillUnmount().

    You may call setState() immediately in useComponentDidMount().
    It will trigger an extra rendering.
   * @param {Function} callback
   */
  const useComponentDidMount = (callback) => {

  }

  /**
   * useComponentDidUpdate() is invoked immediately after updating occurs.
    This method is not called for the initial render.

    Use this as an opportunity to operate on the DOM when the component has been updated.
    This is also a good place to do network requests as long as you compare the current props to previous props (e.g. a network request may not be necessary if the props have not changed).
   * @param {Function} callback
   */
  const useComponentDidUpdate = (
    callback
  ) => {

  }

  /**
   * useOnDependenciesChange() is invoked immediately after one of the dependencies changed.
   * This is also a good place to do network requests as long as you compare the current dependencies to previous dependencies value
   * EXP : useOnDependenciesChange(
            prevState => {
              console.log('componentDidUpdate', state, prevState)
            },
            [state]
          )
   * @param {Function} callback
   * @param {Array} dependencies
   */
  const useOnDependenciesChange = (
    callback,
    dependencies
  ) => {

  }

  /**
   * useComponentWillUnmount() is invoked immediately before a component is unmounted and destroyed.
   * Perform any necessary cleanup in this method, such as invalidating timers,
   * canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().

   * You should not call setState() in useComponentWillUnmount() because the component will never be re-rendered.
   * Once a component instance is unmounted, it will never be mounted again.
   * @param {Function} callback
   */
  const useComponentWillUnmount = callback => {

  }

  return {
    useComponentDidMount,
    useOnDependenciesChange,
    useComponentDidUpdate,
    useComponentWillUnmount
  }
}

export default useLifecycleHelpers
