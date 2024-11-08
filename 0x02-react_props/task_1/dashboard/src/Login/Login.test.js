import React from 'react'
import { render, screen } from '@testing-library/react'
import Login from './Login'

test('Login renders without crushing', () => {
    render(<Login/>)
    expect(screen.getByText('Login to access the full dashboard')).toBeInTheDocument()
})

test('Login renders 2 input and 2 label tags', () => {
    render(<Login/>)
    expect(screen.getAllByRole('textbox').length).toBe(1)
    expect(screen.getAllByRole('textbox', {type: 'password'}).length).toBe(1)
    expect(screen.getAllByLabelText(/.+/).length).toBe(2) // match all tet labels
})
