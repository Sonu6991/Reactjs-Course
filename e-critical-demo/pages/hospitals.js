import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import Layout from '../Components/Layout/Layout'
import StickyHeadTable from '../Components/Table/Table'
import { COLUMNS } from '../columns'
import { TableContext } from '../ShareableData/TableContext'

const Hospitals = (props) => {

      const { fetchData, data, rowsPerPage } = useContext(TableContext)
      useEffect(() => {
            fetchData()
      }, [rowsPerPage])

      return (
            <>
                  <Head>
                        <title>Hospitals</title>
                  </Head>
                  <Layout>

                        <StickyHeadTable data={data} columns={COLUMNS} />

                  </Layout>

            </>
      )
}
// export async function getServerSideProps() {
//       const response = await fetch("http://localhost:3600/users/?_limit=10")
//       if (!response.ok) {
//             alert("something went wrong!")
//       }
//       const data = await response.json()
//       return {
//             props: {
//                   data,
//             }
//       }

// }
export default Hospitals
