// 👉 Now repeat those steps again (making a new component called `Item` in the Item folder under index.js and then steps one to three in task 1.3) but this time for a new component called `Item` that returns a list item (`<li>`) element in JSX instead of an input element.

import React from "react"

export default function Item({text, font}) {
    
    return < li style={{fontFamily: `${font}`}} > {text} </li>
}