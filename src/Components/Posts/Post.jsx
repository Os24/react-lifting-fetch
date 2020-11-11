function Post (props) {
    const { title, subtitle, author } = props;
    return(
        <div className="Post">
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <p>{author}</p>
        </div>
    )
}

export default Post