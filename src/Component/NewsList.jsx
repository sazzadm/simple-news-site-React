import React from 'react';
import NewsItem from './NewsItem';

 function NewsList({news}) {
    return (
        <>
            {news && news.lenght == 3 && <h2>There is no News.</h2>}
            {news && news.map((item)=>{
                return (
                    <NewsItem 
                        key={item.title}
                        newsItem={item}
                    />
                )
            })}
        </>
    )
}
export default NewsList;


