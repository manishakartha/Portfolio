import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

function ThemeContextProvider(props) {
    // eslint-disable-next-line
    const theme = {
        // type: 'light',
        primary: 'rgb(173 154 154)',
        primary400: '#dd4d4d',
        primary600: '#ea2424',
        primary80: '#f03939cc',
        primary50: '#f0393980',
        primary30: '#f039394d',
        secondary: '#eaeaea',
        secondary70: '#eaeaeab3',
        secondary50: '#eaeaea80',
        tertiary: '#212121',
        tertiary80: '#212121cc',
        tertiary70: '#212121b3',
        tertiary50: '#21212180',
        // aboutimg1: redThemeboy,
        // aboutimg2: redThemegirl,
        // eduimg: eduRed,
        // expimg: expRed,
        // contactsimg: contactsRed
    };
    const [drawerOpen, setDrawerOpen] = useState(false)

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }



    const value = { theme, drawerOpen, setHandleDrawer }
    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}


export default ThemeContextProvider