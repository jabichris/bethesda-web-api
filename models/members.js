const members = (sequelize, DataTypes) => {
  const Member = sequelize.define("Member", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      initialAutoIncrement: 10000
    },
    names: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    placeOfBaptism: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateOfBaptism: {
      type: DataTypes.DATE,
      allowNull: true
    },
    district: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sector: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cell: {
      type: DataTypes.STRING,
      allowNull: false
    },
    village: {
      type: DataTypes.STRING,
      allowNull: false
    },
    work: {
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
  Member.associate = () => {
    // associations can be defined here
  };
  return Member;
};

export default members;
