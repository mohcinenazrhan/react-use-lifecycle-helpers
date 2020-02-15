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
})