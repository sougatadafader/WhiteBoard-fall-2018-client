import React from "react";


const ListWidget = ({updateListWidget,widget}) =>{

    return(<div className="widget-heading">
        <div className="element-container">
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">List Text</label>
            <div className="col-sm-10">
                <textarea className="form-control" placeholder="Some Items" id={widget.id+'-items'} required="" value={widget.items} onChange={()=>updateListWidget(widget)}/>
            </div>
        </div>
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">List Type</label>
            <div className="col-sm-10">
                <select className="form-control" required="" id={widget.id+'-listtyp'} defaultValue="ul" onChange={()=>updateListWidget(widget)}>
                    <option value="ul" >Un-Ordered</option>
                    <option value="ol" >Ordered</option>
                </select>
            </div>
        </div>
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">Widget Name</label>
            <div className="col-sm-10">
                <input className="form-control" placeholder="Some Name" id={widget.id+'-name'} required="" value={widget.name} onChange={()=>updateListWidget(widget)}/>
            </div>
        </div>

        <h2 className="pt-5">PREVIEW</h2>
        </div>
        <div className="preview-container">
            <widget.listtyp className="text-info">
                {
                    widget.items.split('\n').map((item, index) =>
                        <li key={index}>
                            {item}
                        </li>
                    )
                }
            </widget.listtyp>
        </div>
    </div>)
}

export default ListWidget