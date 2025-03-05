# Features and contents of VRM

Previously, when trying to handle **characters or humanoid avatars (3D models)** in VR (Virtual Reality) or VTubers, it was necessary to develop and fine-tune a unique system for each application and each 3D model data.

- Formats for handling 3D model data are overly complicated or lack necessary information.
  - Anything can be stored and we need to examine the contents.
  - From the perspective of "using it as an avatar," necessary information is lacking.
- Although game engines can import assets, they often do not anticipate runtime loading.

:::note
FBX files are compatible with many software programs, but some files can be read and some cannot. It was necessary to pay attention to which application and which version of the FBX file was output.
:::

As avatar expression in VR is rapidly gaining popularity, if this situation continues, it will result in application developers and 3D model creators having to do double or triple work.
To improve this situation, we narrowed our focus to "**humanoid** characters and avatars" and standardized the differences in model data, creating a format that can be loaded at runtime and used immediately in a single file.

:::info "VRM" proposes a **platform-independent 3D avatar file format**.
:::

### Portability

- ❗ Textures and materials are in separate files, and absolute paths are included.
- ❗ It is in zip format. Character code and folder structure.
- ✅ Everything, including textures and materials, is in one file for easy runtime loading.

### Standardize model information

- ✅ VRM can include not only the title and author name, but also thumbnails and **avatar-specific license information in line with the VR era**. ➡️ [Meta](/vrm/vrm_meta)

## Standardize the coordinate system

Depending on the creator who created the 3D model and the modeling tool used, the "method" varies, and the state of the data varies from one to another.

- ❗ Coordinate system (right-handed system, left-handed system, Z-UP, Y-UP etc)
- ❗ Scaling units (m, mm, cm, inch etc)
- ✅ Right-handed Y-UP
- ✅ Metric units

:::info It complies with the glTF specification.
[3.4. Coordinate System and Units](https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#coordinate-system-and-units)
:::

## Standardize model operations

VRM allows you to control three things: pose, facial expression, and gaze direction.

:::info
➡️ Related to this is [VRM Animation](/vrma).
It can store three things: pose, facial expression, and gaze.
:::

### Standardizing motion operations

- ❗ How to insert various bones (how to identify (name) bones, parent-child, rig)
- ❗ Various initial poses (A-Pose, T-Pose, Z-Facing, Z+Facing)
- ✅ VRM defines a humanoid and can play motions such as motion capture.
- ✅ T-Pose Z+ orientation

In order to standardize motions, it is necessary to standardize the skeleton to a certain extent as well.
The specifications are based on the standard humanoid bone configuration and initial pose T-Pose.

:::info vrm-1.0 update
vrm-0.x was Z-oriented so that right was +X.
The specifications have been changed in vrm-1.0 to make it Z+ oriented.

In vrm-0.x it was required to be **normalized to T-Pose**.
In vrm-1.0, the restrictions have been relaxed and T-Pose is now a required condition.
:::

### Standardize facial expression operations

- ❗ Expression method (Morph, Bone, TextureUV, identification (naming) method, granularity (emotion, anger, sadness, happiness, deformation of facial parts (left corner of mouth))
- ✅ VRM defines standard facial operations such as "joy, anger, sadness, happiness," "blinking," and "a-i-u-e-o," allowing you to do the following:
  - Select facial expression by user operation
  - Generate lip sync from audio
  - Random blink
  - Assign Facial Capture
  - ➡️ [BlendShape](/univrm/blendshape/univrm_blendshape)

:::info vrm-1.0 update
In vrm-1.0, surprise has been added to the emotions of joy, anger, sadness, and happiness.
:::

### Standardize eye gaze operations

- ✅ VRM supports three types of gaze control:
  - ➡️ [Bone](/univrm/lookat/lookat_bone)
  - ➡️ [BlendShape](/univrm/lookat/lookat_blendshape)
  - ➡️ [TextureUV](/univrm/lookat/lookat_uv)

## Standardizing Materials

- ✅ VRM supports three types of materials (shaders).
  - ➡️ [PBR](/univrm/shaders/univrm_standard) (glTF)
  - ➡️ [Unlit](/univrm/shaders/univrm_unlit) (glTF)
  - ➡️ [MToon](/univrm/shaders/shader_mtoon)

## Standardize automatic elements such as swings

- ✅ VRM has a standard implementation of "moving objects" for things like character hair that does not rely on a physics engine.
  - ➡️ [SpringBone](/univrm/springbone/univrm_secondary)

:::info vrm-1.0 update
In vrm-1.0, constraint was added.
:::

### Standardize VR setup

- ❗ What is the exact position of the HMD on the avatar to achieve a first-person perspective?
- ❗ I want to hide the avatar's head from the first person view. What exactly should I hide?
- ✅ VRM contains **"Information for Reproducing First-Person Perspectives"** for use with avatars in VR.
  - ➡️ [FirstPerson](/univrm/firstperson/univrm_firstperson)

:::info vrm-1.0 update
In vrm0.x, the gaze reference position and the HMD were separate.
In vrm-1.0, the gaze reference point and HMD position are shared (the exact position of the HMD cannot be determined)
:::
