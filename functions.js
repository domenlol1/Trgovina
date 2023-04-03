module.exports = (settings) => {
    let cidAddOn = 0;
    let cid;

    let mySql = require('mysql');
    let connectionPool = mySql.createPool(settings.dbSettings);
    let connection = mySql.createConnection(settings.dbSettings);

    let functions = {
        getCid: () => {
            cid = new Date().getTime().toString() + cidAddOn.toString();
            this.cidAddOn = this.cidAddOn + 1;
            if (this.cidAddOn > 1000) this.cidAddOn = 0;
            return cid;
        },
        verifyLogin: (req) => {
            let Q = require("q");
            let dfd = Q.defer();
            connectionPool.getConnection((error, connection) => {
                if (error) dfd.resolve({ responseCode: 500, message: "Database error while trying to get user" });
                connectionPool.query(
                    'SELECT * FROM uporabniki WHERE ime = "' + req.ime + '" AND geslo = "' + req.geslo + '"',
                    (error, result) => {
                        if (connection) connection.release();
                        if (error) dfd.resolve({ responseCode: 500, message: "Database error." });
                        dfd.resolve({ responseCode: 200, user: result.length === 0 ? [] : result });
                    }
                );
            });
            return dfd.promise;
        },
        signup: (req) => {
            let Q = require("q");
            let dfd = Q.defer();
            connectionPool.getConnection((error, connection) => {
                if (error) dfd.resolve({ responseCode: 500, message: "Database error while trying to get users" });
                connectionPool.query(
                    'INSERT INTO uporabniki(ime, mail, geslo) VALUES ("' + req.ime + '", "' + req.mail + '", "' + req.geslo + '")',
                    (error, result) => {
                        if (connection) connection.release();
                        if (error) dfd.resolve({ responseCode: 500, message: "Database error." });
                        dfd.resolve({ responseCode: 200, signup: result.length === 0 ? [] : result });
                    }
                );
            });
            return dfd.promise;
        },
        Uporabniki: () => {
            let Q = require("q");
            let dfd = Q.defer();
            connectionPool.getConnection((error, connection) => {
                if (error) dfd.resolve({ responseCode: 500, message: "Database error while trying to get table." });
                connectionPool.query(
                    'SELECT * FROM uporabniki',
                    (error, result) => {
                        if (connection) connection.release();
                        if (error) dfd.resolve({ responseCode: 500, message: "Database error." });
                        dfd.resolve({ responseCode: 200, data: result.length === 0 ? [] : result });
                    }
                );
            });
            return dfd.promise;
        },
        izdelki: () => {
            let Q = require("q");
            let dfd = Q.defer();
            connectionPool.getConnection((error, connection) => {
                if (error) dfd.resolve({ responseCode: 502, message: "Database error while trying to get izdelki." });
                connectionPool.query(
                    'SELECT * FROM izdelki',
                    (error, result) => {
                        if (connection) connection.release();
                        if (error) dfd.resolve({ responseCode: 500, message: "Database error." });
                        dfd.resolve({ responseCode: 200, data: result.length === 0 ? [] : result });
                    }
                );
            });
            return dfd.promise;
        },
        addingtocart: (req) => {
            let Q = require("q");
            let dfd = Q.defer();
            connectionPool.getConnection((error, connection) => {
                if (error) dfd.resolve({ responseCode: 502, message: "Database error while trying to get izdelki." });
                connectionPool.query(
                    'INSERT INTO `izdelek kosarice`(ID_uporabnik, ID_izdelek, stevilo) VALUES ("' + req.uporabnik + '", "' + req.izdelek + '", "' + req.st + '")',
                    (error, result) => {
                        if (connection) connection.release();
                        if (error) dfd.resolve({ responseCode: 500, message: "Database error." });
                        dfd.resolve({ responseCode: 200, data: result.length === 0 ? [] : result });
                    }
                );
            });
            return dfd.promise;
        },
        displayizdelki: (req) => {
            let Q = require("q");
            let dfd = Q.defer();
            connectionPool.getConnection((error, connection) => {
                if (error) dfd.resolve({ responseCode: 502, message: "Database error while trying to get izdelki." });
                connectionPool.query( 
                    'SELECT i.slika, i.ime, i.cena, i.brand, ik.id ID FROM izdelki i, uporabniki u, `izdelek kosarice` ik WHERE ik.id_uporabnik = u.id AND ik.id_izdelek = i.id AND u.id = ' + req.uid,
                    (error, result) => {
                        if (connection) connection.release();
                        if (error) dfd.resolve({ responseCode: 500, message: "Database error." });
                        dfd.resolve({ responseCode: 200, data: result.length === 0 ? [] : result });
                    }
                );
            });
            return dfd.promise;
        },
        deleteizdelek: (req) => {
            let Q = require("q");
            let dfd = Q.defer();
            connectionPool.getConnection((error, connection) => {
                if (error) dfd.resolve({ responseCode: 502, message: "Database error while trying to get izdelki." });
                connectionPool.query( 
                    'DELETE FROM `izdelek kosarice` WHERE ID = ' + req.iid,
                    (error, result) => {
                        if (connection) connection.release();
                        if (error) dfd.resolve({ responseCode: 500, message: "Database error." });
                        dfd.resolve({ responseCode: 200, data: result.length === 0 ? [] : result });
                    }
                );
            });
            return dfd.promise;
        },
    };
    return functions;
};
