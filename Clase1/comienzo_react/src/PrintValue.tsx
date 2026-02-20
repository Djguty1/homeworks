interface Props{
    value: number;
}

function PrintValue({value}: Props) {
    return(<>
        <h3>{value}</h3>
        </>
    )
}

export default PrintValue;