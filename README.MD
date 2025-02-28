Rotas - Projeto EasyCar
----------------------------------------


[✅] Consultar se existe corrida pendente (hoje) para o usuario logado
    GET -> /rides
    Filtros: passenger_user_id, pickup_date, ride_id, driver_user_id, status

[✅] Cadastrar novas corridas
    POST -> /rides

[✅] Cancelar um pedido de corrida (apagar o pedido)
    DELETE -> /rides/123

[✅] Finalizar uma corrida que foi concluida
    PUT -> /rides/123/finish
    Body: passenger_user_id

[✅] Consultar as corridas para o motorista (corridas dele + corridas pendentes sem motorista)
    GET -> /rides/drivers/456

[X] Consultar todos os dados de uma determinada corrida
    GET -> /rides/123

[✅] Motorista aceitar uma corrida
    PUT -> /rides/123/accept
    Body: driver_user_id  

[✅] Motorista cancelar uma corrida
    PUT -> /rides/123/cancel


Business Rules (Regras de Negocio)
----------------------------------------

[ ] O usuario so pode pedir uma corrida por vez

[ ] O motorista só pode aceitar uma corrida por vez

