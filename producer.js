var kafka = require('kafka-node'),
    Producer = kafka.Producer,
    KeyedMessage = kafka.KeyedMessage,
    client = new kafka.KafkaClient({kafkaHost: '192.168.99.100:9092'}),
    producer = new Producer(client),
    km = new KeyedMessage('key', 'message'),
    payloads = [
        { topic: 'onizuka', messages: 'hi - first message!', partition: 0 }
    ];
producer.on('ready', function () {
    producer.send(payloads, function (err, data) {
        console.log(data);
        console.log("errr",err)
    });
});