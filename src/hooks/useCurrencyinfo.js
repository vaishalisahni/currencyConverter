import { useEffect, useState } from "react";

function useCurrencyInfo(currency)
{
    const [data,setData]=useState({});
    useEffect(()=>{
        fetch(`https://currency-rate-exchange-api.onrender.com/${currency}`)
        .then((res)=>res.json())
        .then((res)=>setData(res.rates[currency]));
        // console.log(data);
    },[currency])
    // console.log(data);
    return data;
}
export default useCurrencyInfo;
