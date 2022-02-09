

const Cards = ({imgUrl, title, paragraph, linkButton}) => {
    return(
        <div className="project-card">
             <img src={imgUrl} alt="project"/>
             <h3>{title}</h3>
             <p>{paragraph}</p>
             <p><a href={linkButton}>Github Link</a></p>

        
        </div>
    )
}

export default Cards