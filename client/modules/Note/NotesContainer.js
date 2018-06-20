import { connect } from 'react-redux';
import Notes from './Notes';
import * as noteActions from '../Note/NoteActions';
import { deleteNoteRequest, editNote, updateNoteRequest, moveWithinLane } from '../Note/NoteActions';

const mapDispatchToProps = {
  onValueClick: editNote,
  updateNote: updateNoteRequest,
  deleteNote: deleteNoteRequest,
  moveWithinLane,
  editNote
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);