import React from "react";
import Header from "../Components/Header";
import Accordion from "../Components/Accordion";
import DocLink from "../Components/DocLink";

const KVMDoc = () => {
  return (
    <>
      <Header />
      <div className="mt-8 mx-24">
        <h1 className="text-4xl font-bold mb-4">
          Kernel-based Virutal Machine (KVM)
        </h1>
        <p className="text-xl font-semibold mb-8">
          Kernel-based Virtual Machine (KVM) is an open source virtualization
          technology built into Linux®. Specifically, KVM lets you turn Linux
          into a hypervisor that allows a host machine to run multiple, isolated
          virtual environments called guests or virtual machines (VMs). KVM is
          part of Linux.
        </p>
        <Accordion heading={"Provision single VM"}>
          <DocLink link="https://github.com/akarX23/intel-scripts/blob/master/vm-provisioning/prov_vm.sh" />
        </Accordion>
        <Accordion heading={"Provision multiple VMs"}>
          <DocLink link="https://github.com/akarX23/intel-scripts/blob/master/vm-provisioning/multi_prov_vms.sh" />
        </Accordion>
        <Accordion heading={"Attach extra storage in multiple VMs"}>
          <DocLink link="https://github.com/akarX23/intel-scripts/blob/master/vm-provisioning/attach_storage.sh" />
        </Accordion>
        <Accordion heading={"Extend existing storage"}>
          <DocLink link="https://github.com/akarX23/intel-scripts/blob/master/vm-provisioning/extend_storage.sh" />
        </Accordion>
        <Accordion
          heading={"Setup VMs with special softwares based on flags provided"}
        >
          <DocLink
            link={
              "https://github.com/akarX23/intel-scripts/blob/master/vm-provisioning/extend_storage.sh"
            }
          />
        </Accordion>
      </div>
    </>
  );
};

export default KVMDoc;
