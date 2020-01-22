const kafka = require('kafka-node');
// const bp = require('body-parser');
const config = require('./config');
try {
    //const Consumer = kafka.HighLevelConsumer;
    const Consumer = kafka.Consumer
    const client = new kafka.KafkaClient({kafkaHost: '192.168.99.100:9092'});
    let consumer = new Consumer(
        client,
        [{ topic: 'onizuka', partition: 0 }],
        {
            autoCommit: true
        }
    );
    consumer.on('message', async function(message) {
        console.log('here');
        console.log(
            'kafka-> ',
            message.value
        );
    })
    consumer.on('error', function(err) {
        console.log('error', err);
    });
}
catch(e) {
    console.log(e);
}