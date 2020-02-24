import * as React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import {useState} from "react";
import Modal from "./model";

type BoardItemProps = {
    index: number
    item: any
}

type BoardItemStylesProps = {
    isDragging: boolean
}

const BoardItemEl = styled.div<BoardItemStylesProps>`
  padding: 8px;
  background-color: ${(props) => props.isDragging ? '#d3e4ee' : '#fff'};
  border-radius: 4px;
  transition: background-color .25s ease-out;

  &:hover {
    background-color: #f7fafc;
  }

  & + & {
    margin-top: 4px;
  }
`;

export const BoardItem = (props: BoardItemProps) => {
    const [editModelActive, setEditModelActive] = useState<boolean>(false);
    const [taskName, setTaskName] = useState<string>("");
    function onEdit() {
        setEditModelActive(true);
    }
    function onEditSubmit() {
        setEditModelActive(false);
    }
    function onDelete() {
        alert("delete");
    }
    return <Draggable draggableId={props.item.id} index={props.index}>
        {(provided, snapshot) => (
            <BoardItemEl
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            >
                {taskName !== "" ? taskName : props.item.content}
                <button style={{marginLeft: 10}} className={'btn btn-danger'} onClick={() => onDelete()}>Delete</button>
                <Modal title={"Edit"}
                       active={editModelActive}
                       onClose={() => setEditModelActive(false)}
                       onSubmit={onEditSubmit}
                       cancellable>
                    <div className="form-group">
                        <input type="text" name="name" value={taskName}
                               onChange={(event) =>
                            setTaskName(event.target.value)}/></div>
                </Modal>
                <button style={{marginLeft: 10}} className={'btn btn-primary'} onClick={() => onEdit()}>Edit</button>
            </BoardItemEl>
            )}
    </Draggable>
};
