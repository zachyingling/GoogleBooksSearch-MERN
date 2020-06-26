import React from "react";
import "./style.css";
import API from "../../utils/API";
import Results from "../Results/index";
import Footer from "../Footer/index"

class SearchContainer extends React.Component {
  state = {
    title: "",
    results: []
  };
  
  searchBooks = query => {
    API.apiCall(query)
      .then(response =>this.setState({results: response.data }))
      .catch(err =>console.log(err));
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.title);
  };

  render () {
    return (
      <div>
        <div className="container" id="mainContainer">
          <div className="container">
            <h1 className="text" id="searchBookText">Search Book</h1>
            <form className="container">
              <label htmlFor="bookName" className="text" id="enterBook">Enter book name: </label>
              <input type="text" id="bookName" name="title" value={this.state.title} onChange={this.handleInputChange}/>
              <input type="submit" id="searchBook" value="Search" onClick={this.handleFormSubmit} />
            </form>
          </div>
          <div className="container" id="resultsContainer">
            <h2 className="text" id="resultsText">Results: </h2>
            {this.state.results ? this.state.results.map(result => { return <Results
                bookName={result.volumeInfo.title ? result.volumeInfo.title : "Name Not found"}
                bookAuthor={result.volumeInfo.authors ? result.volumeInfo.authors.toString : "Author Not found"}
                bookBio={result.volumeInfo.description ? result.volumeInfo.description : "Bio Not found"}
                viewBtn={result.volumeInfo.canonicalVolumeLink ? result.volumeInfo.canonicalVolumeLink : "/"}
                saveBtn={result.id ? result.id : "No id"}
                key={result.id}
                image={result.volumeInfo.imageLinks.thumbnail ? result.volumeInfo.imageLinks.thumbnail : ""}
              />})
            : <h1>No results</h1>}
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default SearchContainer;