module.exports = {
    dialect: '',//o tipo do banco MMSQL - MYSQL - PG
    host: '',//o endereço do servidor
    user: '',//usuario do banco de dados
    password: '',//a senha do banco de dados
    database: '',//nome do banco de dados.
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
