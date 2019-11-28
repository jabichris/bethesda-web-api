const membersMigration = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("Members", {
      id: {
        allowNull: false,
        autoIncrement: true,
        initialAutoIncrement: 10000,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      names: {
        type: Sequelize.STRING,
        allowNull: false
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      position: {
        type: Sequelize.STRING,
        allowNull: false
      },
      birthDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      placeOfBaptism: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dateOfBaptism: {
        type: Sequelize.DATE,
        allowNull: false
      },
      district: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sector: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cell: {
        type: Sequelize.STRING,
        allowNull: false
      },
      village: {
        type: Sequelize.STRING,
        allowNull: false
      },
      work: {
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
  down: queryInterface => queryInterface.dropTable("Members")
};
export default membersMigration;
