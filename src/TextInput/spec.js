import React from 'react'
import expect from 'test/expect'
import sinon from 'sinon'

import View from '../core/View'
import TextInput from '.'

describe('TextInput', () => {
  it('renders TextInput.Core input with styling', () => {
    expect(
      <TextInput />,
      'to render as',
      <View className='txt'>
        <TextInput.Core />
      </View>
    )
  })
})

describe('TextInput.Core', () => {
  it('renders text input without styling', () => {
    expect(
      <TextInput.Core />,
      'to render as',
      <input type='text' />
    )
  })

  it('renders text input with autoComplete value', () => {
    expect(
      <TextInput.Core autoComplete='on' />,
      'to render as',
      <input type='text' autoComplete='on' />
    )
  })

  it('renders text input with autoFocus value', () => {
    expect(
      <TextInput.Core autoFocus />,
      'to render as',
      <input type='text' autoFocus />
    )
  })

  it('renders text input with className value', () => {
    expect(
      <TextInput.Core className='foo' />,
      'to render as',
      <input type='text' className='foo' />
    )
  })

  it('renders text input with testId value', () => {
    expect(
      <TextInput.Core testId='foo' />,
      'to render as',
      <input type='text' data-test-id='foo' />
    )
  })

  it('renders text input with dir value', () => {
    expect(
      <TextInput.Core dir='rtl' />,
      'to render as',
      <input type='text' dir='rtl' />
    )
  })

  it('renders text input with name value', () => {
    expect(
      <TextInput.Core name='foo' />,
      'to render as',
      <input type='text' name='foo' />
    )
  })

  it('renders text input with maxLength value', () => {
    expect(
      <TextInput.Core maxLength={ 10 } />,
      'to render as',
      <input type='text' maxLength={ 10 } />
    )
  })

  it('renders text input with placeholder value', () => {
    expect(
      <TextInput.Core placeholder='foo' />,
      'to render as',
      <input type='text' placeholder='foo' />
    )
  })

  it('renders text input with tabIndex value', () => {
    expect(
      <TextInput.Core tabIndex='foo' />,
      'to render as',
      <input type='text' tabIndex='foo' />
    )
  })

  it('renders text input with type value', () => {
    expect(
      <TextInput.Core type='foo' />,
      'to render as',
      <input type='foo' />
    )
  })

  it('renders text input with value', () => {
    expect(
      <TextInput.Core value='foo' />,
      'to render as',
      <input type='text' value='foo' />
    )
  })

  describe('when changing the text', () => {
    it('onChangeText is called', () => {
      const onChangeText = sinon.spy()

      return expect(
        <TextInput.Core onChangeText={ onChangeText }/>,
        'when deeply rendered',
        'with event', 'change', { target: { value: 'hello' } }, 'on', <input type='text' />,
      ).then(() => {
        expect(onChangeText, 'to have calls satisfying', () => {
          onChangeText('hello')
        })
      })
    })
  })

  describe('when focusing on the element', () => {
    it('onFocus is called', () => {
      const onFocus = sinon.spy()

      return expect(
        <TextInput.Core onFocus={ onFocus }/>,
        'when deeply rendered',
        'with event', 'focus', 'on', <input type='text' />,
      ).then(() => {
        expect(onFocus, 'was called times', 1)
      })
    })
  })

  describe('when un-focusing the element', () => {
    it('onBlur is called', () => {
      const onBlur = sinon.spy()

      return expect(
        <TextInput.Core onBlur={ onBlur }/>,
        'when deeply rendered',
        'with event', 'blur', 'on', <input type='text' />,
      ).then(() => {
        expect(onBlur, 'was called times', 1)
      })
    })
  })

  describe('when pressing keys on the element', () => {
    it('onKeyDown is called', () => {
      const onKeyDown = sinon.spy()

      return expect(
        <TextInput.Core onKeyDown={ onKeyDown }/>,
        'when deeply rendered',
        'with event', 'keyDown', 'on', <input type='text' />,
      ).then(() => {
        expect(onKeyDown, 'was called times', 1)
      })
    })
  })

  describe('when arrow-up is pressed key on the element', () => {
    it('onArrowUp is called', () => {
      const onArrowUp = sinon.spy()

      return expect(
        <TextInput.Core onArrowUp={ onArrowUp }/>,
        'when deeply rendered',
        'with event', 'keyDown', { keyCode: 38 }, 'on', <input type='text' />,
      ).then(() => {
        expect(onArrowUp, 'was called times', 1)
      })
    })
  })

  describe('when arrow-down is pressed key on the element', () => {
    it('onArrowDown is called', () => {
      const onArrowDown = sinon.spy()

      return expect(
        <TextInput.Core onArrowDown={ onArrowDown }/>,
        'when deeply rendered',
        'with event', 'keyDown', { keyCode: 40 }, 'on', <input type='text' />,
      ).then(() => {
        expect(onArrowDown, 'was called times', 1)
      })
    })
  })

  describe('when arrow-left is pressed key on the element', () => {
    it('onArrowLeft is called', () => {
      const onArrowLeft = sinon.spy()

      return expect(
        <TextInput.Core onArrowLeft={ onArrowLeft }/>,
        'when deeply rendered',
        'with event', 'keyDown', { keyCode: 37 }, 'on', <input type='text' />,
      ).then(() => {
        expect(onArrowLeft, 'was called times', 1)
      })
    })
  })

  describe('when arrow-right is pressed key on the element', () => {
    it('onArrowRight is called', () => {
      const onArrowRight = sinon.spy()

      return expect(
        <TextInput.Core onArrowRight={ onArrowRight }/>,
        'when deeply rendered',
        'with event', 'keyDown', { keyCode: 39 }, 'on', <input type='text' />,
      ).then(() => {
        expect(onArrowRight, 'was called times', 1)
      })
    })
  })

  describe('when delete is pressed key on the element', () => {
    it('onDelete is called', () => {
      const onDelete = sinon.spy()

      return expect(
        <TextInput.Core onDelete={ onDelete }/>,
        'when deeply rendered',
        'with event', 'keyDown', { keyCode: 8 }, 'on', <input type='text' />,
      ).then(() => {
        expect(onDelete, 'was called times', 1)
      })
    })
  })

  describe('when enter is pressed key on the element', () => {
    it('onEnter is called', () => {
      const onEnter = sinon.spy()

      return expect(
        <TextInput.Core onEnter={ onEnter }/>,
        'when deeply rendered',
        'with event', 'keyDown', { keyCode: 13 }, 'on', <input type='text' />,
      ).then(() => {
        expect(onEnter, 'was called times', 1)
      })
    })
  })

  describe('when escape is pressed key on the element', () => {
    it('onEscape is called', () => {
      const onEscape = sinon.spy()

      return expect(
        <TextInput.Core onEscape={ onEscape }/>,
        'when deeply rendered',
        'with event', 'keyDown', { keyCode: 27 }, 'on', <input type='text' />,
      ).then(() => {
        expect(onEscape, 'was called times', 1)
      })
    })
  })
})