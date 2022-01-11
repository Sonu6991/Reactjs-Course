import Head from 'next/head'
import React, { useState, useEffect, useRef } from 'react'
import Layout from '../../Components/Layout/Layout'
import StickyHeadTable from '../../Components/Table/Table'
// import StickyHeadTable from '../../Components/Table/Table copy'
import { COLUMNS } from '../../columns'
import { IconButton, Input, TextField } from '@mui/material'

import ClearIcon from '@mui/icons-material/Clear';
import { TextFields } from '@mui/icons-material'

const Hospitals = (props) => {
      const searchInput = useRef('')
      const [data, setData] = useState([])
      const [pageCount, setPageCount] = useState(0)
      const [filter, setFilter] = useState('');
      const [filteredData, setFilteredData] = useState([])

      useEffect(async () => {
            const response = await fetch(`http://localhost:3600/users`)
            if (!response.ok) {
                  alert("something went wrong!")
            }
            const data = await response.json()
            setData(data);
            setPageCount(data.length)
            setFilteredData(data);
      }, []);
      const filterHandler = (e) => {
            e.preventDefault();
            setFilter(e.target.value);
      }
      useEffect(() => {
            const filteredRows = data.filter(row => Object.values(row).some(val => typeof val === "string" && val.toLowerCase().includes(filter.toLowerCase())));
            setFilteredData(filteredRows);
      }, [filter])

      const clearSearch = () => {
            setFilter("");

      };
      return (
            <>
                  <Head>
                        <title>Hospitals</title>
                  </Head>
                  <Layout >
                        <Input type="search" placeholder="Filter" ref={searchInput} value={filter} onChange={filterHandler} className='mb-4' maxlength="5" />

                        {/* <IconButton
                              onClick={props.onRemoveClick}
                              className="align-self-center fs-6 position-relative clear-icon "
                              color="info"
                              size="sm"
                              onClick={clearSearch}
                        >
                              <ClearIcon label="Clear" />
                        </IconButton> */}
                        <StickyHeadTable data={filteredData} columns={COLUMNS} pageCount={pageCount} />

                  </Layout>

            </>
      )
}

export default Hospitals
