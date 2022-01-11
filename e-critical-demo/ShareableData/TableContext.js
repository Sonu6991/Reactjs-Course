import { useState, createContext } from 'react'

export const TableContext = createContext();

const TableContextProvider = (props) => {
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [count, setCount] = useState(0);
    const [data, setData] = useState([])

    const fetchData = async () => {
        const response = await fetch(`http://localhost:3600/users/?_limit=${rowsPerPage}`)
        if (!response.ok) {
            alert("something went wrong!")
        }
        const data = await response.json()
        setData(data);
    }
    const handleContextMenu = () => {

    }
    const value = {
        rowsPerPage,
        setRowsPerPage,
        fetchData,
        data,
    }
    return (
        <TableContext.Provider value={value}>
            {props.children}
        </TableContext.Provider>
    )
}

export default TableContextProvider;