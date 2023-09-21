module.exports = (sequelize,DataTypes) => {
    const Chat = sequelize.define('chat',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    });
    return Chat
}