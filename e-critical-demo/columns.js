
export const COLUMNS = [
    {
        id: 'id',
        label: 'ID',
        minWidth: 100,
        align: 'left',
    },
    {
        id: 'first_name',
        label: 'First Name',
        minWidth: 170,
        align: 'left',
    },
    {
        id: 'last_name',
        label: 'Last Name',
        minWidth: 170,
        align: 'left',
    },
    {
        id: 'email',
        label: 'Email',
        minWidth: 200,
        align: 'left',

    },
    {
        id: 'gender',
        label: 'Gender',
        minWidth: 170,
        align: 'center',
    },
    {
        id: 'ip_address',
        label: 'IP Address',
        minWidth: 170,
        align: 'center',
    },
    {
        id: 'phone',
        label: 'Phone',
        minWidth: 170,
        align: 'center',
    },
    {
        id: 'country',
        label: 'Country',
        minWidth: 170,
        align: 'center',
    },
    {
        id: 'action',
        label: 'Action',
        minWidth: 170,
        align: 'center',
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