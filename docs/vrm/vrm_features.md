# Features and contents of VRM

Previously, when trying to handle **characters or humanoid avatars (3D models)** in VR (Virtual Reality) or VTubers, it was necessary to develop and fine-tune a unique system for each application and each 3D model data.

Because…

- Depending on the creator who created the 3D model and the modeling tool used, the "method" varies, and the state of the data varies from one to another.
  - Coordinate system (Y-UP, Z-UP, right-handed, left-handed)
  - Scale units(metric, cm)
  - Initial Pose (T-Pose, A-Pose, Z+ Orientation, Z- Orientation)
  - Expression method (Morph, Bone, TextureUV, identification (naming) method, granularity (emotion, anger, sadness, happiness, deformation of facial parts (left corner of mouth))
  - Bone structure (how bones are identified (named), parents and children, rigs)
- Formats for handling 3D model data are overly complicated or lack necessary information.
  - Although many software programs support FBX files, some applications can read them, while others cannot. I'm sure many people have wondered which application and which version of the FBX was used to export the file.
  - Although game engines can import assets, they often do not anticipate runtime loading.
  - Textures and materials are in separate files. Absolute paths are written. It is in a zip file. Character code and folder structure.
- When looking at 3D model data from the perspective of "using it as an avatar," the necessary information is not available.
  - What is the exact position of the HMD on the avatar to achieve a first-person perspective?
  - When hiding an avatar's head from a first-person perspective, what exactly do you want to hide?

As avatar expression in VR is rapidly gaining popularity, if this situation continues, it will result in application developers and 3D model creators having to do double or triple work.
To improve this situation, we narrowed our focus to "**humanoid** characters and avatars" and standardized the differences in model data, creating a format that can be loaded at runtime and used immediately in a single file.

:::info
"VRM" proposes a **platform-independent 3D avatar file format**.
:::

### portability

- Everything, including textures and materials, is in one file for easy runtime loading.

### Standardize model information

- VRM can include not only the title and author name, but also thumbnails and **avatar-specific license information in line with the VR era**. ➡️ [Meta](/vrm/vrm_meta)

### Standardizing Motion

- VRM defines a humanoid and can play motions such as motion capture.

:::info
➡️ Related to this is [VRM Animation](/vrma).
:::

:::info VRM needs to be T-Pose
In vrm-0.x it was required to be **normalized to T-Pose**.
In vrm-1.0 the restrictions were relaxed and the only requirement was that it be in a T-Pose.
:::

### Standardize facial expressions

- VRM defines standard facial operations such as "joy, anger, sadness, happiness," "blinking," and "a-i-u-e-o," allowing you to do the following:
  - Select facial expression by user operation
  - Generate lip sync from audio
  - Random blink
  - Assign Facial Capture
  - ➡️ [BlendShape](/univrm/blendshape/univrm_blendshape)

:::info
In vrm-1.0, surprise has been added to the emotions of joy, anger, sadness, and happiness.
:::

### Standardize eye gaze control

- VRM supports three types of gaze control:
  - ➡️ [Bone](/univrm/lookat/lookat_bone)
  - ➡️ [BlendShape](/univrm/lookat/lookat_blendshape)
  - ➡️ [TextureUV](/univrm/lookat/lookat_uv)

### Standardizing Materials

- VRM supports three types of materials (shaders).
  - ➡️  [PBR](/univrm/shaders/univrm_standard) (glTF)
  - ➡️  [Unlit](/univrm/shaders/univrm_unlit) (glTF)
  - ➡️  [MToon](/univrm/shaders/shader_mtoon)

### Standardize automatic elements such as swings

- VRM has a standard implementation of "moving objects" for things like character hair that does not rely on a physics engine.
  - ➡️ [SpringBone](/univrm/springbone/univrm_secondary)

:::info
In vrm-1.0, constraint was added.
:::

### Standardize your VR setup

- VRM contains **"Information for Reproducing First-Person Perspectives"** for use with avatars in VR.
  - ➡️ [FirstPerson](/univrm/firstperson/univrm_firstperson)

:::info
In vrm0.x, the gaze reference position and the HMD were separate.
In vrm-1.0, the gaze reference point and HMD position are shared (the exact position of the HMD cannot be determined)
:::
