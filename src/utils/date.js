export const suffix = (num) => {
    const lastDigit = num % 10
    const lastTwoDigits = num % 100

    return (
        num +
        (lastTwoDigits > 9 && lastTwoDigits < 14
            ? 'th'
            : lastDigit === 1
            ? 'st'
            : lastDigit === 2
            ? 'nd'
            : lastDigit === 3
            ? 'rd'
            : 'th')
    )
}

export const monthNameShort = (monthNumber) => {
    const date = new Date()
    date.setMonth(monthNumber - 1)

    return date.toLocaleString('en-US', {
        month: 'short',
    })
}

export const monthNameLong = (monthNumber) => {
    const date = new Date()
    date.setMonth(monthNumber - 1)

    return date.toLocaleString('en-US', {
        month: 'long',
    })
}
