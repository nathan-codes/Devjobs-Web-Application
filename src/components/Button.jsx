import "./Button.css"

function Button({buttonName}) {
  return (
    <button className="Button btn btn-lg">
          {buttonName} 
    </button>
  )
}

export default Button
