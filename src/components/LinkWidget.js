import React from "react";

const LinkWidget = ({updateLinkWidget,widget}) =>
    <div className="heading-widget">
        <div className="element-container">
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">Widget Name</label>
            <div className="col-sm-10">
                <input className="form-control" placeholder="Widget Name" id={widget.id+'-name'} required="" value={widget.title} onChange={()=>updateLinkWidget(widget)}/>
            </div>
        </div>
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">Link Url</label>
            <div className="col-sm-10">
                <input className="form-control" placeholder="Link URL" id={widget.id+'-url'} required="" value={widget.src} onChange={()=>updateLinkWidget(widget)}/>
            </div>
        </div>
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">Link Text</label>
            <div className="col-sm-10">
                <input className="form-control" placeholder="Link text" id={widget.id+'-text'} required="" value={widget.linkText} onChange={()=>updateLinkWidget(widget)}/>
            </div>
        </div>
        <h2 className="pt-5">PREVIEW</h2>
        </div>
        <div className="preview-container">
        <a href={widget.src}>{widget.linkText}</a>
        </div>
    </div>

export default LinkWidget