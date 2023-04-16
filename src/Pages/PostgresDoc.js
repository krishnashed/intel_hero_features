import React from "react";
import Header from "../Components/Header";
import Accordion from "../Components/Accordion";
import CodeRenderer from "../Components/CodeRenderer";

const PostgresDoc = () => {
  return (
    <>
      <Header />
      <div className="mt-8 mx-24">
        <h1 className="text-4xl font-bold mb-4">Postgres on Kubernetes </h1>
        <p className="text-xl font-semibold mb-8">
          In this guide we will go through the setup and usage of Postgres on
          K8s using PGO, the Postgres Operator by Crunchy Data. It is a highly
          customizable operator with a features like backup and disaster
          recovery built into it.
        </p>
        <Accordion heading={"Installing the Operator"}>
          <p className="text-lg">Clone their GitHub repo:</p>
          <CodeRenderer
            value={`git clone https://github.com/CrunchyData/postgres-operator-examples pgo
cd pgo`}
          />
          <p className="text-lg">Make a custom-values.yaml file:</p>
          <CodeRenderer
            language="yaml"
            value={`
resources:
  controller:
    limits:
      memory: 12Gi
      cpu: 8000m
    requests:
      memory: 8Gi
      cpu: 4000m
  upgrade: {}`}
          />
          <p className="text-lg">Install the operator using helm:</p>
          <CodeRenderer
            value={`helm install pgo --create-namespace --namespace postgres helm/install`}
          />
        </Accordion>
        <Accordion heading={"Configuring a Cluster"}>
          <p className="text-lg">
            A PostgresCluster using the operator looks like this:
          </p>
          <CodeRenderer
            language="yaml"
            value={`
apiVersion: postgres-operator.crunchydata.com/v1beta1
kind: PostgresCluster
metadata:
  name: hippo
spec:
  image: registry.developers.crunchydata.com/crunchydata/crunchy-postgres:ubi8-14.7-0
  postgresVersion: 14
  instances:
    - name: instance1
      dataVolumeClaimSpec:
        accessModes:
        - "ReadWriteOnce"
        resources:
          requests:
            storage: 1Gi
  backups:
    pgbackrest:
      image: registry.developers.crunchydata.com/crunchydata/crunchy-pgbackrest:ubi8-2.41-4
      repos:
      - name: repo1
        volume:
          volumeClaimSpec:
            accessModes:
            - "ReadWriteOnce"
            resources:
              requests:
                storage: 1Gi
          `}
          />
        </Accordion>
        <Accordion heading={"Connect to a cluster"}>
          <p className="text-lg">
            The connection information like user, password, host and port is
            stored in a secret which has the format of{" "}
            <b>{"<cluster-name>-pguser-<username>"}</b>. The default user that
            is created is same as the cluster name, in our case hippo. So the
            secret is hippo-pguser-hippo. You can access the secret with:
          </p>
          <CodeRenderer
            value={" kubectl describe -n postgres secret hippo-pguser-hippo"}
          />
        </Accordion>
        <Accordion heading={"Setup HA Cluster"}>
          PGO protects our cluster from downtime in case anything goes wrong by
          having multiple instances of a postgres instance. There are two ways
          an HA cluster can be set up:
          <ul>
            <li>Increase the spec.instances.replicas value</li>
            <li>Adding another instance to spec.instances</li>
          </ul>
          <p>
            This will setup multiple postgres pods that will elect 1 master
            amongst themselves and if the master goes down, a pod will be
            assigned master immediately and PGO will bring up the other pod.
          </p>
        </Accordion>
        <Accordion heading={"TLS/SSL Configuration"}>
          <p className="text-lg">
            By default PGO will use TLS for all internal communication. It
            generates its own TLS keys and certificates which it stores as
            secrets. We can use our own certificates and keys as well using the
            spec.customTLSSecret. We need to make a secret first where we put
            our certificates and key.
          </p>
        </Accordion>
      </div>
    </>
  );
};

export default PostgresDoc;
