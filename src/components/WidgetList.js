import React,{Component} from 'react'
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";
import LinkWidget from "./LinkWidget";
import ImageWidget from "./ImageWidget";
import ListWidget from "./ListWidget";
import style from "./WidgetList.style.css"

class WidgetList extends Component {

    constructor(props){
        super(props);
        console.log("Props in constructor"+ this.props.widgets)
        this.state = {
            widgets: [],
            updated:false
        }
        //props.init(props.widgetsInit,props.topic)
        this.props.loadWidgets(this.props.topicId)
    }
    componentDidMount() {
        console.log("topic: "+ this.props.topicId)

    }
    componentDidUpdate(){

        if(this.state.updated) {
            this.state.updated = false
            this.props.loadWidgets(this.props.topicId)
        }


    }
    isEquivalent = (a,b) =>
    {
        let aProps = Object.getOwnPropertyNames(a);
        let bProps = Object.getOwnPropertyNames(b);

        // If number of properties is different,
        // objects are not equivalent
        if (aProps.length != bProps.length) {
            return false;
        }

        for (let i = 0; i < aProps.length; i++) {
            let propName = aProps[i];

            // If values of same property are not equal,
            // objects are not equivalent
            if (a[propName] !== b[propName]) {
                return false;
            }
        }

        // If we made it this far, objects
        // are considered equivalent
        return true;
    }
    updateHeadingWidget = (widget) =>
    {
        let newHeading = document.getElementById(widget.id+'-heading').value
        let newSize = document.getElementById(widget.id+'-size').value
      
        widget.text = newHeading
        widget.size = newSize
        console.log('Before Sending : '+JSON.stringify(widget))
        this.state.updated = true
        this.props.updateWidget('HEADING',widget.id,widget)
    }
    updateParagraphWidget = (widget) =>
    {
        let newHeading = document.getElementById(widget.id+'-para').value
        widget.text = newHeading
        this.props.updateWidget(widget)
    }

    updateLinkWidget = (widget) =>
    {
        let newHeading = document.getElementById(widget.id+'-name').value
        let newUrl = document.getElementById(widget.id+'-url').value
        let newText = document.getElementById(widget.id+'-text').value
        widget.name = newHeading
        widget.href = newUrl
        widget.text = newText
        this.props.updateWidget(widget)
    }
    updateImageWidget = (widget) =>
    {
        let newHeading = document.getElementById(widget.id+'-name').value
        let newUrl = document.getElementById(widget.id+'-src').value
        widget.name = newHeading
        widget.src = newUrl
        this.props.updateWidget(widget)
    }
    updateListWidget = (widget) =>
    {
        let name = document.getElementById(widget.id+'-name').value
        let items = document.getElementById(widget.id+'-items').value
        let listtyp = document.getElementById(widget.id+'-listtyp').value
        widget.name = name
        widget.listtyp = listtyp
        widget.items =items
        this.props.updateWidget(widget)
    }
    updateType = (widget) =>
    {
        let type = document.getElementById(widget.id+'-selector').value
        widget.type = type
        if(type === 'LIST')
        {
            widget.items = 'Item 1,Item 2'
            widget.listtyp = 'ul'
        }
        this.props.updateWidget(widget)
    }
    previewToggle = () =>
    {
        let toggleButton = document.getElementById('preview-btn')
        let previewType = toggleButton.getAttribute('data-preview')
        let widgetList = document.getElementById('widget-list')
        if(previewType === 'Off')
        {
            toggleButton.setAttribute('data-preview','On')
            toggleButton.innerHTML = 'Preview On'
            widgetList.classList.add('hide')
        }
        else
        {
            toggleButton.setAttribute('data-preview','Off')
            toggleButton.innerHTML = 'Preview Off'
            widgetList.classList.remove('hide')
        }
    }
    moveUp = (widget) =>
    {
        this.props.moveUp(widget)
    }
    moveDown = (widget) =>
    {
        this.props.moveDown(widget)
    }
    removeWidget = (id,type) =>
    {
        this.state.updated = true
        this.props.deleteWidget(id,type,this.props.topicId)

        //this.props.loadWidgets(this.props.topicId)
    }

    render(){
        console.log("Helloworld: "+this.props.widgets)
        return(
            <div>
                <div className="mb-2 clearfix">
                    <div className="pull-right">
                        <span className="h5 ml-3 mr-3">Preview</span>
                        <label className="switch">
                            <input type="checkbox" id='preview-btn' data-preview="Off" onClick={()=>this.previewToggle()}/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <button type="button" className="pull-right btn btn-success">Save</button>

                </div>

                <ul className="list-group m-0" id="widget-list">
                    {

                        this.props.widgets.map((widget, index) =>
                            <li key={index} className="list-group-item widget-list-item">
                                <div className="row mb-2">
                                    <div className="col-7 h1">{widget.widgetType} Widget</div>
                                    <div className="col-5">
                                    <a  href="#" onClick={()=>this.moveUp(widget)}><i className="fa fa-arrow-up mr-2 p-2 btn-secondary"></i></a>
                                    <a  href="#" onClick={()=>this.moveDown(widget)}><i className="fa fa-arrow-down mr-2 p-2 btn-secondary"></i></a>

                                    <select id={widget.id+'-selector'} defaultValue="HEADING" value={widget.type} onChange={()=>this.updateType(widget)}>
                                        <option value="HEADING" >Heading</option>
                                        <option value="PARAGRAPH">Paragraph</option>
                                        <option value="LIST" >List</option>
                                        <option value="IMAGE" >Image</option>
                                        <option value="LINK">Link</option>
                                    </select>
                                    <button
                                        onClick={() => this.removeWidget(widget.id,widget.widgetType)}
                                        className="col-1 p-1 btn btn-danger fa fa-times pull-right">
                                    </button>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div>
                                    {console.log(widget)}
                                    {widget.widgetType === "HEADING" && <HeadingWidget updateHeadingWidget={this.updateHeadingWidget}
                                                                                 widget={widget}/>}
                                    {widget.widgetType === "PARAGRAPH" && <ParagraphWidget updateParagraphWidget={this.updateParagraphWidget}
                                                                                     widget={widget}/>}
                                    {widget.widgetType === "LINK" && <LinkWidget updateLinkWidget={this.updateLinkWidget}
                                                                           widget={widget}/>}
                                    {widget.widgetType === "IMAGE" && <ImageWidget updateImageWidget={this.updateImageWidget}
                                                                             widget={widget} />}
                                    {widget.widgetType === "LIST" && <ListWidget updateListWidget={this.updateListWidget}
                                                                           widget={widget}/>}
                                </div>
                            </li>

                        )
                    }

                </ul>
                <button className="btn btn-danger pull-right m-4" id="add-widget"  onClick={() => this.props.createWidget(this.props.topicId,
                    "HEADING",
                    {
                    'title': 'HEADING',
                    'size': 'h1',
                    'text': 'Demo Heading'
                })
                }><i className="fa fa-plus"></i></button>
            </div>

        )
    }

}
export default WidgetList