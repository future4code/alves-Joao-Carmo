class GenerateDate {
    createDate(): string {
        let date = new Date().toLocaleDateString()
        const [day, month, year] = date.split('/')
        date = year + '-' + month + '-' + day

        return date
    }
}

export default GenerateDate