import React from 'react'

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = { searchTerm: ''}
        this.onInputChange = this.onInputChange.bind(this)
        
    }

    onInputChange(event){
        debugger;
        this.setState({searchTerm:event.target.value})
        this.props.onSearchTermChange(event.target.value)
        console.log(this.state)
    }
    render(){
        return(
            <div className="search-bar">
                <input value={this.state.searchTerm} 
                onChange={this.onInputChange} />
            </div>
        );
    }
}

export default SearchBar;