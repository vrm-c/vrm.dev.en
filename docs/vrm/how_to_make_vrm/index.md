---
url: "/how_to_make_vrm/"
weight: 2
aliases: ["/docs/univrm/univrm_workflow/"]
---

# How to make VRM file

We use [UniVRM](https://github.com/vrm-c/UniVRM) to make VRM files. The workflow of making a VRM file is summarized as follows:

* Import a 3D model into a Unity project and set up its materials, etc. Make a T-Pose for the model and enable the model normalization, and then export the 3D model as VRM in Unity

* Import the VRM file into the Unity project and customize settings such as [license](/univrm/meta/univrm_meta), [spring bone](/univrm/springbone/univrm_secondary), [expression](/univrm/blendshape/univrm_blendshape) [eyelook](/univrm/lookat/univrm_lookat) [first-person](/univrm/firstperson/univrm_firstperson). To make sure customized settings (e.g. facial expression) are working, check your model in play mode

* Export the 3D model as VRM again. Setup completed

The environment Setup for UniVRM is in Section `0`.The detailed walkthrough is presented in the Section `1` and `2`. The last Section is about VRM model testings such as eye movement and expression.

![VRMファイルを作るワークフロー](/images/vrm/VRM_changeVRM_jp.png)

**Workflow for making VRM files**

