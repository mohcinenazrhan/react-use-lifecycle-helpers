import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  render,
  fireEvent,
  cleanup,
  queryByAttribute
} from '@testing-library/react'
import useLifecycleHelpers from './'

afterEach(cleanup)

const Component = props => {
  const [componentState, setComponentState] = useState(null)
  const [state, setState] = useState({ counter: 0 })

  const {
    useComponentDidMount,
    useComponentDidUpdate,
    useComponentWillUnmount,
    useOnDependenciesChange
  } = useLifecycleHelpers(state, props)

  useComponentDidMount(() => {
    setComponentState('Mounted')
  })

  useComponentDidUpdate((prevState, prevProps) => {
    if (props.data !== prevProps.data) setComponentState('Updated')
  })

  useOnDependenciesChange(
    prevState => {
      if (state.counter !== prevState.counter) setComponentState('DepsUpdated')
    },
    ['counter']
  )

  return (
    <div id='component'>
      <p>{componentState}</p>
      <button onClick={() => setState({ counter: 1 })}>Update state</button>
    </div>
  )
}

Component.propTypes = {
  data: PropTypes.string
}

function renderComponent(props) {
  return render(<Component {...props} />)
}

describe('Test useLifecycleHelpers custom hook', () => {
  test('The component should be mounted', () => {
    const { getByText } = renderComponent()

    getByText(/Mounted/i)
  })

  test('The component should be updated', () => {
    const { getByText, rerender } = renderComponent({ data: 'test1' })

    const newProps = { data: 'test2' }
    rerender(<Component {...newProps} />)

    getByText(/Updated/i)
  })

  test('Trigger when dependencies changed', () => {
    const { getByText } = renderComponent()
    const updateStateBtn = getByText(/Update state/i)

    fireEvent.click(updateStateBtn)

    getByText(/DepsUpdated/i)
  })
})