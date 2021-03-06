import { connect } from 'react-redux';
import Lane from './Lane';
import * as laneActions from './LaneActions';
import { createNote } from '../Note/NoteActions';
import { moveBetweenLanes, deleteLane, updateLane, editLane } from './LaneActions';
import { createNoteRequest } from '../Note/NoteActions';
import { updateLaneRequest, deleteLaneRequest } from './LaneActions';
import { compose } from 'redux';
import { DropTarget } from 'react-dnd';
import ItemTypes from '../Kanban/itemTypes';

const noteTarget = {
 drop(targetProps, monitor) {
   const sourceProps = monitor.getItem();
   const { id: noteId, laneId: sourceLaneId } = sourceProps;

     targetProps.moveBetweenLanes(
       targetProps.lane.id,
       noteId,
       sourceLaneId,
     );
 },
};

const mapStateToProps = (state, ownProps) => ({
  laneNotes: ownProps.lane.notes.map(noteId => state.notes[noteId])
});

const mapDispatchToProps = {
  editLane,
  deleteLane: deleteLaneRequest,
  updateLane: updateLaneRequest,
  addNote: createNoteRequest,
  moveBetweenLanes,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  DropTarget(ItemTypes.NOTE, noteTarget, (dragConnect) => ({
    connectDropTarget: dragConnect.dropTarget()
  }))
)(Lane);