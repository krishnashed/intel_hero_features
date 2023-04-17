import React from "react";
import Header from "../Components/Header";
import Accordion from "../Components/Accordion";
import CodeRenderer from "../Components/CodeRenderer";

const KafkaDoc = () => {
  return (
    <>
      <Header />
      <div className="mt-8 mx-24">
        <h1 className="text-4xl font-bold mb-4">Kafka on K8s using Strimzi</h1>
        <p className="text-xl font-semibold mb-8">
          Kafka can be deployed on a production level using an operator
          developed by CNCF called Strimzi. This guide's main focus is to expose
          the fundamental components of the operator and their usage to explore
          different features of Strimzi from a basic cluster to a advanced level
          while also highlighting the options available to customize them.
        </p>
        <Accordion heading={"Installing Strimzi on a K8 Cluster"}>
          <p className="text-lg">Add the helm repository for Strimzi:</p>
          <CodeRenderer
            value={`
helm repo add strimzi https://strimzi.io/charts/
helm repo update
            `}
          />
          <p>
            Now create a <b>custom-values.yaml</b> for our helm chart with this
            content:
          </p>
          <CodeRenderer
            language="yaml"
            value={`
# No. of cluster operators
replicas: 2

#  The service account name to be used
serviceAccount: akarx-kafka-strimzi

#  Temporary directory size limit
tmpDirSizeLimit: 500Mi

logLevel: debug

# JAVA Options to optimize performance
extraEnvs:
 - name: JAVA_OPTS
   value: "-Xms2048m -Xmx2048m"

# Resource configuration for the cluster-operator
resources:
 limits:
   memory: 12Gi
   cpu: 8000m
 requests:
   memory: 8Gi
   cpu: 4000m
          `}
          />
          <p className="text-lg mt-4">Now install the operator:</p>
          <CodeRenderer
            value={`
# This will install the chart in the namespace kafka
helm install --create-namespace --namespace kafka kafka-operator strimzi/strimzi-kafka-operator -f custom-value.yaml

# See status of deployment
kubectl get all -n kafka`}
          />
        </Accordion>
        <Accordion heading={`Deploying a Kafka Cluster`}>
          <p className="text-lg">
            A Kafka Cluster is deployed using the Kafka CRD provided by the
            Strimzi operator. This CRD has a long list of very customizable
            options for specific use-cases. We can set options for almost all of
            Strimzi's components like Kafka, Zookeeper, Kafka MirrorMaker,
            KafkaConnect, etc.
          </p>
          <p className="text-lg mt-3">A basic deployment looks like this:</p>
          <CodeRenderer
            language="yaml"
            value={`
apiVersion: kafka.strimzi.io/v1beta2
kind: Kafka
metadata:
  name: akarx-cluster
  namespace: kafka
spec:
  kafka:
    version: 3.4.0
    replicas: 2
    listeners:
      - name: plain
        port: 9092
        type: internal
        tls: false
      - name: tls
        port: 9093
        type: internal
        tls: true
    config:
      offsets.topic.replication.factor: 1
      transaction.state.log.replication.factor: 1
      transaction.state.log.min.isr: 1
      default.replication.factor: 1
      min.insync.replicas: 1
      inter.broker.protocol.version: "3.4"
    storage:
      type: ephemeral
  zookeeper:
    replicas: 3
    storage:
      type: ephemeral
  entityOperator:
    topicOperator: {}
    userOperator: {}
            `}
          />
          <p className="text-lg">
            First thing we define is the configuration of the main Kafka that
            handles the brokers. This is done using the spec.kafka property. In
            our configuration we want 3 kafka brokers and we define 2 listeners
            so clients can internally and externally connect with the cluster.
            We have also defined storage option as jbod which basically says
            that multiple disks will be used. Here we have all storage as
            ephemeral but if we want to persist data we have to use the
            type:persistent-claim. Also storage type cannot be changed.
          </p>
        </Accordion>
        <Accordion heading={"Configuring an External Listener"}>
          <p className="text-lg">
            So far we added two listeners but both were for internal
            communication. Now let's add an external listener which will be of
            type nodePort and will alow us to test the cluster. Make changes to
            the second listener of the previous yaml file:
          </p>
          <CodeRenderer
            value={`
...
listeners:
  - name: plain
    port: 9092
    type: internal
    tls: false
  - name: external
    port: 9093
    type: nodeport
    tls: true
...
            `}
          />
        </Accordion>
        <Accordion heading={"Security Configuration with TLS"}>
          <p className="text-lg">
            Strimzi auto generates the TLS certificates and Keys and stores them
            as secret. These need to be used to communicate with the cluster
            over TLS.
          </p>
          <CodeRenderer
            value={`
# Extract the CA Certificates  and password
export CLUSTER_NAME=akarx-cluster
kubectl get secret -n kafka $CLUSTER_NAME-cluster-ca-cert -o jsonpath='{.data.ca\.password}' | base64 --decode > ca.password
kubectl get secret -n kafka $CLUSTER_NAME-cluster-ca-cert -o jsonpath='{.data.ca\.crt}' | base64 --decode > ca.crt`}
          />
        </Accordion>
      </div>
    </>
  );
};

export default KafkaDoc;
