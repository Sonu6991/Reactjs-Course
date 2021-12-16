import React from "react";
const dummy_data = [
  { id: 1, title: "Sonu" },
  { id: 2, title: "Tejas" },
  { id: 3, title: "Ajay" },
  { id: 4, title: "Nayan" },
];
export default function Hoc(Component) {
  return class extends React.Component {
    render() {
      return (
        <>
          {dummy_data.map((data) => {
            return <Component key={data.id} data={data} />;
          })}
        </>
      );
    }
  };
}
