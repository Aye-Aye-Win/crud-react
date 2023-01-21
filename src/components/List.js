import React from 'react'
import './List.css'
import {BsTrash} from 'react-icons/bs'
import {MdOutlineModeEditOutline} from 'react-icons/md'

const List = ({data,isDone,onChecked,id,onDelete,onEdit}) => {
  const handleChange= () => {
  onChecked(id)
  }
  const handleDelete= () => {
  onDelete(id)
  }
  const handleEdit= () => {
  onEdit(id)
  }
  return ( 
    <div className={`listContainer ${isDone && "done"}`}>
      <div className='textContainer'>
      <input type="checkbox" onChange={handleChange} checked={isDone}/>
      <p>{data}</p>
      </div>
      <div className='btnContainer'>
        <button onClick={handleDelete}>
          <BsTrash/>
        </button>
        <button onClick={handleEdit}>
          <MdOutlineModeEditOutline/>
        </button>
      </div>     
    </div>
  )
}

export default List