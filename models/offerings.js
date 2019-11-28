const offerings = (sequelize, DataTypes) => {
  const Offerings = sequelize.define("Offerings", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    amaturo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    amashimwe: {
      type: DataTypes.STRING,
      allowNull: true
    },
    icyacumi: {
      type: DataTypes.STRING,
      allowNull: false
    },
    inyubako: {
      type: DataTypes.STRING,
      allowNull: false
    },
    offering_collected_by: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  });
  Offerings.associate = () => {
    // associations can be defined here
  };
  return Offerings;
};

export default offerings;
