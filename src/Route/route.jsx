import React from 'react'
import {Home} from "../Pages/Home/index"
import { HomePage } from '../Pages/HomePage/index'

export const ROUTE = [
        {
            path: "/",
            element: <HomePage />,
            children: [
                {
                    path: "",
                    element: <Home />,
                },
            ]
        }
]