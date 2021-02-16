import React from 'react';

function NewsItem({newsItem}) {
    
    return (
        <div className="card mb-3">
            {
                newsItem.urlToImage && (
                    <img 
                        className='card-img-top img-fluid'
                        src={newsItem.urlToImage}
                        alt='Card Img'

                    />
                )

            }          
            <div className="card-body">
                <a 
                    href={newsItem.url}
                    target='_blank'
                    rel='noopenar noreferrer'            
                    >
                    <h4>
                        {newsItem.title || 'unTitle'}
                    </h4>
                </a>
                <a 
                    href={newsItem.url}
                    target='_blank'
                    rel='noopenar noreferrer'            
                    >
                    <p>
                        {newsItem.content || 'No Content'}
                    </p>
                </a>
                <div className="d-flex align-contnet-center justify-content-between">
                    <small>
                        published At {newsItem.publishedAt}
                    </small>
                    <strong className='btn px-2 py-1'
                        style={{
                            background:'rgb(222 222 222)',
                            color:'#424242'
                        }}
                    >
                        {newsItem.source.name}
                    </strong>
                </div>


            </div>
        </div>
    )
}
export default NewsItem;