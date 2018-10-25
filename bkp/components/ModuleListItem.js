import React from 'react'

const ModuleListItem = ({item, edit, deleteMod}) => {
    return(
        <li className="list-group-item">
            {item.title}
            <span className="float-right">
                <i onClick={() => deleteMod(item.title)} className= "fa fa-trash mr-3"></i>
                <i onClick={() => edit(item.title)} className="fa fa-pencil"></i>
            </span>

        </li>
    )
}

export default ModuleListItem