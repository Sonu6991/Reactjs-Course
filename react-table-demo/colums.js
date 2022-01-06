const colums = [
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First name",
        Footer: "First name",
        accessor: "firstName", // accessor is the "key" in the data
      },
      {
        Header: "Last name",
        Footer: "Last name",
        accessor: "lastName", // accessor is the "key" in the data
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Gender",
        Footer: "Gender",
        accessor: "gender", // accessor is the "key" in the data
      },
      {
        Header: "Age",
        Footer: "age",
        accessor: "age", // accessor is the "key" in the data
      },
      {
        Header: "Contact no",
        Footer: "Contact no",
        accessor: "contact", // accessor is the "key" in the data
      },
    ],
  },
  {
    Header: "Description",
    Footer: "Description",
    accessor: "description",
  },
];
export default colums;
