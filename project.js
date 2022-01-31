// // const domContainer = document.querySelector('#projects_container');
// const domContainer = document.getElementById('project_container');


// // ReactDOM.render(e(LikeButton), domContainer);

// ReactDOM.render(<h1>Hello, world!</h1>, domContainer);


'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#project_container');
ReactDOM.render(e(LikeButton), domContainer);


const domContainers = document.querySelectorAll('.project_container');

for (const domContainer of domContainers) {
    ReactDOM.render(e(LikeButton), domContainer);
}

ReactDOM.render(e(LikeButton), domContainer);