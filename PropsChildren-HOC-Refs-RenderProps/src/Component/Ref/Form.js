import React, { Component } from "react";

// export default class innerComp extends Component {
//   submit = (event) => {
//     event.preventDefault();
//     this.props.onSubmit();
//   };
//   render() {
//     return (
//       <form onSubmit={this.submit}>
//         <label htmlFor="fname">First name</label>
//         <input type="text" id="fname" />
//         <label htmlFor="lname">Last name</label>
//         <input type="text" id="lname" />
//         <button>submit</button>
//       </form>
//     );
//   }
// }
const Form = React.forwardRef((props, refs) => {
  // console.log(refs);
  return (
    <form>
      <label htmlFor="fname">First name</label>
      <input type="text" id="fname" ref={refs.ref} />
      <label htmlFor="lname">Last name</label>
      <input type="text" id="lname" ref={refs.ref1} />
    </form>
  );
});

export default Form;
