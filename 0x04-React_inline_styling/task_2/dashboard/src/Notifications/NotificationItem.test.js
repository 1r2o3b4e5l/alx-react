import React from 'react'
import  { render, screen, fireEvent } from '@testing-library/react'
import NotificationItem from './NotificationItem'

import { StyleSheetTestUtils } from "aphrodite";


test('NotificationItem renders without crashing', () => {
    StyleSheetTestUtils.suppressStyleInjection()
    render(<NotificationItem type="default" value="testing" />)
    expect(screen.getByRole('listitem')).toBeDefined()
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();

})
test('NotificationItem renders the correct html (type and value) given test prop values', () => {
    StyleSheetTestUtils.suppressStyleInjection()
    render(<NotificationItem type="default" value="testing" />)
    expect(screen.getAllByRole('listitem')[0].getAttribute('data')).toBe('default')
    expect(screen.getAllByRole('listitem')[0].innerHTML).toBe('testing')
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
})
test('NotificationItem renders the correct html given test __html prop values', () => {
    StyleSheetTestUtils.suppressStyleInjection()
    render(<NotificationItem type="default" value="testing" html={() => '<strong>test</strong>'} />)
    expect(screen.getAllByRole('listitem')[0].innerHTML).toBe('<strong>test</strong>')
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
})

/* class components */
test('the console.log spy is called when the markAsRead function is called', () => {
    StyleSheetTestUtils.suppressStyleInjection()
    const markAsRead = jest.fn()
    // const spyCLog = jest.spyOn(console, 'log')
    // const value = "Hello world"
    render(<NotificationItem read={() => markAsRead(1)}/>)
    const listItem = screen.getByRole('listitem')
    fireEvent.click(listItem)
    expect(markAsRead).toHaveBeenCalled()
    // expect(spyCLog).toHaveBeenCalled()
    // expect(spyCLog).toHaveBeenCalledWith(/Notification .+/)
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  })
