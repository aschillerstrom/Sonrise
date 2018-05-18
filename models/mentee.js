module.exports = function(sequelize, DataTypes) {
    var Mentee = sequelize.define("Mentee", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validation: {
                len: [1, 140],
                notEmpty: true,
                isAlpha: true,
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validation: {
                len: [1, 140],
                notEmpty: true,
                isAlpha: true,
            }
        },
        available: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        bio: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        dOne: {
            type: DataTypes.STRING,
            allowNull: false,
            validation: {
                len: [1, 140],
                isEmpty: false,
                isAlpha: true
            }
        },
        dOneSpecific: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        dTwo: {
            type: DataTypes.STRING,
            allowNull: true,
            validation: {
                len: [1, 140],
                isAlpha: true
            }
        },
        dTwoSpecific: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        dThree: {
            type: DataTypes.STRING,
            allowNull: true,
            validation: {
                len: [1, 140],
                isAlpha: true
            }
        },
        dThreeSpecific: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        dFour: {
            type: DataTypes.STRING,
            allowNull: true,
            validation: {
                len: [1, 140],
                isAlpha: true
            }
        },
        dFourSpecific: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        dFive: {
            type: DataTypes.STRING,
            allowNull: true,
            validation: {
                len: [1, 140],
                isAlpha: true
            }
        },
        dFiveSpecific: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    });
    return Mentee;
}