import React from 'react'
import {Home} from "../Pages/Home/index"
import Hero from '../Pages/Home/Hero/index'
// import { Footer } from "../Pages/Home/Footer/index"

export const ROUTE = [
        {
            path: "/",
            element: <Home />,
            children: [
                {
                    path: "",
                    element: <Hero />
                }
            ]
        }
]