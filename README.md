# Kafka App

## Overview
This application demonstrates the usage of **Kafka**, a distributed streaming platform known for its high throughput and low storage. It contrasts with traditional databases, which tend to have more storage but lower throughput.

---

## Kafka vs Database

- **Kafka**: High throughput, low storage.
- **Database**: More storage, low throughput.

---

## Setup

### Step 1: Running Zookeeper with Docker

Zookeeper is required for managing Kafka brokers. You can run it using Docker:

```bash
docker run -p 2181:2181 zookeeper

```
### Step 2: Running Kafka with Docker
Now, run Kafka with the necessary environment variables: 
```bash 
docker run -p 9092:9092 \
  -e KAFKA_ZOOKEEPER_CONNECT="192.168.127.51:2181" \
  -e KAFKA_ADVERTISED_LISTENERS="PLAINTEXT://192.168.127.51:9092" \
  -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
  confluentinc/cp-kafka

```
### Running the Application
Step 3: Consumer
To start the Kafka consumer, run the following command:

``` bash 
node consumer.js <GROUP_NAME>
Replace <GROUP_NAME> with your desired consumer group
```
### Step 4: Producer
To start the Kafka producer, run the following command:

``` bash
 node producer.js

```
Once the producer is running, you can send messages like:
``` bash
> tony south
> tony north

```
## NOTES:
Ensure you have Docker installed and running before starting the services.

Kafka and Zookeeper should be running before initiating the producer or consumer scripts. 
