import React,{Component} from 'react';



class SearchBar extends Component{
    constructor(){
        super();
        this.state={searchText: ''}
    }

    onInputChange =(event)=>{
        this.setState({searchText: event.target.value});
    };

    onFormSubmit = (event) =>{
        event.preventDefault();



        this.props.onTermSubmit(this.state.searchText);
        //READ THESE LINES**
        // any time the user submits the form we're going
        // to eventually try to call a callback passed down
        // from the app component.


        // TODO: make sure we call
        // callback from parent component
        // so that we can tell the app that the user
        // just committed the form and that they probably
        // want to attempt to initiate a new search of
        // youtube api
    };

    render() {

        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <label>Video Search</label>
                        <input type="text" value={this.state.searchText} onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;