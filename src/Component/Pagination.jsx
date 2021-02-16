import React , { useState , useEffect } from 'react'

function Pagination(props) {
    const {isPrev,isNext,next,prev,currentPage,totalPage,handlePageChange,goToPage} = props;
    const [isEditable,setIsEditable] = useState(false);
    const [value,setValue] = useState(currentPage);
    useEffect(() => {
        setValue(currentPage)
    },[currentPage])
    
    return (
        <div className='d-flex align-items-center justify-content-between'>
            <button className="btn btn-warning" disabled={!isPrev}
                onClick={() =>{
                    prev()
                }}
            >Prev</button>
            <div>
                {
                    isEditable ? (
                        <input 
                        type="number" 
                        value={value} 
                        onChange = { e =>{
                                // handlePageChange(e.target.value)
                                setValue(e.target.value)          
                        }}
                        onKeyPress={(e) =>{
                            if(e.key == "Enter"){
                                setIsEditable(!isEditable)
                                goToPage(e.target.value);
                            }
                        }}/>
                    ):(
                        <p
                            style={{
                                userSelect:'none'
                            }}
                            title='Double Tap To Jump Page'
                            onDoubleClick={()=>{
                                setIsEditable(!isEditable)
                            }}
                        > {currentPage} out of {totalPage} 
                        <br/>
                        <small>Double Tap To Jump Page</small>
                        </p>
                        
                    )
                }
            </div>
            <button 
            className="btn btn-warning" 
            disabled={!isNext}
            onClick={()=>{
                next();
            }}
            
            >Next</button>
        </div>
    )
}
export default  Pagination;