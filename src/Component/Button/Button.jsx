import './Button.css'

export const Button = (props) => {
    let title = props.title
    let setCount =props.setCount

    const countHandler = () => {
        if (title==='+') {
            setCount((prev)=>prev+1)
        }else {
            setCount((prev)=>prev-1)
        }
    }

   
    return(
        <button onClick={countHandler} className='btn'>{title}</button>
    )
}