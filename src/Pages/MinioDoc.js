import React from "react";
import Header from "../Components/Header";
import Accordion from "../Components/Accordion";
import CodeRenderer from "../Components/CodeRenderer";

const MinioDoc = () => {
  return (
    <>
      <Header />
      <div className="mt-8 mx-24">
        <h1 className="text-4xl font-bold mb-4">
          Minio Multi Node Multi Drive deployment on Kubernetes
        </h1>
        <p className="text-xl font-semibold mb-8">
          MinIO is a High Performance Object Storage released under GNU AGPL
          v3.0. It is API compatible with the Amazon S3 cloud storage service.
          It can handle unstructured data such as photos, videos, log files,
          backups, and container images with a current maximum supported object
          size of 5TB.
        </p>
        <Accordion
          heading={
            "Install MinIO Kubernetes Plugin (using Krew Plugin Manager)"
          }
        >
          <p className="text-lg">
            Krew is a <strong>kubectl</strong> plugin manager developed by the
            Kubernetes SIG CLI group. Make sure you have <strong>krew</strong>{" "}
            installed, if not install it using:
          </p>
          <p className="text-lg">
            Run this command to download and install <strong>krew</strong>:
          </p>
          <CodeRenderer
            value={`(
  set -x; cd "$(mktemp -d)" &&
  OS="$(uname | tr '[:upper:]' '[:lower:]')" &&
  ARCH="$(uname -m | sed -e 's/x86_64/amd64/' -e 's/\\(arm\\)\\(64\\)\\?.*/\\1\\2/' -e 's/aarch64$/arm64/')" &&
  KREW="krew-\${OS}_\${ARCH}" &&
  curl -fsSLO "https://github.com/kubernetes-sigs/krew/releases/latest/download/\${KREW}.tar.gz" &&
  tar zxvf "\${KREW}.tar.gz" &&
  ./"\${KREW}" install krew
)
`}
          />

          <p className="text-lg">
            Add the <strong>$HOME/.krew/bin</strong> directory to your PATH
            environment variable. To do this, update your{" "}
            <strong>.bashrc</strong> or <strong>.zshrc</strong> file and append
            the following line:
          </p>

          <CodeRenderer
            value={`export PATH="\${KREW_ROOT:-$HOME/.krew}/bin:$PATH"`}
          />

          <p className="text-lg">
            Run <strong>kubectl krew</strong> to check the installation.
          </p>
          <p className="text-lg">
            Use Krew to install the MinIO kubectl plugin using the following
            commands:
          </p>

          <CodeRenderer
            value={`kubectl krew update
kubectl krew install minio`}
          />

          <p className="text-lg">
            If you want to update the MinIO plugin with Krew, use the following
            command:
          </p>

          <CodeRenderer value={`kubectl krew upgrade minio`} />

          <p className="text-lg">
            You can validate the installation of the MinIO plugin using the
            following command:
          </p>

          <CodeRenderer value={`kubectl minio version`} />
        </Accordion>
        <Accordion heading={"Initialize the MinIO Kubernetes Operator"}>
          <p className="text-lg">
            The MinIO Kubernetes Operator supports deploying MinIO Tenants onto
            private and public cloud infrastructures (“Hybrid” Cloud).
          </p>
          <br />
          <p className="text-lg">
            Run the following command to initialize the MinIO Operator:
          </p>
          <CodeRenderer value={`kubectl minio init`} />
          <br />
          <p className="text-lg">Access the Operator Console</p>
          <p className="text-lg">
            Run the <strong>kubectl minio proxy</strong> command to temporarily
            forward traffic from the MinIO Operator Console service to your
            local machine.
          </p>{" "}
          <br />
          <p className="text-lg">
            The JWT Token will be required to login into the Minio Operator
            Console. It need not be stored or remembered, as we can run{" "}
            <strong>kubectl minio proxy</strong> command every time we need to
            login into Minio Operator Console, and enter the newly created JWT
            Token each time.
          </p>{" "}
          <br />
          <p className="text-lg">
            As <strong>kubectl minio proxy</strong> temporarily forward traffic
            from the MinIO Operator Console service to your local machine, We
            can't rely on this for frequent usage, We can deploy a NodePort
            Service to expose the port.
          </p>
          <CodeRenderer
            language="yaml"
            value={`# console-np.yaml
apiVersion: v1
kind: Service
metadata:
  labels:
    name: console-np
    app.kubernetes.io/instance: minio-operator
    app.kubernetes.io/name: operator
  name: console-np
  namespace: minio-operator
spec:
  type: NodePort
  ports:
    - name: http
      protocol: TCP
      port: 9090
      nodePort: 30000
  selector:
    app: console`}
          />
          <p>
            Apply the config, after which we will be able to access Minio
            Operator Console at <strong>http://localhost:30000</strong>
          </p>{" "}
        </Accordion>

        <Accordion heading={"Deploying Minio Tenants"}>
          <p className="text-lg">
            The MinIO Kubernetes Operator supports deploying and managing MinIO
            Tenants onto your Kubernetes cluster through either the Operator
            Console web interface or the MinIO Kubernetes Plugin.
          </p>

          <br />
          <p className="text-lg">
            Lets look at the resources at hand, I have a 3 master, 4 worker node
            k8s cluster, which has 4 Persistent Volumes of 10GB each in each of
            the worker nodes. I plan to deploy 2 tenants, each with 2 servers
            (nodes), 8 volumes in total (which mean all of the volumes in 2
            nodes), with total size of 60GB and{" "}
            <strong>longhorn (default)</strong> as our storage class.
          </p>
          <br />
          <p className="text-lg">
            Now you might ask, why didn't I use complete 80GB instead of just
            using 60GB ?
          </p>
          <p className="text-lg">
            When DirectPV formats a drive, its total usable size reduces, and
            some size if occupied by filesytem metadata, inodes, etc. which is
            normal for xfs file system.
          </p>

          <p className="text-lg">Creating a Minio Tenant</p>
          <CodeRenderer
            value={`kubectl minio tenant create minio-tenant-1 --servers 2 --volumes 8 --capacity 60Gi --namespace minio-tenant-1-namespace --enable-prometheus=false --enable-audit-logs=false --disable-tls --storage-class directpv-min-io -n minio-tenant-1-namespace --create-namespace`}
          />

          <p className="text-lg">Learn about more parameters which can be passed to create a Minio Tenant <a href='https://min.io/docs/minio/kubernetes/upstream/operations/install-deploy-manage/deploy-minio-tenant.html#determine-values-for-required-settings'>here</a></p>
        
        <p>While deploying the Minio Tenant through CLI, you will get credentials to access the Tenant Console, such as :</p>

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

export default MinioDoc;
