import React from "react";
import { NavLink } from "react-router-dom";
class Home extends React.Component{
    constructor(props){
        super(props);
this.state={}
    }
    render(){
    
        console.log(this.props.articles)
        return<>
            <div className="home-header">
                <h2>Conduit</h2>
                <h3>A place to share your knowledge.</h3>
            </div>

            <section className="flex container">
                <div>
                 <h3 className="global">Global Feed</h3>
                 <hr/>
                 {this.props.articles.map((article)=>{
                    return(
                    <div className="flex"> 
                        <article>
                        <article>
                        <div className="flex">
                            <article className="flex">
                            <img src={article.author.image} alt={article.author.username}/>
                            <div>
                            <h3 className="name">{article.author.username}</h3>
                            <h5>Thu July 27 2023</h5>
                            </div>
                            </article>
                            <button className="fav">💚{article.favoritesCount}</button>
                        </div>
                        <h3 className="slug">{article.slug}</h3>
                        <h4>{article.description.substring(0,100)+"..."}</h4>
                        <div>
                        </div>
                        <div className="flex">
                      <NavLink to='/read/more'><button className="read-more">Read more ...</button></NavLink> 
                      <div>
                      {
                        article.tagList.map((tag)=>{
                            return (
                                <button className="btn-2">{tag}</button>
                            )
                        })
                      }
                      </div>
                      </div>
                      <hr/>
                        </article>                            
                       </article> 
                       <section>

                        </section>  
                    </div>   
                    )
                 })}

                </div>

            </section>
        
        </>
    }
}
export default Home;