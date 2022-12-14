import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

export const CompanyContext = createContext({
    companiesMap: null,
    company: {},
    address: null,
    setCompany: () => { },
    setAddress: () => { },
    setCompaniesMap: () => { },
    updateCompany: () => { },
});

export const CompanyProvider = ({ children }) => {
    const [companiesMap, setCompaniesMap] = useState([]);
    const [company, setCompany] = useState({});
    const [address, setAddress] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCompanies = async () => {
            const response = await api.get("/api/company/");
            setCompaniesMap(response.data)
        }
        fetchCompanies()
    }, [companiesMap]);

    const updateCompany = async (e) => {
        e.preventDefault();
        try {
            const res = await api.put(
                `/api/company/${company.id}/edit`,
                company,
            );
            toast.dismiss();
            toast.success(res.data.msg);
            navigate(`/company`);
        } catch (error) {
            console.error(error);
        }
    }

    const value = { companiesMap, setCompany, company, updateCompany, address, setAddress };

    return <CompanyContext.Provider value={value}>{children}</CompanyContext.Provider>
}