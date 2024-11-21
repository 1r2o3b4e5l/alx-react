import React from 'react'
import { StyleSheet, css } from 'aphrodite'


const CourseListRow = ({isHeader=false, textFirstCell, textSecondCell=null}) => {

  return (
    <tr className={isHeader ? css(styles.headerStyle) : css(styles.trStyle)}>
        {
            isHeader ? (
                <>
                {
                    textSecondCell ? (
                        <>
                            <th className={css(styles.thStyle)}>{textFirstCell}</th>
                            <th className={css(styles.thStyle)}>{textSecondCell}</th>
                        </>
                        ) : (
                            <th colSpan="2" className={{...css(styles.thStyle), ...css(styles.withColSpan2)}}>{textFirstCell}</th>
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

// aphrodite styles
const styles = StyleSheet.create({
    headerStyle: {
        background: '#deb5b545',
    },
    trStyle: {
        background: '#f5f5f5'
    },
    thStyle: {
        borderBottom: '2px solid #b7b2b2',
        textAlign: 'left'
    },
    withColSpan2: {
        textAlign: 'center'
    }
})
