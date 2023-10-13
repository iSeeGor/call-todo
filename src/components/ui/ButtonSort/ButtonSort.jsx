import {useState} from 'react';
import classes from './ButtonSort.module.css';

const ButtonSort = ({children, sortby, onClick}) => {
    const [order, setOrder] = useState();

    const arrows = {
        asc: '\u2BC5',
        dsc: '\u2BC6'
    };


    function handleOrdering(){
        let srt = 'asc';

        if ( ! order ) {
            srt = 'asc';
        } else if ( order === 'asc' ) {
            srt = 'dsc';
        }

        setOrder(srt)
    }

    return (
        <>
         <button
             type="button"
             className={classes.ButtonSort}
             onClick={() => {
                 onClick({
                     sortby: sortby
                 });
                 // setSorting((prev) => ({...prev, sortby: sortby, ord: order}));
             }}
         >
             {children}

                 {
                     order ? arrows[order] : ' '
                 }
         </button>
        </>
    );
};

export default ButtonSort;