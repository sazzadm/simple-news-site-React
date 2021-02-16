import React, { Component } from 'react';
import Header from '../Component/Header';
import News from '../news';
import {newsCategory} from '../news/cagegory';
import NewsList from '../Component/NewsList';
import Pagination from '../Component/Pagination';
import Spinner from '../Component/Spinner';

const news = new News(newsCategory.entertainment);  
class App extends Component {
  state = {
    news:{},
    isLoading:true
  }
  
  componentDidMount(){
    news.getNews()
    .then(data=>{
      this.setState({
        news:data,
        isLoading:false
      })
    })
  }
  
  // change category
  changeCategory = (category) =>{
    this.setState({isLoading:true})
    console.log(`${category} category clicked.`,this.state.newscategory);
    news.setCategory(category)
    .then( data => {
      this.setState({news:data,isLoading:false})
    })
    .catch((e)=>{
      throw new Error(e)
    })
  }
  // goto next page
  next = () => {
    if(this.state.news.isNext){
      this.setState({isLoading:true})
    }
    news.next()
    .then(data =>{
        this.setState({news:data,isLoading:false})
    })
    .catch(e=>{
      this.setState({isLoading:false})
      throw new Error(e)
    })
  } 

  // goto prev page
  prev = () => {
    if(this.state.news.isPrev){
      this.setState({isLoading:true})
    }
    news.prev()
    .then(data =>{
        this.setState({news:data,isLoading:false})
    })
    .catch(e=>{
      this.setState({isLoading:false})
      throw new Error(e)      
    })
  } 
  // handle page change with user input
  handlePageChange = value => {
    this.setState({
      news:{
        ...this.state.news,
        currentPage:value
      }
    })
  }
  goToPage = value =>{
    this.setState({isLoading:true})
    news.setCurrentPage(value)
        .then( data => {
          this.setState({news:data, isLoading:false})
        })
        .catch( e => {
          throw new Error(e)
        })
  }
  // search 
  search = (searchTerm) => {
    this.setState({isLoading:true})
    news.search(searchTerm)
    .then(data => {
      this.setState({news:data,isLoading:false})
    })
    .catch(e=>{
      this.setState({isLoading:false})
      throw new Error(e)
    })
  }
  render() {
    const {articles,category,isNext,isPrev,totalPage,currentPage,totalResults} = this.state.news;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-10 offset-sm-1 col-md-6 offset-md-3">
            <Header 
              category={category}
              changeCategory = {this.changeCategory}
              search = {this.search}
            />
            <div className="d-flex justify-content-between">
              <p className='text-black-50'>
                About {this.state.news.totalResults} result found.
              </p>
              <p className='text-black-50'>
                {this.state.news.currentPage} page of {this.state.news.totalPage}
              </p>
            </div>          
            <div className="row">
              <div className="col-sm-12  col-md-12">
                  
                  {
                    this.state.isLoading ? (
                      <Spinner />
                    ):(
                      <NewsList 
                      news={this.state.news.articles}
                  />
                    )
                  }
              </div>
            </div>
            <Pagination 
              isNext={isNext}
              isPrev={isPrev}
              next={this.next}
              prev={this.prev}
              currentPage={currentPage}
              totalPage={totalPage}
              handlePageChange = {this.handlePageChange}
              goToPage={this.goToPage}
            />
            
          </div>
        </div>
      </div>
    )
  }
}

export default App;


