import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class notepad extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      title: "",
      desc: "",
      notes: [],
    };
    this.handleShow = this.handleShow.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  handleShow() {
    this.setState({
      show: true,
    });
  }
  onChangeDesc(e) {
    this.setState({
      desc: e.target.value,
    });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();

    let obj = {
      title: this.state.title,
      desc: this.state.desc,
    };
    this.state.notes.push(obj);
    this.setState({
      show: false,
    });
  }

  deleteNote(title) {
    var arr = this.state.notes.filter((note) => {
      return note.title !== title;
    });
    this.setState({
      notes: arr,
    });
  }

  render() {
    return (
      <div className="body">
        <div className="left-panel">
          <p className="row dashboard">
            <span className="panelText">Dashboard</span>
          </p>
          <p className="row dashboard1">
            <span className="panelText">Lorem</span>
          </p>
          <p className="row dashboard2">
            <span className="panelText">Ipsum</span>
          </p>
        </div>
        <div className="notepad">
          <div className="notepadText">Notepad</div>
          <Button
            className="ellipse"
            onClick={this.handleShow}
            style={{ borderRadius: 50, backgroundColor: "#FF6C40" }}
          >
            <p className="plus">+</p>
          </Button>

          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header>
              <Modal.Title>ADD NOTES</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={this.onSubmit} className="m-3">
                <div className="form-group">
                  <label>Title: </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.onChangeTitle}
                  />
                </div>
                <div className="form-group">
                  <label>Description: </label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    onChange={this.onChangeDesc}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Add Note"
                    className="btn btn-primary"
                  />
                </div>
              </form>
            </Modal.Body>
          </Modal>
          {this.state.notes.map((note) => {
            return (
              <div className="row mt-5" style={{ width: 750 }}>
                <p className="col-3">
                  <strong>{note.title}</strong>
                </p>
                <p className="col-6">{note.desc}</p>
                <button
                  className="col-2 btn btn-primary h-25"
                  onClick={() => this.deleteNote(note.title)}
                >
                  X
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default notepad;
