import React from 'react'

export const IndividualData = ({individualExcelData}) => {
    // console.log(individualExcelData)
    return (
        <>
            <th>{individualExcelData.id}</th>
            <th>{individualExcelData.student}</th>
            {/* <th>{individualExcelData.LastName}</th>
            <th>{individualExcelData.Gender}</th>
            <th>{individualExcelData.Country}</th>
            <th>{individualExcelData.Age}</th>
            <th>{individualExcelData.Date}</th> */}
        </>
    )
}
