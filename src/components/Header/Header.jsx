import React from 'react'
import {Container, Logo,Logout} from "../index"
import {Link} from 'react-router-dom'
import { UseSelector, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



function Header() {

    const authStatus = useSelector((state)=>state.auth.status)
    const navigate = useNavigate()

    const naItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus
        },
        {
            name:"Signup",
            slug:"/signup",
            active: !authStatus
        },
        {
            name : "All posts",
            slug : "/all posts",
            active: authStatus
        }
    ]
    return (
    <header className='py-3 shadow bh-gray-500'>
      <Container>

        <nav className="flex">
            <div className="mr-4">
                <Link to='/'>
                    <Logo width='70px' />

                   
                </Link>
            </div>
            <ul className='flex ml-auto'>
            {naItems.map((item)=> item.active? (
                <li key = {item.name}>
                    <button onClick = {()=>navigate(item.slug)}>
                        {item.name}
                    </button>
                </li>
            ) : null )}



            </ul>
        </nav>

      </Container>
    </header>
  )
}

export default Header
