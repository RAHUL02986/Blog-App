import React from "react";
class Read extends React.Component{
    constructor(props){
        super(props);
this.state={
    singleAticle :[],
}
    }
    async componentDidMount(){
        try {
            const res = await fetch('https://api.realworld.io/api/articles');
            const articles = await res.json();
            this.setState({
                singleAticle:articles.articles
            })

        } catch (error) {
            console.log(error)
        }
    }

    render(){
        console.log(this.props.singleAticle)
        return<div>
            {
               this.state.singleAticle.map((article)=>{
                    return(
                        <h5>{article.description
                        }</h5>
                    )
                })
            }

                 {/* {this.props.articles.map((article)=>{
            return(
                <h1>{article.slug}</h1>
            )
        })} */}
        </div>
    }
}

export default Read;