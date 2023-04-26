import React from "react";
import Header from "../Components/Header";
import Accordion from "../Components/Accordion";
import CodeRenderer from "../Components/CodeRenderer";

const RedisDoc = () => {
  return (
    <>
      <Header />
      <div className="mt-8 mx-24">
        <h1 className="text-4xl font-bold mb-4">
          Redis Cluster on Kubernetes{" "}
        </h1>
        <p className="text-xl font-semibold mb-8">
          In this guide we will go through the setup and usage of Redis on K8s
          deployed using Bitnami Charts. Redis Cluster Helm chart also includes
          an additional feature: disaster recovery and failover.
        </p>
        <Accordion heading={"Installing the Chart"}>
          <p className="text-lg">Get values.yaml for Redis Cluster chart.</p>
          <CodeRenderer
            value={`wget https://raw.githubusercontent.com/bitnami/charts/main/bitnami/redis-cluster/values.yaml`}
          />
          <br />
          <p className="text-lg">
            To install the chart with the release name <strong>redis</strong>:
          </p>

          <CodeRenderer
            value={`helm install redis -f values.yaml oci://registry-1.docker.io/bitnamicharts/redis-cluster -n redis --create-namespace`}
          />
          <p className="text-lg">
            We can edit the Cluster config by changing fields in values.yaml,
            such as{" "}
            <strong>
              cluster config, volume persistence, storageclass, etc.
            </strong>{" "}
            To successfully set the cluster up, it will need to have at least 3
            master nodes. The total number of nodes is calculated like-{" "}
            <strong>
              nodes = numOfMasterNodes + numOfMasterNodes * replicas.
            </strong>{" "}
            Hence, the defaults <strong>cluster.nodes = 6</strong> and{" "}
            <strong>cluster.replicas = 1</strong> means, 3 master and 3 replica
            nodes will be deployed by the chart.
          </p>
          <br />
          <p className="text-lg">To get your password run:</p>
          <CodeRenderer
            value={`export REDIS_PASSWORD=$(kubectl get secret --namespace "redis" redis-redis-cluster -o jsonpath="{.data.redis-password}" | base64 -d)`}
          />
        </Accordion>
        <Accordion heading={"Configuring the Cluster"}>
          <p className="text-lg">Scaling up the Redis cluster.</p>
          <ul className="list-disc text-lg">
            <li>
              Pass as password the password used in the installation time.
            </li>
            <li>
              Set the desired number of nodes at <strong>cluster.nodes</strong>.
            </li>
            <li>
              Set the number of current nodes at{" "}
              <strong>cluster.update.currentNumberOfNodes</strong>.
            </li>
            <li>
              Set to true <strong>cluster.update.addNodes</strong>.
            </li>
          </ul>
          <p className="text-lg">Updated values.yaml should look like</p>
          <CodeRenderer
            language="yaml"
            value={`...
cluster:
  nodes: 7
  replicas: 1

  update:
    addNodes: true
    currentNumberOfNodes: 6
    currentNumberOfReplicas: 1
...          `}
          />
          <p className="text-lg">Applying the config</p>
          <CodeRenderer
            value={
              "helm upgrade -f values.yaml redis oci://registry-1.docker.io/bitnamicharts/redis-cluster"
            }
          />
          <br /> <br />
          <p className="text-lg">Scaling down the Redis cluster.</p>
          <p>
            First perform a normal upgrade setting the{" "}
            <strong>cluster.nodes</strong> value to the desired number of nodes.
            It should not be less than 6 and the difference between current
            number of nodes and the desired should be less or equal to{" "}
            <strong>cluster.replicas</strong> to avoid removing master node an
            its slaves at the same time.
          </p>
          <p className="text-lg">Updated values.yaml should look like</p>
          <CodeRenderer
            language="yaml"
            value={`...
cluster:
  nodes: 6
...          `}
          />
          <p className="text-lg">Applying the config</p>
          <CodeRenderer
            value={
              "helm upgrade -f values.yaml redis oci://registry-1.docker.io/bitnamicharts/redis-cluster"
            }
          />
          <p className="text-lg">
            In each cluster node, execute the following command. Replace the
            NODE_ID placeholder.
          </p>
          <CodeRenderer
            value={"redis-cli -a $REDIS_PASSWORD CLUSTER FORGET NODE_ID"}
          />
          <p className="text-lg">
            In the previous example the commands would look like this in each
            cluster node:
          </p>
          <CodeRenderer
            value={
              "redis-cli -a $REDIS_PASSWORD CLUSTER FORGET b23bcffa1fd64368d445c1d9bd9aeb92641105f7"
            }
          />
        </Accordion>

        <Accordion heading={"Connect to a cluster"}>
          As we have deployed a Redis Cluster accessible only from within the
          Kubernetes Cluster. To connect to your Redis cluster:
          <ol>
            <li>
              <p>Run a Redis pod that you can use as a client:</p>
              <CodeRenderer
                value={
                  "kubectl run --namespace redis redis-redis-cluster-client --rm --tty -i --restart='Never' \
 --env REDIS_PASSWORD=$REDIS_PASSWORD \
--image docker.io/bitnami/redis-cluster:7.0.11-debian-11-r0 -- bash"
                }
              />
            </li>

            <li>
              <p>Connect using the Redis CLI:</p>
              <CodeRenderer
                value={"redis-cli -c -h redis-redis-cluster -a $REDIS_PASSWORD"}
              />
            </li>
          </ol>
        </Accordion>

        <Accordion heading={"TLS/SSL Configuration"}>
          <p className="text-lg">
            TLS support can be enabled in the chart by specifying the{" "}
            <strong>tls.</strong> parameters while creating a release. The
            following parameters should be configured to properly enable the TLS
            support in the cluster:
          </p>
          <ul className="list-disc text-lg">
            <li>
              <strong>tls.enabled</strong>: Enable TLS support. Defaults to
              false
            </li>
            <li>
              <strong>tls.existingSecret</strong>: Name of the secret that
              contains the certificates. No defaults.
            </li>
            <li>
              <strong>tls.certFilename</strong>: Certificate filename. No
              defaults.
            </li>
            <li>
              <strong>tls.certKeyFilename</strong>: Certificate key filename. No
              defaults.
            </li>
            <li>
              <strong>tls.certCAFilename</strong>: CA Certificate filename. No
              defaults.
            </li>
          </ul>
          <br />
          <p className="text-lg">
            First, create the secret with the certificates files:
          </p>
          <CodeRenderer
            value={
              "kubectl create secret generic certificates-tls-secret --from-file=./cert.pem --from-file=./cert.key --from-file=./ca.pem"
            }
          />
          <p className="text-lg">Then, update the parameters in values.yaml:</p>
          <CodeRenderer
            language="yaml"
            value={`...
tls:
  enabled: true
  existingSecret: "certificates-tls-secret"
  certFilename: "cert.pem"
  certKeyFilename: "cert.key"
  certCAFilename: "ca.pem"
...          `}
          />

          <p className="text-lg">Applying the config</p>
          <CodeRenderer
            value={
              "helm upgrade -f values.yaml redis oci://registry-1.docker.io/bitnamicharts/redis-cluster"
            }
          />
        </Accordion>
      </div>
    </>
  );
};

export default RedisDoc;
