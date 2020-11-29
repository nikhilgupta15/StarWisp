import React, { Component } from "react";

class AddPost extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      desc: "",
      posts: [],
    };
    this.handleCancel = this.handleCancel.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleCancel() {
    this.setState({
      desc: "",
    });
  }
  onChangeDesc(e) {
    this.setState({
      desc: e.target.value,
    });
  }
  onSubmit() {
    let obj = {
      desc: this.state.desc,
    };
    this.state.posts.push(obj);
    this.setState({
      desc: "",
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
          <div className="postRectangle" style={{ marginLeft: 80 }}>
            <textarea
              className="postBox"
              value={this.state.desc}
              onChange={this.onChangeDesc}
              style={{ marginLeft: 50 }}
            ></textarea>

            <div className="row" style={{ marginBottom: 2 }}>
              <div className="col cancel">
                <button
                  className="btn btn-danger cancelText"
                  onClick={this.handleCancel}
                >
                  Cancel
                </button>
              </div>
              <div className="col cancel">
                <button
                  className="btn btn-primary postText"
                  onClick={this.onSubmit}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 300, marginLeft: 80 }}>
            {this.state.posts.map((note) => {
              return (
                <div
                  className="postRectangle"
                  style={{
                    height: 204,
                    position: "relative",
                    top: 20,
                    marginBottom: 50,
                  }}
                >
                  <div>
                    <img
                      className="image"
                      src="data:image/jpeg;base64,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"
                    ></img>
                    <div
                      className="teacher"
                      style={{ float: "left", marginTop: 15 }}
                    >
                      <strong>Teacher</strong>
                    </div>
                  </div>
                  <br></br>
                  <p
                    className="paragraph"
                    style={{ float: "left", marginTop: 20 }}
                  >
                    {note.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default AddPost;
