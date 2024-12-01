import { createContext, useState } from "react";


const GlobalNotifyContext = createContext();

const NotifyContext = ({ children }) => {
    const [notify, setNotify] = useState(true)
    const [text, setText] = useState(null)
    const [timer, setTimer] = useState(1200)

    const changeText = (user_text) => {
        setText(user_text)
    }



    return (
        <GlobalNotifyContext.Provider value={{ notify, setNotify, text, setText, timer, setTimer }}>
            {
                children
            }
        </GlobalNotifyContext.Provider>
    )
}

export { GlobalNotifyContext, NotifyContext }