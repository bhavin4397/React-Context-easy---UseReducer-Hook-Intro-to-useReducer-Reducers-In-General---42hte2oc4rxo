import { useContext } from 'react'
import React from 'react'
import { UserContex } from "./App"

const UserProfile = () => {
    return (
        <>
            <h1><UserContex.Consumer>{
                obj => {
                    return obj.name;
                }
            }</UserContex.Consumer></h1>
            <h1><UserContex.Consumer>{
                obj => {
                    return obj.age;
                }
            }</UserContex.Consumer></h1>
        </>
    )
}

export { UserProfile }