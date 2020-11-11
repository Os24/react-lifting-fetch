import React, { Component } from 'react'
import CustomInput from '../../Components/CustomInput/CustomInput'
import './PostForm.css'


class componentName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title : "",
            subtitle: "",
            imageUrl : "",
            author : "",
        }
        this.handlerCreateNewPost = this.handlerCreateNewPost.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
handlerCreateNewPost(name, value) {
        this.setState({[name]: value,})
    }

handleSubmit(event){
    event.preventDefault()
    const {title,subtitle,author,imageUrl} = this.state
    const newPost ={
        title,
        author,
        subtitle,
        image:imageUrl,
    }
    fetch('https://reactsessions-ac545.firebaseio.com/.json',{
        method : "POST",
        headers :{
         "Content-Type" : "application/json",
        },
        body : JSON.stringify(newPost)
    })
    .then(response => response.json())
    .then(data=>console.log(data,"Tu contenido se subio con exito padrino"))
}


render() {
        const {title,subtitle,imageUrl,author} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <CustomInput
                     type = "text"
                     value = {title}
                     name = "title"
                     callback = {this.handlerCreateNewPost}
                     />
                    <CustomInput type="text" 
                    value={subtitle}
                    callback={this.handlerCreateNewPost}
                    name = "subtitle"
                    />
                    <CustomInput type="text" 
                    value={imageUrl}
                    callback={this.handlerCreateNewPost}
                    name = "imageUrl"
                    />
                    <CustomInput type="text" 
                    value={author}
                    callback={this.handlerCreateNewPost}
                    name = "author"
                    />
                    <button type="submit">Crear post</button>
                </form>
            </div>
        )
    }
}

componentName.propTypes = {

}

export default componentName