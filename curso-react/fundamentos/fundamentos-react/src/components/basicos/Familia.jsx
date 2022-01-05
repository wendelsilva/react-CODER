import React, {cloneElement} from "react";

export function Familia(props) {
    return (
        <div>
            {/* <FamiliaMembro name="Pedro" surname={props.surname}/>
            <FamiliaMembro name="Ana" {...props}/>
            <FamiliaMembro name="João" surname="Ferreira"/> */}
            {props.children.map((child,i) => {
                return cloneElement(child, {...props ,key: i})
            })}
        </div>
    )
}
