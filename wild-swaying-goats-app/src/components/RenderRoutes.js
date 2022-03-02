import BibliographyPage from "../BibliographyPage";
import AddSourcePage from "../AddSourcePage";
import AddBibliographyPage from "../AddBibliographyPage";
import LandingPage from "../LandingPage";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Route, Routes } from "react-router-dom";

function RenderRoutesList(props) {

    const store = props.store
    const dispatch = props.dispatch

    const [allRoutes, setAllRoutes] = useState([])
    useEffect(() => {
        props.setCount(store.state + 1);
        setAllRoutes(store.discussions.map(function(i) {
            return(
                <>
                    <Route
                        path={i.url}
                        element={<BibliographyPage url={i.url} store={store} dispatch={dispatch}/>}/>
                    <Route
                        path={i.url + "/add-source"}
                        element={<AddSourcePage url={i.url} side1={i.data.side1} side2={i.data.side2} store={store} dispatch={dispatch}/>}/>
                </>
            );
        }))
    }, [store.discussions]);

    return (
        <Routes>
            <Route path="/" element={<LandingPage store={store}/>}/>
            <Route path="/add-bibliography" element={<AddBibliographyPage store={store} dispatch={dispatch} url={"/"}/>}/>
            {allRoutes}
        </Routes>
    )
}

export default function RenderRoutes(props) {
    const store = props.store
    const dispatch = props.dispatch

    return(
        <RenderRoutesList store={store} dispatch={dispatch} setCount={props.setCount} />
    );
}