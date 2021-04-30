module.exports={
    setDay(date){
        const days = ['Segunda Feira', 'Terça Feira', 'Quarta Feira', 'Quinta Feira', 'Sexta Feira', 'Sábado', 'Domingo']
        return days[date]
    },

    setDate(data){
        const day = data.party.date.slice(8,10)
        const mounth = data.party.date.slice(5,7)
        const year = data.party.date.slice(0,4)
        return `${day}/${mounth}/${year}`
    }
}
