
import React from 'react'
import { ItemsSoldWrap, ItemsSoldImg, OrderSummaryCont, OrderSummary, LatestOrderCont, LatestOrderSection, ItemsSoldSection } from './StatsSummary.styled'
import ordersData from './orders.json'
import itemsSoldData from './itemsSold.json'
export default function Orders() {

  function renderItemsSold(itemsSold) {
    return (<ItemsSoldSection>
        <h3>Items Sold</h3>
        <ItemsSoldWrap onScroll={(e)=> console.log(e.target.scrollTop)}>
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
        <OrderSummary>
          <div>Customer</div>
          <div>arrow</div>
          <div>1000</div>
          <div>+10%</div>
        </OrderSummary>
        <OrderSummary>Orders</OrderSummary>
        <OrderSummary>Revenue</OrderSummary>
        <OrderSummary>Net Profit</OrderSummary>
      </OrderSummaryCont>
      <LatestOrderCont>
          {renderLatestOrders(ordersData)}
          { renderItemsSold(itemsSoldData)}
        
      </LatestOrderCont>
    </>
  )
}
