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
        // birthday: {
        //     type: DataTypes.DATEONLY,
        //     allowNull: false,
        //     validation: {
        //         isDate: true
        //     }
        // },
        zip_code: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validation: {
                isInt: true,
                 min: 5,
                max: 10,
            }
        },
        online: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        bio: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        d_one: {
            type: DataTypes.STRING,
            allowNull: false,
            validation: {
                len: [1, 140],
                isEmpty: false,
                isAlpha: true
            }
        },
        d_oneData: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        d_two: {
            type: DataTypes.STRING,
            allowNull: true,
            validation: {
                len: [1, 140],
                isAlpha: true
            }
        },
        d_twoData: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        d_three: {
            type: DataTypes.STRING,
            allowNull: true,
            validation: {
                len: [1, 140],
                isAlpha: true
            }
        },
        d_threeData: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        d_four: {
            type: DataTypes.STRING,
            allowNull: true,
            validation: {
                len: [1, 140],
                isAlpha: true
            }
        },
        d_fourData: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        d_five: {
            type: DataTypes.STRING,
            allowNull: true,
            validation: {
                len: [1, 140],
                isAlpha: true
            }
        },
        d_fiveData: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    });
    return Mentee;
}