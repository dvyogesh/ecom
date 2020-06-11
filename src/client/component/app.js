import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../redux/actions';
import Header from './Header/Header';
import HomePage from './HomePage/HomePage';


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allActions.dataFetchActions.itemsFetchData());
    }, []);

    return (
        <>
            <header>
                <Header/>
            </header>
            <div className="main-container">
                <HomePage />
            </div>
            <footer>
                <h2>footr</h2>
            </footer>
        </>
    );
};

export default App;
