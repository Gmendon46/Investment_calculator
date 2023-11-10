import React from 'react'
import { calculateInvestmentResults, formatter } from '../util/investment'

function Results({input}) {
  const resultData = calculateInvestmentResults(input)
  const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment
    return (
    <table id='result'>
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest(Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {
                resultData.map((item) =>{
                    const totalInteres = item.valueEndOfYear - item.annualInvestment * item.year - initialInvestment
                    const totalAmountInvester = item.valueEndOfYear - totalInteres
                    return (
                        <tr key={item.year}>
                        <td>{item.year}</td>
                        <td>{formatter.format(item.valueEndOfYear)}</td>
                        <td>{formatter.format(item.interest)}</td>
                        <td>{formatter.format(totalInteres)}</td>
                        <td>{formatter.format(totalAmountInvester)}</td>
                    </tr>
                    )
                    
                })
            }
        </tbody>
    </table>
  )
}

export default Results