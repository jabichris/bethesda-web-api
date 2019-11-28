const offeringsMigration = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("Offerings", {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      date: {
        type: Sequelize.DATE,
        allowNull: true
      },
      amaturo: {
        type: Sequelize.STRING,
        allowNull: true
      },
      amashimwe: {
        type: Sequelize.STRING,
        allowNull: true
      },
      icyacumi: {
        type: Sequelize.STRING,
        allowNull: false
      },
      inyubako: {
        type: Sequelize.STRING,
        allowNull: false
      },
      offering_collected_by: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    }),

  down: queryInterface => queryInterface.dropTable("Offerings")
};

export default offeringsMigration;
