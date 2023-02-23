import { useState, useEffect } from "react";
import React from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        async function fetchingData () {
        const response = await fetch(url).then((response) => response.json());
        setData(response)}
        //el parametro que toma el setdata es la constante response, por que el objeto response que es un json
        //me devueve directamente la lsita de objetos sin tener que entrar a response.data?
        fetchingData()
    }, [url]);
    return data
}

    export {useFetch}