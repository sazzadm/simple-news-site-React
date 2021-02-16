import React,{ useState } from 'react';
import Input from './Input';
import {newsCategory} from '../news/cagegory';
function Header({category,changeCategory,search}) {
    const [searchVal,setSearchVal] = useState('');
    const handleChange = e => {
        const val = e.target.value;
        setSearchVal(val)
    }
    const keyPress = e => {
        // Todo: 
        if(e.key == 'Enter'){
            search(searchVal)
        }
    }
    return (
      <header className='my-3'>
          <h3>
              BlockBuster Heading
          </h3>
          <Input 
            type='search'
            className='form-control'
            value = {search.searchVal}
            name='search'
            placeholder='Type anything & hit Enter.. '
            onChange={handleChange}
            keyPress = {keyPress}     
          />
        <div className="my-4">
            {
                newsCategory &&   Object.keys(newsCategory).map((item)=>{
                    if(category === newsCategory[item]){
                        return (
                            <button
                            key={item}
                             className='btn btn-warning btn-sm py-2 px-3 mx-1 my-2'>
                                {`#${newsCategory[item]}`}
                            </button>
                        )
                    }
                    return (
                        <button 
                        key={item}
                        onClick={()=>{
                            changeCategory(newsCategory[item])
                        }}
                        className='btn btn-secondary text-black btn-sm py-2 px-3 mx-1 my-0'>
                            {newsCategory[item]}
                        </button>
                    )
                })
                
            }
        </div>
      </header>
    )
}

export default Header;
