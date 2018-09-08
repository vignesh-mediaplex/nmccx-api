module.exports = {
    result: (result, res) => {
        if (result != null) {
            res.status(200).send(result);
        }
        else {
            res.status(204).send('No Content');
        }
    },

    dberror: (error, res) => {
        if (error) {
            res.status(409).send({ message: 'Conflict' });
        }
    },

    error: (error, res) => {
        if (error) {
            res.status(401).send({ message: 'Access Denied' });
        }
    },

    inserted: (result, res) => {
        res.status(201).send({ message: 'Successfully inserted into table' });
    },

    validationError: (error, res) => {
        res.status(422).send({ message: error.errors[0].message });
    }
}