import React  from 'react';
import CharacterCard from './CharacterCard';

export default function WordCard(props){
    const activateHandler = c => {
        console.log(`${c} has been activated.`)
    }
    return (
        <div>
            {
                Array.from(props.value).map((c, i) =>
                   <CharacterCard value={c} key={i} activateHandler={activateHandler}/>
                )
            }
        </div>
    )
}