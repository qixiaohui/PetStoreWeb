var React = require('react');
var api = require('../../service/api');
var _ = require('underscore');

var postDetail = React.createClass({
    getInitialState: function() {
        return {
            content: {},
        };
    },
    componentWillMount: function() {
        locationArr = window.location.href.split('/');
        const index = locationArr[locationArr.length-1];
        api.get('/api/post/'+index, (response) => {
            if(response instanceof Error) {
                console.error(response.message);
                return;
            }
            response.data.contentList = JSON.parse(response.data.contentList);
            response.data.imageList = JSON.parse(response.data.imageList);
            this.setState({content: response.data});
        });
    },
    render: function() {
        let html = null;
        if(this.state.content.title)
            if(this.state.content.contentList.length === 0
                || this.state.content.imageList.length === 0) {
                if(this.state.content.contentList.length > 0) {
                    html = _.map(this.state.content.contentList, (content) => {
                        return (<p>{content}</p>);
                    });
                } else {
                    html = _.map(this.state.content.imageList, (image) => {
                        return (<img style={{width: '90%', margin: 'auto'}} src={image} />);
                    });
                }
            } else {
                html = _.map(this.state.content.imageList, (image, index) => {
                    return(<div><img style={{width: '90%', margin: 'auto'}} src={image} />
                        <h3 style={{paddingTop: '10px', paddingBottom: '10px'}}>{this.state.content.contentList[index]}</h3></div>);
                });
            };


        return (
            <div className="row marketing" style={{marginTop: '100px'}}>
                <div>
                    <h2>{this.state.content.title}</h2>
                </div>
                <div style={{float: 'right', paddingRight: '20px'}}>
                    <p style={{color: '#5d5f60'}}>Post by: Tom</p>
                </div>
                <div className="col-lg-offset-1  col-lg-7 col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 col-xs-offset-1 col-xs-10" style={{paddingTop: '30px'}}>
                    {html}
                </div>
            </div>
        );
    }
});

module.exports = postDetail;