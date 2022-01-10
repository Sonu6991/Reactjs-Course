
export const COLUMNS = [
    {
        id: 'id',
        label: 'ID',
        minWidth: 20,
        align: 'left',
        flex: 1
    },
    {
        id: 'first_name',
        label: 'First Name',
        minWidth: 50,
        align: 'left',
        flex: 2
    },
    {
        id: 'last_name',
        label: 'Last Name',
        minWidth: 50,
        align: 'left',
        flex: 2
    },
    {
        id: 'email',
        label: 'Email',
        minWidth: 70,
        align: 'left',
        flex: 4

    },
    {
        id: 'gender',
        label: 'Gender',
        minWidth: 10,
        align: 'center',
        flex: 2
    },
    {
        id: 'ip_address',
        label: 'IP Address',
        minWidth: 20,
        align: 'left',
        flex: 2
    },
    {
        id: 'phone',
        label: 'Phone',
        minWidth: 20,
        align: 'center',
        flex: 2
    },
    {
        id: 'country',
        label: 'Country',
        minWidth: 20,
        align: 'left',
        flex: 2
    },
    {
        id: 'action',
        label: 'Action',
        minWidth: 50,
        align: 'center',
        flex: 1,
        component: <span>xyz</span>
    },

]

export const GROUPED_COLUMNS = [
    {
        Header: 'Id',
        accessor: 'id'
    },
    {
        Header: 'Name',
        columns: [
            {
                Header: 'First Name',
                accessor: 'first_name'
            },
            {
                Header: 'Last Name',
                accessor: 'last_name',
            },
        ]
    },
    {
        Header: 'Info',
        columns: [
            {
                Header: 'Email',
                accessor: 'email',

            },
            {
                Header: 'Gender',
                accessor: 'gender',
            },
            {
                Header: 'IP Address',
                accessor: 'ip_address',
            },
            {
                Header: 'Phone',
                accessor: 'phone',
            },
            {
                Header: 'Country',
                accessor: 'country',
            }
        ]
    }
]