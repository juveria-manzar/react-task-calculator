import DisplayRow from './DisplayRow'

let Display = (props) => {
    return (
        <div className="screen">
            <DisplayRow value={props.input}/>
            <DisplayRow value={props.output}/>
        </div>
    )
}

export default Display