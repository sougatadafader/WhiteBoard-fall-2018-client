import React from 'react'

const ModuleListItem = ({module, deleteModule, selectModule, selected, editModule}) =>

    <li className={selected ? 'list-group-item active': 'list-group-item'} id={module.id} onClick={() => selectModule(module)}>
        {module.title}
        <button
            onClick={() => deleteModule(module)} className="btn fa fa-trash ml-1 pull-right">

        </button>
        <button
            onClick={() => editModule(module)} className="btn fa fa-pencil pull-right">
        </button>

    </li>


export default ModuleListItem