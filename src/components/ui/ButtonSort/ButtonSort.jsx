import React, {useState} from 'react';
import classes from './ButtonSort.module.css';

const ButtonSort = ({children, sortby}) => {
    const [sort, useSort] = useState(sortby);

    const arrows = {
        asc: '\u2BC5',
        dsc: '\u2BC6'
    };


    function handleSorting(){
        let srt = 'asc';

        if ( ! sort ) {
            srt = 'asc';
        } else if ( sort === 'asc' ) {
            srt = 'dsc';
        }

        useSort(srt)
    }

    return (
        <>
         <button
             type="button"
             className={classes.ButtonSort}
             onClick={() => handleSorting()}
         >
             {children}

                 {
                     sort ? arrows[sort] : ' '
                 }
         </button>
        </>
    );
};

export default ButtonSort;