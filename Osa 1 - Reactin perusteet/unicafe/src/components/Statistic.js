const StatisticLine = ({ text, value, suffix }) => (
    <>
        <tr>
            <td>{text}</td>
            <td>{value} {suffix ? "%" : ''}</td>
        </tr>
    </>
)

const Stats = (props) => (
    <>
        <table>
            <tbody>
                <StatisticLine text="Good" value={props.good} />
                <StatisticLine text="Neutral" value={props.neutral} />
                <StatisticLine text="Bad" value={props.bad} />
                <StatisticLine text="All" value={props.all} />
                <StatisticLine text="Positive" value={props.positive} suffix/>
            </tbody>
        </table>
    </>
)

const Statistic = (props) => {
    return (
        <>
            <h2>Statistic</h2>
            {
                props.all == 0
                    ? (<p>No feedback given</p>)
                    : <Stats {...props} />
            }
        </>
    )
}

export default Statistic
