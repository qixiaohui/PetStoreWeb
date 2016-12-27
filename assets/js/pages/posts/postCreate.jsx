var React = require('react');
var Render = require('react-dom');
var ReactQuill = require('react-quill');
var api = require('../../service/api');

var postCreate = React.createClass({
    getInitialState: function() {
        return {
            text: '',
        };
    },
    componentDidMount: function(){

    },
    componentDidUnMount: function(){

    },
    submit: function() {
        let option = {
            title: this.refs.title.value,
            image: this.refs.imageUrl.value,
            content: this.state.text,
        };
        api.post('/api/post/create', option, (response) => {
            if(response instanceof Error) {
                console.error(response.message);
                return;
            }
            console.log('success');
        });
    },
    clear: function() {

    },
    onTextChange: function(value) {
        this.setState({ text:value });
    },
    render: function() {
        return (
            <div style={{marginTop: '100px'}}>
                <div className="form-group">
                    <label for="postTitle">Title:</label>
                    <input id="postTite" placeholder="Title" ref="title" type="text" className="form-control"  />
                </div>
                <div className="form-group">
                    <label for="postImage">Image:</label>
                    <input id="postImage" placeholder="Image url..." ref="imageUrl" type="text" className="form-control"  />
                </div>
                <div className="form-group">
                    <label for="postContent">Content:</label>
                    <ReactQuill id="postContent" theme='snow' value={this.state.text} onChange={this.onTextChange} >
                        <ReactQuill.Toolbar key="toolbar"
                                            ref="toolbar"
                                            items={ReactQuill.Toolbar.defaultItems} />
                        <div key="editor"
                             ref="editor"
                             className="quill-contents" />
                    </ReactQuill>
                </div>
                <div className="row">
                    <div style={{paddingTop: '15px', paddingBottom: '15px', paddingLeft: '20px', paddingRight: '20px'}} className="col-lg-6 col-md-6 col-sm-12 c-xs-12">
                        <button onClick={this.submit} type="button" className="btn btn-primary btn-block">Post</button>
                    </div>
                    <div style={{paddingTop: '15px', paddingBottom: '15px', paddingLeft: '20px', paddingRight: '20px'}} className="col-lg-6 col-md-6 col-sm-12 c-xs-12">
                        <button onClick={this.clear} type="button" className="btn btn-danger btn-block">Clear</button>
                    </div>
                </div>
            </div>
        );
    }

});

module.exports = postCreate;