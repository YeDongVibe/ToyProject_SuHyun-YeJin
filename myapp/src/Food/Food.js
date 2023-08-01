import { BrowserRouter, Routes, Route } from "react-router-dom"

import FoodMain from "./FoodMain";
import FoodList from "./FoodList";
import FoodSearch from "./FoodSearch";
import FoodFound from "./FoodFound";
import FoodLogin from "./FoodLogin";
import FoodNav from "./FoodNav";

const Food = () => {

    return (
        <BrowserRouter>
            <main>
                <FoodNav />
                <Routes>
                    <Route path="/" element = {<FoodMain />}/>
                    <Route path="/FoodList" element = {<FoodList />} />
                    <Route path="/FoodSearch" element = {<FoodSearch />} /> 
                    <Route path="/FoodFound" element = {<FoodFound />} />
                    <Route path="/FoodLogin" element = {<FoodLogin />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default Food;