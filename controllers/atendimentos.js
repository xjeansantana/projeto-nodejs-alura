module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Você está em atendimentos'))

    app.post('/atendimentos', (req, res) => res.send('Você está na rota de atendimento e está relizando um Post'))
}