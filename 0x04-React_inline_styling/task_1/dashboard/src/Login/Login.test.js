import React from 'react'
import { render, screen } from '@testing-library/react'
import Login from './Login'

import { StyleSheetTestUtils } from 'aphrodite'

test('Login renders without crushing', () => {
    StyleSheetTestUtils.suppressStyleInjection()
    render(<Login/>)
    expect(screen.getByText('Login to access the full dashboard')).toBeInTheDocument()
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})

test('Login renders 2 input and 2 label tags', () => {
    StyleSheetTestUtils.suppressStyleInjection()
    render(<Login/>)
    expect(screen.getAllByRole('textbox').length).toBe(1)
    expect(screen.getAllByRole('textbox', {type: 'password'}).length).toBe(1)
    expect(screen.getAllByLabelText(/.+/).length).toBe(2) // match all tet labels
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})
