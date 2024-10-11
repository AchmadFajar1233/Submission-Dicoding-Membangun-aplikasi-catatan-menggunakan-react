import React from "react";
import "./style.css";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      note: "",
      titleCharacter: 50,
    };
    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onNoteChangeHandler = this.onNoteChangeHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
  }
  onTitleChangeHandler(ev) {
    if (ev.target.value.length <= 50) {
      this.setState(() => {
        return {
          title: ev.target.value,
          titleCharacter: 50 - ev.target.value.length,
        };
      });
    } else {
      alert("judul tidak bisa lebih dari 50 karakter");
    }
  }
  onNoteChangeHandler(ev) {
    this.setState(() => {
      return {
        note: ev.target.value,
      };
    });
  }
  onSubmit(ev){
    ev.preventDefault()
    this.props.addNote(this.state)
    this.setState(() =>{
        return{
            title: "",
            note: "",
            titleCharacter: 50,
        }
    })
  }

  render() {
    return (
      <div className="note__input">
        <form onSubmit={this.onSubmit}>
          <small>Sisa Krakter: {this.state.titleCharacter}</small>
          <label htmlFor="title">
            <h2>Judul</h2>
          </label>
          <input
            type="text"
            id="title"
            placeholder="Judul"
            value={this.state.title}
            onChange={this.onTitleChangeHandler}
          />
          <label htmlFor="body">
            <h2>Catatan</h2>
          </label>
          <textarea
            type="text"
            id="body"
            placeholder="Masukan Catatan"
            value={this.state.note}
            onChange={this.onNoteChangeHandler}
            rows={10}
            cols={20}
          />
          <button type="submit">
            <img src="/svg/addIcon.svg" alt="" />
          </button>
        </form>
      </div>
    );
  }
}
export default NoteInput;
