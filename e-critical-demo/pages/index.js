import { Box, Grid, TableSortLabel } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import LongMenu from '../Components/ContextMenu/Other'
import TablePaginationActions from '../Components/test/customePagination'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <TablePaginationActions />
    </>
  )
}
