import React, { Component } from 'react'
import Post from '../../Components/Posts/Post'

class PostsLists extends Component {
    constructor(props) {
        super(props)
        this.state ={
            posts:[]
        }
this.renderPosts = this.renderPosts.bind(this)
    }

    componentDidMount(){
        fetch('https://reactsessions-ac545.firebaseio.com/.json').then(data=>
        data.json()).then(json=>{
            let castedData = [];
            for( let i in json ){
                let post = json[i]
                post['i'] = i
                castedData.push(post)
            }
            this.setState({posts:castedData,})
        })
    }

renderPosts(){
    return this.state.posts.map( ({ i,title,subtitle,author }) =>
       ( <Post key ={i} title ={title} subtitle ={subtitle} author={author}/>
    ))
}


    render() {
        return (
            <div>
               {this.renderPosts()}
            </div>
        )
    }
}



export default PostsLists