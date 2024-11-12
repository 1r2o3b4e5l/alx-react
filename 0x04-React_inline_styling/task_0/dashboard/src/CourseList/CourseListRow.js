import React from 'react'

const CourseListRow = ({isHeader=false, textFirstCell, textSecondCell=null}) => {
    const headerStyle = {
        background: '#deb5b545',
    }
    const trStyle = {
        background: '#f5f5f5ab'
    }

  return (
    <tr style={isHeader ? headerStyle : trStyle}>
        {
            isHeader ? (
                <>
                {
                    textSecondCell ? (
                        <>
                            <th>{textFirstCell}</th>
                            <th>{textSecondCell}</th>
                        </>
                        ) : (
                            <th colSpan="2">{textFirstCell}</th>
                    )
                }
                </>
            ) : (
                <>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
                </>
            )
        }
    </tr>
  )
}

export default CourseListRow
