import '../global.css';

export const Bulb = ({on}) => {
    return (
        <div className={on ? "bulb bulb--on" : "bulb"}></div>
    )
}

// // -------------- ZKRÁCENÝ ZÁPIS ----------- // 
// export const Bulb = ({on}) => ( 
//     <div className={on === true ? "bulb bulb--on" : "bulb"}></div>
// )