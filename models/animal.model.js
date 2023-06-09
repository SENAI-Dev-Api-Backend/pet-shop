module.exports = (sequelize, Sequelize) => {
    const animal = sequelize.define('animal',{
        name:{
            type: Sequelize.STRING,
        },
        breed: {
            type: Sequelize.STRING
        },
        age:{
            type:Sequelize.NUMBER
        },
        weight:{
            type: Sequelize.STRING
        },
        owner_name:{
            type: Sequelize.STRING
        },
        is_vacinated:{
            type: Sequelize.STRING
        },
    })

    return animal
}