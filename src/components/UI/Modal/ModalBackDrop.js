import classes from './modal.module.css';

const ModalbackDrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onClick}></div>
    )
}

export default ModalbackDrop;