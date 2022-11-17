import { store } from '../../app/store'
import { notesApiSlice } from '../notes/notesApiSlice'
import { usersApiSlice } from '../users/usersApiSlice';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

//File that will keep the subscription connection for the accounts in the dash
const Prefetch = () => {
    
    useEffect(() => {
        store.dispatch(notesApiSlice.util.prefetch('getNotes', 'notesList', { force: true }))
        store.dispatch(notesApiSlice.util.prefetch('getUsers', 'usersList', { force: true }))
    }, [])

    return <Outlet />
}
export default Prefetch



