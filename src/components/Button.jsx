import React from 'react'

const Button = ({title, onClick}) => {
    return(
        <div>
            <button style = {{
                maxWidth: "140px",
                minWidth: "80px",
                height: "30px",
                marginRight: "5px"
            }}
            onClick = {onClick}
            >
                {title} 
            </button>
        </div>
    )
}
export default Button

// - We created a functional component named Button, which we then exported.
// - We destructured title and onClick from the props coming into the component. 
//   Here, title would be a string of text, and onClick would be a function that gets called when a button is clicked.
// - Next, we used the button element to declare our button, 
//   and used the style attributes to style our button to look presentable.
// - We added the onClick attribute and passed our destructured onClick function props to it.
// - The last thing you’ll notice we did in this component is pass in {title} as the content of the button tag. 
//   This allows us to display the title dynamically, 
//   based on what prop is being passed to the instance of the button component when it is called.