import { Route, Routes } from "react-router-dom";
import List from "../components/List/List";

export default function AppRoute(params) {
    return (
        
            <Routes>
                <Route path="/" element={<List />} />
            </Routes>
        
    )
}