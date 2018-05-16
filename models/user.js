module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validation: {
                len: [1, 140],
                notEmpty: true,
                isEmail: true,
            }
        },
        // password: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     validation: {
        //         len: [1, 140],
        //         notEmpty: true,
        //     }
        // },
        // confirm_pw :{
        // type: DataTypes.STRING,
        // allowNull: false,
        // validation: {
        //     notEmpty: true,
        //     matchPW (password) {
        //         if (confirm_pw !== password) {
        //             throw new Error("Passwords do not match")
        //             }
        //         }
        //     }
        // },
        mentor: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
            allowNull: false
        },
        birthDay: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validation: {
                isDate: true,
                
            }
        },
        zip_code: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validation: {
                isInt: true,
                min: 5,
                max: 10,
            }
        }
    });
    return User;
};