import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const {id} = useParams()
    const newsCategories = useLoaderData()
    console.log(newsCategories)
    
    return (
        <div className='my-3'>
            { id && <h2>category news:{newsCategories.length}</h2>}
            <div className='d-flex flex-column gap-5'>
            {
                newsCategories.map(news=> <NewsCard key={news._id} news={news}></NewsCard>)
            }
            </div>
        </div>
    );
};

export default Category;