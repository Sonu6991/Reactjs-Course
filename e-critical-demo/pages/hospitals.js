import Head from 'next/head'
import React from 'react'
import Layout from '../Components/Layout/Layout'
import StickyHeadTable from '../Components/Table/Table'
import { COLUMNS } from '../columns'

const Hospitals = (props) => {
      return (
            <>
                  <Head>
                        <title>Hospitals</title>
                  </Head>
                  <Layout>

                        <StickyHeadTable data={props.data} columns={COLUMNS} />

                  </Layout>

            </>
      )
}
export async function getServerSideProps() {
      const response = await fetch("http://localhost:3600/users")
      if (!response.ok) {
            alert("something went wrong!")
      }
      const data = await response.json()
      return {
            props: {
                  data,
            }
      }

}
export default Hospitals
