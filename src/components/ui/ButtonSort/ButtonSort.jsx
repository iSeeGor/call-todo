import classes from './ButtonSort.module.css';

const ButtonSort = ({children, sortby, icon, isActive, onClick}) => {

    const arrows = {
        asc: '\u2BC5',
        desc: '\u2BC6'
    };

    return (
        <>
         <button
             type="button"
             className={classes.ButtonSort}
             onClick={() => {
                 onClick({
                     sortby: sortby
                 });
             }}
         >
             {children}

                 {
                     isActive && icon && icon.length ? arrows[icon] : ' '
                 }
         </button>
        </>
    );
};

export default ButtonSort;