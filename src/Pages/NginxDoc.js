import React from "react";
import Accordion from "../Components/Accordion";
import Header from "../Components/Header";
import CodeRenderer from "../Components/CodeRenderer";

const NginxDoc = () => {
  return (
    <>
      <Header />
      <div className="mt-8 mx-24">
        <h1 className="text-4xl font-bold mb-4">
          K8 Cluster behind an HA-Proxy and NGINX Ingress Controller
        </h1>
        <p className="text-xl font-semibold mb-8">
          Developing a Highly Available Kubernetes Cluster is a big requirements
          for things to work smoothly. In this guide we will discuss how does HA
          Proxy and NGINX Ingress Controller help us in developing a highly
          available K8 cluster.
        </p>
        <Accordion heading={"Install HA Proxy on Server"}>
          <p className="text-lg">
            SSH into the server reserved for HA Proxy. First you need to install
            haproxy on the server.
          </p>
          <CodeRenderer
            language="bash"
            value={`# Ubuntu
sudo apt install haproxy -y

# Cent OS
 yum install haproxy`}
          />
          <p className="text-lg">
            Create a file <b>haproxy.cfg</b> at /etc/haproxy/haproxy.cfg and put
            the following in it:
          </p>
          <CodeRenderer
            value={`global
          log /dev/log  local0 warning
          chroot      /var/lib/haproxy
          pidfile     /var/run/haproxy.pid
          maxconn     4000
          user        haproxy
          group       haproxy
          daemon
      
         stats socket /var/lib/haproxy/stats
      
      defaults
        log global
        option  httplog
        option  dontlognull
              timeout connect 5000
              timeout client 50000
              timeout server 50000
      
      
      frontend k8_api
          bind *:6443
          option tcplog
          mode tcp
          default_backend k8s_api_server
      
      backend k8s_api_server
          mode tcp
          option tcp-check
          balance roundrobin
          option forwardfor
          http-send-name-header Host
          default-server inter 10s downinter 5s rise 2 fall 2 slowstart 60s maxconn 250 maxqueue 256 weight 100
          server server1 <master-ip1>:6443 check
          server server2 <master-ip2>:6443 check
          server server3 <master-ip3>:6443 check`}
          />
          <p>Enable HA Proxy</p>
          <CodeRenderer
            value={`systemctl start haproxy
systemctl enable haproxy`}
          />
        </Accordion>
        <Accordion heading={"Install NGINX Ingress Controller"}>
          <p className="text-lg">Add the NGINX Ingress helm repo</p>
          <CodeRenderer
            value={`helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx`}
          />
          <p className="Install the Controller">Install the Controller</p>
          <CodeRenderer
            value={`helm install nginx-ingress ingress-nginx/ingress-nginx --create-namespace --namespace nginx-ingress -f custom-values.yaml`}
          />
        </Accordion>
        <Accordion heading="Configure">
          <p className="text-lg">
            The NGINX controller can be configured using the{" "}
            <b>custom values.yaml</b> file. The contents we use are:
          </p>
          <CodeRenderer
            language="yaml"
            value={`
## To have short names
fullNameOverride: nginx-controller
nameOverride: nginx-ingress

controller:
  name: controller
  containerName: controller-container

  watchIngressWithoutClass: false

  ingressClassResource:
    name: nginx-ingress
    enabled: true
    default: true
    controllerValue: "k8s.io/ingress-nginx"

  ingressClass: nginx-ingress
  service:
    type: NodePort
    nodePorts:
      http: 32080
      https: 32443
      tcp:
        8080: 32808
          `}
          />
        </Accordion>
        <Accordion heading="Security with TLS">
          <p className="text-lg">
            Security can be configured using the <b>spec.tls</b> key of ingress.
            An example of secured Ingress:
          </p>
          <CodeRenderer
            language="yaml"
            value={`
          apiVersion: networking.k8s.io/v1
          kind: Ingress
          metadata:
            name: prometheus-ingress
            namespace: monitoring
          spec:
            # tls:
            #   - hosts:
            #       - prometheus.dashboard
            #       - grafana.dashboard
            #     secretName: tls-secret
            ingressClassName: nginx-ingress
            rules:
              - host: prometheus.dashboard
                http:
                  paths:
                    - path: /
                      pathType: Prefix
                      backend:
                        service:
                          name: prom-prometheus
                          port:
                            number: 9090
              - host: grafana.dashboard
                http:
                  paths:
                    - path: /
                      pathType: Prefix
                      backend:
                        service:
                          name: monitoring-op-grafana
                          port:
                            number: 80
          `}
          />
        </Accordion>
      </div>
    </>
  );
};

export default NginxDoc;
