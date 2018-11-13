import React from "react";

const HeadingWidget = ({updateHeadingWidget,widget}) =>
    <div className="heading-widget">
        <div className="element-container">
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Widget Name</label>
                <div className="col-sm-10">
                    <input className="form-control" placeholder="Heading text" id={widget.id+'-heading'} required="" value={widget.title} onChange={()=>updateHeadingWidget(widget)}/>
                </div>
            </div>
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">Heading Text</label>
            <div className="col-sm-10">
                <input className="form-control" placeholder="Heading text" id={widget.id+'-heading'} required="" value={widget.text} onChange={()=>updateHeadingWidget(widget)}/>
            </div>
        </div>
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">Heading Size</label>
            <div className="col-sm-10">
                <select className="form-control" required="" id={widget.id+'-size'} value={widget.size}  onChange={()=>updateHeadingWidget(widget)}>
                    <option value="h1" >Heading 1</option>
                    <option value="h2" >Heading 2</option>
                    <option value="h3" >Heading 3</option>
                    <option value="h4" >Heading 4</option>
                    <option value="h5" >Heading 5</option>
                    <option value="h6" >Heading 6</option>
                </select>
            </div>
        </div>

        <h2 className="pt-5">PREVIEW</h2>
        </div>
        <div className="preview-container text-info">

        {widget.size === "h1" && <h1>{widget.text}</h1>}
        {widget.size === "h2" && <h2>{widget.text}</h2>}
        {widget.size === "h3" && <h3>{widget.text}</h3>}
        {widget.size === "h4" && <h4>{widget.text}</h4>}
        {widget.size === "h5" && <h5>{widget.text}</h5>}
        {widget.size === "h6" && <h6>{widget.text}</h6>}
        </div>
    </div>

export default HeadingWidget