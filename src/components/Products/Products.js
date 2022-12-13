import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { renderIcon } from '../../utils/renderIcon'
import { ProductImg,ProductName, ProductPrice, ProductListItem, ProductsCont, StyledInput, SearchCont, SearchIcon, CategoryItem, CategoryCont, ProductListCont, ProductListItems } from './Products.styled'
import categoriesJson from './Products.json'

export default function Products() {
  const theme = useTheme()
  const [ currentCategory, setCurrentCategory ] = useState("all")

  function handleCategoryClick(category) {
    setCurrentCategory(category)
  }
  const renderProducts = (category, products) => {
    return (category === currentCategory || currentCategory === "all") && (
      <React.Fragment key={category}>
        <h3>{ category }</h3> 
        <ProductListItems>
          {products.map( product => {
            return (
              <ProductListItem key={product.name}>
                <ProductImg></ProductImg>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.price}</ProductPrice>
              </ProductListItem>
            )
          })}
        </ProductListItems>
      </React.Fragment>
    )
  }
  const renderCategoryItem = (category) => {
    return <CategoryItem key={category} className={ currentCategory === category ? "active" : ''} name="product-category" onClick={ () => handleCategoryClick(category) }>{ category }</CategoryItem>
  }
  return (
    <ProductsCont>
      <SearchCont>
        <SearchIcon>
          {renderIcon(theme.image.products.searchIcon)}
        </SearchIcon>
        <StyledInput placeholder='Search Here...'/>
      </SearchCont>
      <CategoryCont>
        { renderCategoryItem("all") }
        { Object.keys(categoriesJson).map( category => {
          return renderCategoryItem(category)
        })}
      </CategoryCont>
      <ProductListCont>
        { Object.keys(categoriesJson).map( category => {
          return renderProducts(category, categoriesJson[category])
        })}

      </ProductListCont>
    </ProductsCont>
  )
}
