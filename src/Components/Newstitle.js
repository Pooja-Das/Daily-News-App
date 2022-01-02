import React, { Component } from 'react'

export class Newstitle extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <>

                <div className="card" >
                    <img src={imageUrl} className="card-img-top" alt="Image not Available" />
                    <div className="card-body">
                    <span class="badge bg-danger">{source}</span>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>

                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>

                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn 
                        btn-sn btn-primary">Read More</a>
                    </div>
                </div >
            </>
        )
    }
}

export default Newstitle
