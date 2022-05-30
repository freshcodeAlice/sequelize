CREATE TABLE users( 
    id serial PRIMARY KEY,
    first_name varchar(255),
    last_name varchar(255)
);


SELECT first_name, last_name AS "surname"
FROM users;   
/*Model.findAll({
  attributes: ['first_name', ['last_name', 'surname']]
});*/

SELECT * FROM users
WHERE id = 405;

/*
Model.findAll({
    where: {
        id: 405
    }
})

/// second variant

Model.findByPK(id)

*/

SELECT * FROM users
WHERE is_subscribe = true;

/*
Model.findAll({
    where: {
        isSubscribe: true
    }
})


*/

SELECT * FROM users
WHERE id IN (2, 3, 7, 9, 10);

/*
Model.findAll({
    id: [2, 3, 7, 9, 10]
})

*/