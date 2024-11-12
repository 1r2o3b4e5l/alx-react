// import React from 'react'
// import {render, screen, within} from '@testing-library/react'
// import CourseListRow from './CourseListRow'


test('CourseListRow renders one cell with colSpan = 2 when textSecondCell is null and isHeader true', () => {
    // render(<CourseListRow isHeader="true" textFirstCell="first" />)
    // expect(screen.getAllByRole('columnheader').length).toBe(1)
    // expect(screen.getAllByRole('columnheader')[0].getAttribute('colSpan')).toBe("2")
})


// test('CourseListRow renders one cell with colSpan = 2 when textSecondCell is null and isHeader true', () => {
//     render(<CourseListRow isHeader="true" textFirstCell="first" />)
//     expect(screen.getAllByRole('columnheader').length).toBe(1)
//     expect(screen.getAllByRole('columnheader')[0].getAttribute('colSpan')).toBe("2")
// })


// test('CourseListRow renders two cells when textSecondCell is present and isHeader true', () => {
//     render(<CourseListRow isHeader="true" textFirstCell="first" textSecondCell="second" />)
//     expect(screen.getAllByRole('columnheader').length).toBe(2)
// })

// test('CourseListRow renders two cells when isHeader is false (with both cells defined)', () => {
//     render(<CourseListRow textFirstCell="first" textSecondCell="second" />)
//     expect(screen.getAllByRole('cell').length).toBe(2)
// })

// test('CourseListRow renders two cells within a <tr> when isHeader is false', () => {
//     render(<CourseListRow textFirstCell="first" textSecondCell="second" />)
//     const tr = screen.getByRole('row')
//     expect(within(tr).getAllByRole('cell').length).toBe(2) // check td's within tr
// })

// test('CourseListRow renders correct style of <tr> when isHeader is false', () => {
//     render(<CourseListRow textFirstCell="first" textSecondCell="second" />)
//     const tr = screen.getByRole('row')
//     const style = window.getComputedStyle(tr)
//     // expect(style.background).toBe('#f5f5f5ab')
//     expect(style.background).toBe('rgba(245, 245, 245, 0.671)')
// })

// test('CourseListRow renders correct style of <tr> when isHeader is true', () => {
//     render(<CourseListRow isHeader="true" textFirstCell="first" textSecondCell="second" />)
//     const tr = screen.getByRole('row')
//     const style = window.getComputedStyle(tr)
//     // expect(style.background).toBe('#deb5b545')
//     expect(style.background).toBe('rgba(222, 181, 181, 0.271)')
// })
