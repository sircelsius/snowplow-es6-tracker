export default ( ...values ) => {
    let result = ''

    // eslint-disable-next-line prefer-const
    for ( let value of values ) {
        result += value
    }
    return result
}
