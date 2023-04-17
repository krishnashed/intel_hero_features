import React from "react";
import Header from "../Components/Header";
import Accordion from "../Components/Accordion";
import CodeRenderer from "../Components/CodeRenderer";

const RabbitMQDoc = () => {
  return (
    <>
      <Header />
      <div className="mt-8 mx-24">
        <h1 className="text-4xl font-bold mb-4">Rabbit MQ on Kubernetes</h1>
        <p className="text-xl font-semibold mb-8">
          RabbitMQ is lightweight and easy to deploy on premises and in the
          cloud. It supports multiple messaging protocols. RabbitMQ can be
          deployed in distributed and federated configurations to meet
          high-scale, high-availability requirements.
        </p>
        <Accordion heading={"Features"}>
          <p className="text-lg">List of features currently supported:</p>
          <ul className="list-disc ml-8">
            <li className="text-lg">
              Automated creation and scaling of RabbitMQ clusters as Kubernetes
              Custom Resources
            </li>
            <li className="text-lg">
              Automated cluster healing to recover from node failures and ensure
              high availability
            </li>
            <li className="text-lg">
              Rolling upgrades for RabbitMQ clusters, with no downtime or
              message loss
            </li>
            <li className="text-lg">
              Customizable RabbitMQ configuration via Kubernetes Custom
              Resources
            </li>
            <li className="text-lg">
              Integration with Kubernetes-native tools such as Prometheus and
              Grafana for monitoring and alerting
            </li>
            <li className="text-lg">
              Support for secure communication with TLS encryption
            </li>
            <li className="text-lg">
              Support for RabbitMQ plugins and management of their lifecycle
            </li>
            <li className="text-lg">
              Integration with HashiCorp Vault for secrets
            </li>
          </ul>
        </Accordion>
        <Accordion heading={"Install the Cluster Operator"}>
          <CodeRenderer
            value={`
# Add the bitnami repo
helm repo add my-repo https://charts.bitnami.com/bitnami`}
          />
          <p className="text-lg">
            Create a <b>custom-values.yaml</b> file with this content:
          </p>
          <CodeRenderer
            language="yaml"
            value={`
fullnameOverride: "rabbit-clus-op"

clusterOperator:
  replicaCount: 2

  resources:
    limits:
      memory: 12Gi
      cpu: 8000m
    requests:
      memory: 8Gi
      cpu: 4000m

  affinity:
    nodeAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        nodeSelectorTerms:
          - matchExpressions:
              - key: type
                operator: In
                values:
                  - master

  metrics:
    enabled: true
    serviceMonitor:
      enabled: true
      interval: 10s
      # namespace: rabbitmq-system

msgTopologyOperator:
  replicaCount: 2

  fullnameOverride: "rabbit-msg-op"

  resources:
    limits:
      memory: 8Gi
      cpu: 4000m
    requests:
      memory: 6Gi
      cpu: 2500m

  affinity:
    nodeAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        nodeSelectorTerms:
          - matchExpressions:
              - key: type
                operator: In
                values:
                  - master

  metrics:
    enabled: true
    serviceMonitor:
      enabled: true
      interval: 10s
      # namespace: rabbitmq-system
          `}
          />
          <p className="text-lg">Install the operator</p>
          <CodeRenderer
            value={`helm install my-release my-repo/rabbitmq-cluster-operator --create-namespace --namespace rabbitmq-system -f custom-values.yaml`}
          />
        </Accordion>
        <Accordion heading={"Setup a RabbitMQ Cluster"}>
          <p className="text-lg">
            The RabbitMQ operator provides us a CRD called RabbitmqCluster
            through which we define all the configurations for our cluster.{" "}
          </p>
          <CodeRenderer
            value={`
apiVersion: rabbitmq.com/v1beta1
kind: RabbitmqCluster
metadata:
  name: akarx-rabbit-cluster
  namespace: rabbitmq-test-app
spec:
  replicas: 3
  persistence:
    storageClassName: longhorn
    storage: 5Gi
  resources:
    requests:
      cpu: 2000m
      memory: 3Gi
    limits:
      cpu: 2000m
      memory: 3Gi
  affinity:
    nodeAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        nodeSelectorTerms:
          - matchExpressions:
              - key: type
                operator: In
                values:
                  - worker`}
            language="yaml"
          />
          <p className="text-lg">
            Here we have defined the namespace as rabbitmq-test-app and set 3
            replicas of rabbitmq instances. We have also defined some resource
            specifications along with nodeAffinity since I want my RabbitMQ
            instances on the worker pods only. We have also given a
            PersistentVolume of 5Gi for each pod, make sure you have these
            available or else your pods will fail to start.
          </p>
        </Accordion>
        <Accordion heading={"Monitoring our cluster"}>
          <p className="text-lg">
            Be default, the <b>rabbitmq-prometheus plugin</b> is installed which
            exposes a lot of metrics for our cluster on port 15692 of the pods.
            To view these metris we will set up a serviceMonitor which will be
            picked up by the Prometheus Operator installed in our cluster.
          </p>
          <p className="text-lg">Add this to the origional cluster file:</p>
          <CodeRenderer
            language="yaml"
            value={`
---
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: akarx-rabbit-cluster
  namespace: rabbitmq-test-app
spec:
  selector:
    matchLabels:
      app.kubernetes.io/name: akarx-rabbit-cluster
  endpoints:
    - interval: 10s
      port: prometheus
  namespaceSelector:
    matchNames:
      - rabbitmq-test-app
          `}
          />
        </Accordion>
        <Accordion heading={"Performance Test"}>
          <p className="text-lg">
            Rabbit MQ has a tool called <b>PerfTest</b> which can be used to
            test our cluster. To install and run PerfTest use these commands:
          </p>
          <CodeRenderer
            value={`
instance=akarx-rabbit-cluster
namespace=rabbitmq-test-app
username=$(kubectl get secret -n \${namespace} \${instance}-default-user -o jsonpath="{.data.username}" | base64 --decode)
password=$(kubectl get secret -n \${namespace} \${instance}-default-user -o jsonpath="{.data.password}" | base64 --decode)
service=$(kubectl get secret -n \${namespace} \${instance}-default-user -o jsonpath="{.data.host}" | base64 --decode)
kubectl run perf-test --image=pivotalrabbitmq/perf-test -- --uri "amqp://\${username}:\${password}@\${service}"`}
          />
        </Accordion>
      </div>
    </>
  );
};

export default RabbitMQDoc;
