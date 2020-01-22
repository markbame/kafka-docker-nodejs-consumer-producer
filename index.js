const kafka = require('kafka-node')
const client = new kafka.KafkaClient({kafkaHost: '192.168.99.100:9092'});
const Producer = kafka.Producer
const producer = new Producer(client)
const KeyedMessage = kafka.KeyedMessage
const Consumer = kafka.Consumer
console.log("start")
const km = new KeyedMessage('key', 'message'),
    payloads = [
        { topic: 'topic1', messages: 'message1', partition: 0 },
        { topic: 'topic2', messages: ['message2', 'message3', km] }
    ];

producer.on('ready', function () {
    console.log("producer")

    producer.send(payloads, function (err, data) {
        console.log("data", data);
    });

});

producer.on('error', function (err) {
    console.log("error p", err);
})



const consumer = new Consumer(
    client,
    [
        { topic: 'topic1', partition: 0 }
    ],
    {
        autoCommit: false
    }
);
consumer.on('message', function (message) {
    console.log(message);
});
consumer.on('error', function (err) {
    console.log("error c", err);
})

console.log("end")

