import { createContext, useEffect, useState } from "react";

const getUsedBalance = (actualBalance, previousBalance) => {
    const usedBalance = actualBalance - previousBalance;
    return usedBalance
}

const getTotalInjected = (injected, usedBalance) => {
    const totalInjected = injected - usedBalance;
    return totalInjected
}

const getValueEnergy = (totalInjected, valueKwh) => {
    const valueEnergy = totalInjected - valueKwh;
    return valueEnergy
}

const getValueDiscount = (valueEnergy, discount) => {
    const percentageDiscount = discount/100
    const valueDiscount = valueEnergy * percentageDiscount
    return valueDiscount;
}

const getValuePayment = (valueEnergy, valueDiscount) => {
    const valuePayment = valueEnergy - valueDiscount;
    return valuePayment
}

export const DemoContext = createContext({
    usedBalance: 0,
    totalInjected: 0,
    valueEnergy: 0,
    valueDiscount: 0,
    valuePayment: 0,
});

export const DemoProvider = ({children}) => {
    const [month, setMonth] = useState('');
    const [previousBalance, setPreviousBalance] = useState(0);
    const [actualBalance, setActualBalance] = useState(0);
    const [injected, setInjected] = useState(0);
    const [valueKwh, setValueKwh] = useState(0);
    const [expirationDate, setExpirationDate] = useState();
    const [discount, setDiscount] = useState(0);

    const [usedBalance, setUsedBalance] = useState(0);
    const [totalInjected, setTotalInjected] = useState(0);
    const [valueEnergy, setValueEnergy] = useState(0);
    const [valueDiscount, setValueDiscount] = useState(0);
    const [valuePayment, setValuePayment] = useState(0);

    setUsedBalance(getUsedBalance(actualBalance, previousBalance));
    setTotalInjected(getTotalInjected(injected, usedBalance));
    setValueEnergy(getValueEnergy(totalInjected, valueKwh));
    setValueDiscount(getValueDiscount(valueEnergy, discount));
    setValuePayment(getValuePayment(valueEnergy, valueDiscount));

    useEffect(() => {
        setCreateDemo({
            discount,
            usedBalance,
            totalInjected,
            valueEnergy,
            valueDiscount,
            valuePayment
        })
    }, [])

    const value = {
        month,
        setMonth,

        previousBalance,
        setPreviousBalance,

        actualBalance,
        setActualBalance,

        injected,
        setInjected,

        valueKwh, 
        setValueKwh,

        expirationDate,
        setExpirationDate,

        discount,
        setDiscount,

        usedBalance,
        totalInjected,
        valueEnergy,
        valueDiscount,
        valuePayment,
        createDemo
    };

    return <DemoContext value={value}>{children}</DemoContext>;
}
