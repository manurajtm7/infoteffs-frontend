import { useEffect, useRef } from "react"

function debounce(fn, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), delay);
    };
}

const useScroll = (data, isLoading, localStorageKey = 'INFO_ALL_SCROLL') => {
    const scrollRef = useRef(null)

    useEffect(() => {
        if (!isLoading && data.length) {

            const previousScollValue = Number(sessionStorage.getItem(localStorageKey)) || 0
            setTimeout(() => {
                scrollRef.current.scrollTo({
                    top: previousScollValue,
                    behavior: 'auto'
                })
            }, 50)
        }
    }, [data, isLoading])


    useEffect(() => {
        let debousedFunction = debounce(() => {
            sessionStorage.setItem(localStorageKey, scrollRef.current.scrollTop)
        }, 100)

        const element = scrollRef.current;
        element.addEventListener("scroll", debousedFunction)
        return () => {
            element.removeEventListener("scroll", debousedFunction)
        }
    })

    return [scrollRef];

}

export default useScroll