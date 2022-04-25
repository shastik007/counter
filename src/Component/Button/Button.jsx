import './Button.css'

export const Button = (props) => {
    let title = props.title
    return(
        <button className='btn'>{title}</button>
    )
}