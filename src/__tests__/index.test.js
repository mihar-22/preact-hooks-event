/** @jsx h */

import { h } from 'preact'
import { render } from '@testing-library/preact'

import useEventListener from '..'

describe('useEventListener', () => {
  const mouseMoveEvent = { clientX: 100, clientY: 200 }

  let mockHandler = null

  const mockElement = {
    addEventListener: (eventName, handler) => {
      mockHandler = handler
    },
    removeEventListener: () => {
      mockHandler = null
    },
    dispatchEvent: (event) => {
      mockHandler(event)
    }
  }

  it('should call `addEventListener` and `handler`', () => {
    const handler = jest.fn()
    const spy = jest.spyOn(mockElement, 'addEventListener')

    function Comp () {
      useEventListener('foo', handler, mockElement)
    }

    render(<Comp />)

    expect(spy).toBeCalled()

    mockElement.dispatchEvent(mouseMoveEvent)
    expect(handler).toBeCalledWith(mouseMoveEvent)

    spy.mockRestore()
  })

  it('should default to `window/global` given no element', () => {
    const handler = jest.fn()
    const spy = jest.spyOn(global, 'addEventListener')

    function Comp () {
      useEventListener('foo', handler)
    }

    render(<Comp />)

    expect(spy).toBeCalled()

    spy.mockRestore()
  })

  it('should fail safe given no window (SSR)', () => {
    const handler = jest.fn()

    function Comp () {
      useEventListener('foo', handler, {})
    }

    render(<Comp />)
  })
})
