import React from 'react'
import ModuleListItem from "./ModuleListItem"
export default class ModuleList extends React.Component{

    constructor(props) {
        super(props);
        this.state ={
            /*selectedModule: modules[0],*/
            newModuleTitle: '',
            selectedModuleTitle:'',
            isEdit:false,
            modules: [
                {

                    title:'Week 1'
                },
                {

                    title:'Week 2'
                }
            ]
        }
    }

    formChanged = (event) => {
        this.setState({
            newModuleTitle: event.target.value
        })
    }
    addNewModule = () => {
        let modules = this.state.modules;
        if(!this.state.isEdit) {
            modules.push(
                {
                    title: this.state.newModuleTitle
                }
            )
        }
        else
        {
            let selectedModule = this.state.selectedModuleTitle
            for(let m in modules)
            {
                if(modules[m].title == selectedModule)
                {
                    modules[m].title = this.state.newModuleTitle
                    break
                }
            }
            this.setState(
                {
                    isEdit:false
                }
            )
            this.setState(
                {
                    selectedModuleTitle:''
                }
            )
        }
        this.setState(
            {
                modules : modules
            }
        )
        document.getElementById('title-adder').value=''
    }
    edit = (title) => {
        this.setState(
            {
                isEdit:true
            }
        )
        this.setState(
            {
                selectedModuleTitle:title
            }
        )
        document.getElementById('title-adder').value = title
    }
    deleteMod = (title) => {

        let modules = this.state.modules
        let ctr=0
        for(let m in modules)
        {
            if(modules[m].title == title)
            {
                modules.splice(ctr,1)
                break
            }
            ctr++
        }
            this.setState(
            {
                modules : modules
            }
        )
    }
    render() {
        return (
            <div>
                    <ul className="list-group">
                        <li className="list-group-item active">
                            Modules
                        </li>
                        {
                            this.state.modules.map((module,index) => (
                                <ModuleListItem
                                    key={index}
                                    edit={this.edit}
                                    deleteMod={this.deleteMod}
                                    item={module}/>
                            ))
                        }
                        <li className="list-group-item ">
                            <input onChange={this.formChanged} className="col-sm-10 "  id="title-adder"/>
                            <button onClick={this.addNewModule} className="btn btn-primary fa fa-plus col-sm-2 pt-1"></button>
                        </li>
                    </ul>
            </div>
        );
    }
}