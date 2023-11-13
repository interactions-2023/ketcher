const wss = 'wss://edp22:JlTwNIbtNIwZk0IA@edp22.cloud.shiftr.io'

const client = mqtt.connect(wss)
const topic = 'legacylink/ketcher'

client.on('connect', () => client.subscribe(topic))

const sendMessage = (message) => client.publish(topic, message)

