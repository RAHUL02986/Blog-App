import React from "react";
import Home from './Home';
import Read from "./Read-more";
class App extends React.Component{
    constructor(){
        super();
        this.state={
            articles:[],

        }
    }

    async componentDidMount(){
        try {
            const res = await fetch('https://api.realworld.io/api/articles');
            const articles = await res.json();
            this.setState({
                articles:articles.articles
            })

        } catch (error) {
            console.log(error)
        }
    }
    render(){
        return<>
        <div className="container">
        </div>
        <Home articles={this.state.articles}/>
        <Read articles={this.state.articles}/>
            </>

    }
}
export default App;