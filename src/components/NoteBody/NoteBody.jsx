import React from "react";
import NoteInput from "../inputNote/InputNote";
import NoteList from "../NoteList/NoteList";
import "./style.css";
import { getInitialData } from "../../utils";
import HeaderNote from "../Header/Header";

class NoteBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: getInitialData(),
      searchValue: ''
    };
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchieveHandler = this.onArchieveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this)
  }
  onAddNoteHandler({ title, note }) {
    this.setState((previosState) => {
      return {
        data: [
          ...previosState.data,
          {
            id: +new Date(),
            title,
            body: note,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }
  onDeleteHandler(id) {
    const notes = this.state.data.filter((note) => note.id !== id);
    this.setState(() => {
      return {
        data: notes,
      };
    });
  }
  onArchieveHandler(id) {
    const notes = this.state.data.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });
    this.setState(() => {
      return {
        data: notes,
      };
    });
  }
  onSearchHandler(value){

    this.setState(() => {
        return{
            searchValue: value,
        }
    })
  }
  render() {
    const {data, searchValue} = this.state
    const filteredNote = data.filter((note) => note.title.toLowerCase().includes(searchValue.toLowerCase()))
    const activedNotes = filteredNote.filter((note) => !note.archived);
    const archivedNotes = filteredNote.filter((note) => note.archived);

    return (
      <>
        <header>
          <HeaderNote searchNote={this.onSearchHandler} />
        </header>
        <main>
          <NoteInput addNote={this.onAddNoteHandler} />
          <hr />
          <NoteList
            dataActiveNote={activedNotes}
            dataArsipNote={archivedNotes}
            onDelete={this.onDeleteHandler}
            onArchieve={this.onArchieveHandler}
          />
        </main>
      </>
    );
  }
}

export default NoteBody;
