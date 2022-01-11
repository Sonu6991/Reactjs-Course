import React from 'react'
import classes from './Layout.module.css'

const Layout = (props) => {
    return (
        <>
            <header className={` px-2 ${classes.header}`}>
                <div className='d-flex align-items-center'>
                    <span className='fas fa-bars pe-3'></span>
                    <div className='fw-bolder fs-5'>Patients</div>
                </div>
                <div className='d-flex pe-3 align-items-center'>
                    <div className='fs-5 fw-bolder px-3'>Medicity Hospital</div>
                    <div className='px-3 d-flex align-items-center'>
                        <span className='fas fa-user-circle fs-4'></span>
                        <div className='px-1'>Megha Soni</div>
                        <span className='fas fa-sort-down ps-1'></span>
                    </div>
                    <span className="fas fa-bell fs-5 mx-3 position-relative">
                        <span className={`position-absolute top-0 start-100 translate-middle bg-danger rounded-circle ${classes["translate-middle"]}`}>
                            5
                        </span>
                    </span>
                </div>
            </header>
            <main className={`${classes.main} p-3 `}>
                {props.children}
            </main>
            <footer className={`px-2 ${classes.footer}`}>
                version 1.0.14
            </footer>
        </>
    )
}

export default Layout
