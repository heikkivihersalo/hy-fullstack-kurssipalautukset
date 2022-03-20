const Buttons = (props) => (
    <div className="button-container">
        <button onClick={props.handleGood}>Good</button>
        <button onClick={props.handleNeutral}>Neutral</button>
        <button onClick={props.handleBad}>Bad</button>
    </div>
)

export default Buttons