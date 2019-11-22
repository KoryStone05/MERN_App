const secrets = {
    //The URL that we use to connect to the MongoDB Atlas Cluster
    dbUri: 'mongodb+srv://KoryStone:Bearcats5@cluster0-jdjgk.mongodb.net/test?retryWrites=true&w=majority'
};

const getSecret = key => secrets[key];

module.exports = getSecret;