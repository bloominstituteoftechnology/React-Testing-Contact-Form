import React from "react"
import {render, screen, fireEvent} from "@testing-library/react"
import ContactForm from "./ContactForm"

describe("test contact form", ()=>{
    test("app renders without error", ()=>{
        render(<ContactForm/>)
    })
})