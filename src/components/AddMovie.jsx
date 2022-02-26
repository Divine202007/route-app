import React from 'react';
import { useState } from 'react';
import StarRating from './StarRating';

export default function AddMovie(props) {

    const [link, setLink] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    return (
        <div class="container">
            <h4>Add new movies down below</h4>   
            <div className='row'>
                <div className="col-md-5" id="bg-clear">
                    
                    <hr />
                    <div className="row">
                        <label className="label col-md-2 control-label">TITLE</label>
                        <div className="col-md-10">
                            <input
                                type="text"
                                className="from-control"
                                value={title}
                                placeholder="title..."
                                onChange={(e) =>  {
                                    e.preventDefault();
                                    setTitle(e.target.value)}
                                }
                            />
                        </div>
                    </div>

                    <div className="row">
                        <label className="label col-md-2 control-label">URL</label>
                        <div className="col-md-10">
                            <input
                                type="url"
                                className="from-control"
                                value={link}
                                placeholder="URL..."
                                onChange={(e) => {
                                    e.preventDefault();
                                    setLink(e.target.value)}
                                }
                            />
                            <br />
                        </div>
                    </div>

                    <div className="row">
                        <label className="label col-md-2 control-label">DESCRIPTION</label>
                        <div className="col-md-10">
                            <textarea 
                                className="from-control"
                                required
                                onChange={(e) => {
                                    e.preventDefault();
                                    setDescription(e.target.value)}
                                }
                            />
                        </div>
                    </div>

                    <div className="row">
                        <label className="label col-md-2 control-label">IMAGE</label>
                        <div className="col-md-10 border-b-none">
                            <input type="file" />
                        </div>
                    </div>

                    <div className="row">
                        <label className="label col-md-2 control-label">RATING</label>
                        <div className="col-md-4">
                            <StarRating />
                        </div>
                    </div>
                    <hr />
                    <div className="bottom-btn">
                        <a href="/">
                            <div className="btn btn-info">Submit</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
