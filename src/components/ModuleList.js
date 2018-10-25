import React from 'react'
import ModuleListItem from "./ModuleListItem";

const ModuleList = ({modules, deleteModule, selectModule, selectedModule,changeModule,addModule,editModule}) =>
        <ul className="list-group">
                        <li className="list-group-item">
                            <input type="text" id="module-add" className="col-sm-9" />
                            <button className="col-sm-3 btn btn-primary mb-1" id="module-add-btn" onClick={()=>addModule()}>Add</button>
                        </li>
        {
            modules.map((module, index) =>
                <ModuleListItem
                    selected={selectedModule === module}
                    selectModule={selectModule}
                    deleteModule={deleteModule}
                    editModule={editModule}
                    key={index}
                    module={module}/>
            )
        }
        </ul>

export default ModuleList