module.exports = {
    up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
        'Posts',
        {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        title: {
            type: Sequelize.STRING,
            validate: {notEmpty: {msg: "Title no puede estar vacío."}}
        },
        body: {
            type: Sequelize.STRING,
            validate: {notEmpty: {msg: "Body no puede estar vacío."}}
        },
        attachmentId: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: false
        }
        },
        {
            sync: {force: true}
        }
    );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Posts');
    }
};
