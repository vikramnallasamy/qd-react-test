import React from 'react'
import { useContext, useState } from 'react'
import { defaultLayout } from './default'

const Layout = React.createContext()

const LayoutProvider = ({ children }) => {
    const [ currentLayout, setCurrentLayout ] = useState(defaultLayout)
    return (
        <Layout.Provider value={ currentLayout }>
            <Layout.Consumer>
                { (layout) => children }
            </Layout.Consumer>
        </Layout.Provider>
    )
}

export const useLayout = () => {
    return useContext(Layout)
}

export default LayoutProvider
