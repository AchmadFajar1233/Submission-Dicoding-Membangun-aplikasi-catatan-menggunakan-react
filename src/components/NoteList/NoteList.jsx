import React from "react";
import NoteCard from "../NoteCard/NoteCard";
import { showFormattedDate } from "../../utils";
import "./style.css";

const NoteMapList = ({data, onDelete, onArchieve}) => {
    return(
        <>
        <div className="note__list">
        {data?.length > 0 ? (
            data.map((data, index) =>{
                return(
                    <NoteCard 
                    key={index}
                    title={data.title}
                    date={showFormattedDate(data.createdAt)}
                    body={data.body}
                    id={data.id}
                    onDelete={onDelete}
                    onArchieve={onArchieve}
                    />
                )
            })
        ):(
            <h2 className="empty__note">Catatan Kosong</h2>
        )}
        </div>
        </>
    )
}
const NoteList = ({ dataActiveNote, dataArsipNote, onDelete, onArchieve }) => {
  return (
      <>
      <div className="note__list-container">
        <h2>Catatan Aktif</h2>
        <hr />
        <NoteMapList data={dataActiveNote} onDelete={onDelete} onArchieve={onArchieve} />
      </div>
      <div className="note__list-container">
        <h2>Catatan Arsip</h2>
        <hr />
        <NoteMapList data={dataArsipNote} onDelete={onDelete} onArchieve={onArchieve} />
      </div>
      </>
  );
};

export default NoteList;
