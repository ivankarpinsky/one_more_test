import React, {useEffect, useState} from 'react'

import './App.css'
import './bootstrap.min.css'
import {Table} from "./Components/Table"
import {Filter} from "./Components/Filter"
import {useHttp} from "./http.hook"
import {Loader} from "./Components/Loader"
import {Pagination} from "./Components/Pagination"


const URL = 'http://test/';
const PAGE_LIMIT = 10;

function App() {
    const {loading, request} = useHttp();
    const [entities, setEntities] = useState([]);
    const [curPage, setCurPage] = useState(1);
    const [entitiesPage, setEntitiesPage] = useState([]);
    const [pageQuantity, setPageQuantity] = useState(1);

    const submitHandler = async (data) => {
        let params = Object.entries(data).map(([key, val]) => `${key}=${val}`).join('&');
        try {
            const response = await request(URL + 'filter?' + params);
            setEntities(response);
            setEntitiesPage(response.slice(0, PAGE_LIMIT));
        } catch (e) {
            console.log(e);
        }
    }

    const goToPage = (num) => {
        let curEntities = entities.slice(PAGE_LIMIT * (num - 1), PAGE_LIMIT * num);
        setEntitiesPage(curEntities);
        setCurPage(num);
    }

    useEffect(async () => {
        try {
            const response = await request(URL);
            setEntities(response);
            setEntitiesPage(response.slice(0, PAGE_LIMIT));
        } catch (e) {
            console.log(e);
        }
    }, [])

    useEffect(() => {
        setPageQuantity(Math.floor(entities.length / PAGE_LIMIT) + 1);
    }, [entities])

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10 col-12 mt-4">
                    <Filter submit={submitHandler}/>
                    {loading && <Loader/>}
                    {!loading && <Table entities={entitiesPage}/>}
                    <Pagination pageQuantity={pageQuantity} limit={PAGE_LIMIT} goToPage={goToPage} activePage={curPage}/>
                </div>
            </div>
        </div>
    );
}

export default App;
