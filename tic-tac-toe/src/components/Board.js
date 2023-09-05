import React from 'react'
import { Box } from './Box'
import "./Board.css"

export const Board = ({board,onClick}) => {
  return (
    <div className='board'>
        {board.map((ele,idx)=>{
            return <Box value={ele} onClick={()=> ele===null && onClick(idx)}/>
        })}
        </div>
  )
}
