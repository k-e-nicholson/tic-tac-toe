const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./mock.db', sqlite3.OPEN_READWRITE, (err) =>{
    if (err) return console.error(err.message);
    console.log('connection successful');
});

// db.run('CREATE TABLE brains_and_neurons(species_name, neuron_number, brain_weight_grams)');
// not needed after initialization

// const sql = "INSERT INTO brains_and_neurons (species_name, neuron_number, brain_weight_grams) VALUES ('Elephant', 257000000000, 4783), ('Human', 86000000000, 1300), ('Gorilla', 33400000000, 465), ('Orangutan', 32600000000., 370), ('Chimpanzee', 28000000000, 420), ('Baboon', 10950000000, 137), ('Giraffe', 10750000000, 680), ('Lion', 4667000000, 240), ('Dog', 3530000000, 72), ('Pig', 2220000000, 180), ('Owl', 1807000000, 2.2), ('Cat', 760000000, 30), ('Rabbit', 494200000, 10), ('Gray squirrel', 453660000, 7.6), ('Brown rat', 200000000, 2), ('Frog', 16000000, 0.24), ('Turtle', 12171000, 0.7), ('Lizard', 4341000, 0.08)";
// db.run(sql, (err)=> {
//     if (err) return console.error(err.message);
//     console.log('new insert');
// });
// single insertion
//
//
//
async function returnCount() {
    const sql = 'SELECT COUNT(*) FROM brains_and_neurons'

    var count = db.run(sql, (err)=> {
        if (err) return console.error(err.message);
        console.log('query successfully ran');
    });
    console.log("COUNT :" + count.value);
    return getCount(count);

    db.close((err)=> {
        if (err) return console.error(err.message);
    });
}






async function getCount() {
    count = await returnCount();
    return count;
}

//query table

