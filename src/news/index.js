import axios from '../Utils/axios'

const max_item_per_page = 2;
export default class News {
    
    constructor(category) {
        this._category = category
        this._searchTerm = ''
        this._pageSize = max_item_per_page
        this._currentPage = 1
        this._totalPage = 1      
    };
    // get News
    async getNews(){
        try{
            const {data} = await axios.get(this._getUrl());
            console.log(data,this._getUrl());
            this._totalPage = Math.ceil(data.totalResults/this._pageSize)
            return {
                articles:data.articles,
                currentPage:this._currentPage,
                totalPage:this._totalPage,
                category:this._category,
                totalResults:data.totalResults,
                isNext:this._isNext(),
                isPrev:this._isPrev()
            }
        } 
        catch(e){
            throw new Error(e)
        }
    }
    // next page
    next(){
        if(this._isNext()){
            this._currentPage++
            return this.getNews();
        }
        return false;
        
    }
    // previous page
    prev(){
        if(this._isPrev()){
            this._currentPage--
            return this.getNews();
        }
        return false;
    }
    // set current page
    setCurrentPage(pageNumber){
        if(pageNumber < 1 && pageNumber > this._totalPage){
            this._currentPage = 1;
            {alert('you are trying to go wrong page.')}
        }
        this._currentPage = pageNumber;
        return this.getNews();
    }
    // set category
    setCategory(category){
        this._currentPage = 1;
        this._category = category;
        return this.getNews()
    }
    // get search workable
    search(searchTerm){
        this._currentPage = 1;
        this._searchTerm = searchTerm;
        return this.getNews()
    }
    // create url
    _getUrl(){
        let url = '/?';
        if(this._category) url += `category=${this._category}`
        if(this._searchTerm) url += `&q=${this._searchTerm}`
        if(this._pageSize) url += `&pageSize=${this._pageSize}`
        if(this._currentPage) url += `&page=${this._currentPage}`
        return url;
    }
    // check next possible
    _isNext(){
        return this._currentPage < this._totalPage;
    }
    // check previous possible
    _isPrev(){
        return this._currentPage > 1;
    }

}


