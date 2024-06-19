import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const items = [
  { id: '1', content: 'First task' },
  { id: '2', content: 'Second task' },
];

const KanbanPage = () => {
  const onDragEnd = (result) => {
    // Logic for drag and drop
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <h1>Kanban</h1>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {item.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default KanbanPage;
