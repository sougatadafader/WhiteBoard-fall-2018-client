import React from "react";

const ImageWidget = ({updateImageWidget,widget}) =>
    <div className="widget-heading">
        <div className="element-container">
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">Image URL</label>
            <div className="col-sm-10">
                <input className="form-control" placeholder="Image URL" id={widget.id+'-src'} required="" value={widget.src} onChange={()=>updateImageWidget(widget)}/>
            </div>
        </div>
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">Widget Name</label>
            <div className="col-sm-10">
                <input className="form-control" placeholder="Widget Name" id={widget.id+'-name'} required="" value={widget.name} onChange={()=>updateImageWidget(widget)}/>
            </div>
        </div>
        <h2 className="pt-5">PREVIEW</h2>
        </div>
        <div className="preview-container">
            <img src={widget.src}></img>
        </div>
    </div>

export default ImageWidget































