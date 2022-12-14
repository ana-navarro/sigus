import axios from "axios";
import { createContext, useEffect, useState } from "react";
import api from "../services/api";

export const CreditContext = createContext({
    creditMap: null,
    setCreditMap: () => null,
    id: null,
    setId: () => null,
    discount: null,
    setDiscount: () => null,
    installationNumbe: null,
});

export const CreditProvider = ({ children }) => {
    const [creditMap, setCreditMap] = useState(null);
    const [id, setId] = useState(null);
    const [discount, setDiscount] = useState(null);
    const value = { creditMap, id, setId, setDiscount, discount };

    useEffect(() => {
        const fetchCredits = async () => {
            const res = await api.get("/api/credit")
            setCreditMap(res.data)
        }
        fetchCredits()
    }, [creditMap]);

    useEffect(() => { }, [])

    return <CreditContext.Provider value={value}>{children}</CreditContext.Provider>
}