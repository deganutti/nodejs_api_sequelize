module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    user: 'postgres',
    password: '161851',
    database: 'mercury',
    define: {
        /**
         * define field created_at and updated_at
         */
        timestamps: true,

        freezeTableName: true,
        /**
         * format table name in nome_table snake_case
         */
        //  underscored: false,
    },
};