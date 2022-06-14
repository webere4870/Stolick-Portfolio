const e = React.createElement;
class CourseMaterial extends React.Component {
  constructor(props)
  {
    super(props)
    this.state = {activeCourse: "Temporary"}
  }
  render()
  {
    return e(
      'div',
      {className: "tester", onClick: ()=>console.log("This worked")},
      'Content here mate'
    )
  }
}
  // constructor(props) {
  //   super(props);
  //   this.state = { liked: false };
  // }
  // render() {
  //   if (this.state.liked) {
  //     return 'You liked this.';
  //   }

  //   return e(
  //     'button',
  //     { onClick: () => this.setState({ liked: true })},
  //     'Like'
  //   );

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(e(CourseMaterial));