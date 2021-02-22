import React, { useRef, useState, useEffect } from 'react'

export const useStateCallback = (initialState) => {
    const [state,setState] = useState(initialState);
    const cbref = useRef(null);

    const useStateCallback = (state,cb) => {
        cbref.current = cb;
        setState(state);
    }

    useEffect(() => {
        if(cbref.current){
            cbref.current(state);
        }
    }, [state])
    return [state,useStateCallback]
}
