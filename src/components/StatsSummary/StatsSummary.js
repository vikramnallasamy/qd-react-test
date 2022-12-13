
import React from 'react'
import { RateText, ItemsSoldWrap, ItemsSoldImg, OrderSummaryCont, OrderSummary, LatestOrderCont, LatestOrderSection, ItemsSoldSection,StatsRateIcon } from './StatsSummary.styled'
import ordersData from './orders.json'
import itemsSoldData from './itemsSold.json'
import statsSummaryData from './statsSummary.json'
import { renderIcon } from '../../utils/renderIcon'
import { theme } from '../../themes/defaultTheme'
export default function Orders() {

  function renderItemsSold(itemsSold) {
    return (<ItemsSoldSection>
        <h3>Items Sold</h3>
        <ItemsSoldWrap>
          <span />
          <table>
            <tbody>
              {itemsSold.map( ({ item, count }, index) => {
                return (
                  <tr key={index}>
                    <td><ItemsSoldImg></ItemsSoldImg></td><td>{item}</td><td>{count} items</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </ItemsSoldWrap>
    </ItemsSoldSection>)
  }
  function renderLatestOrders(orders) {
    return (<LatestOrderSection>
        <h3>Latest Order</h3>
        <table>
          <thead>
            <tr>
              <th>No.</th><th>Item</th><th>Quantity</th><th>Revenue</th><th>Net Profit</th>
            </tr>
          </thead>
          <tbody>
            {orders.map( ({ id, item, quantity, revenue, netprofit, currency }, index) => {
              return (
                <tr key={id}>
                  <td>{index+1}</td><td>{item}</td><td>{quantity}</td><td>{currency + revenue}</td><td>{currency + netprofit}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
    </LatestOrderSection>)
  }
  return (
    <>
      <OrderSummaryCont>
        {statsSummaryData.map( ({ name, value, rate }) => {
          return (
          <OrderSummary key={name}>
            <div>{ name }</div>
            <StatsRateIcon rate={rate}>{renderIcon(theme.image.statsSummary)}</StatsRateIcon>
            <div>{ value }</div>
            <RateText rate={ rate }>{ rate }%</RateText>
          </OrderSummary>
          )
        })}
      </OrderSummaryCont>
      <LatestOrderCont>
          {renderLatestOrders(ordersData)}
          { renderItemsSold(itemsSoldData)}
        
      </LatestOrderCont>
    </>
  )
}
