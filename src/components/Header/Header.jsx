import React from 'react'
import './style.css'



class HeaderNote extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            catatan: ''
        }
        this.onFindNoteHandler = this.onFindNoteHandler.bind(this)
    }
    onFindNoteHandler(ev){
        this.props.searchNote(ev.target.value)
        this.setState(() =>{
            return{
                catatan: ev.target.value
            }
        })
        console.log(ev.target.value)
    }
    render(){
        return(
            <div className='header__notes'>
                <h1>Notes App</h1>
                <div>
                    <input type="text"  placeholder='Cari Catatan' onChange={this.onFindNoteHandler}/>
                </div>
            </div>
        )
    }
}

export default HeaderNote
