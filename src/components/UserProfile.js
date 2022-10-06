import { useContext } from 'react'
import React from 'react'
import { UserContext } from "./App"

const UserProfile = () =>{
    return(
        <>
        <h1><UserContext.Consumer>
            {
                obj=>{
                    return obj.name
                }
            }
            </UserContext.Consumer></h1>
            <h1><UserContext.Consumer>
            {
                obj=>{
                    return obj.age
                }
            }
            </UserContext.Consumer></h1>
        </>
    )
}

export {UserProfile}