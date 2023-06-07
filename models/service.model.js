module.exports = (sequelize, Sequelize) => {
    const service = sequelize.define('service',{
        service_name:{
            type: Sequelize.STRING,
        },
        price: {
            type: Sequelize.STRING
        },
        duration:{
            type:Sequelize.STRING
        },
    })

    return service
}