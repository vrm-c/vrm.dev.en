# VRM Animation

## What is "VRM Animation" ?

VRM Animation is a format for describing animations of humanoid models defined in VRM.

- **The same VRM animation file can be used for any VRM file.**
- The format is described in **glTF**, and is a **cross-platform** format.
- **Standard implementation for importing and exporting VRM animations in Unity** is provided through UniVRM.

## The contents of the file

- Animation is described as **glTF animation**.
- **Information that associates each component of VRM with the animated glTF node** is defined in the extension.
  - It is defined in the extension `VRMC_vrm_animation`.
  - It is recommended to use the extension `.vrma`.
- 🦴 **Humanoid bone animation** can be described.
  - The extension specifies which Humanoid bone a glTF node corresponds to.
  - The implementation will transform the rotation of the animation to the destination VRM to apply the animation properly.
- 😄 **Expression animation** can be described.
  - The file contains the animated weight of an expression as a coordinate of a glTF node.
  - In addition to the preset expressions defined in VRM, it also supports custom expressions if the destination VRM has corresponding expressions.
- 👀 **Gaze control animation** can be described.
  - The extension specifies the glTF node that represents the direction of the gaze.

## Uses of VRM Animation

With VRM Animation, **you can use animations for humanoid models across applications and models.**

Following are some examples of how VRM Animation can be used:

- Create animations using authoring tools that support VRM Animation
- Use animations recorded with motion capture in various applications
- Use animations created with VRM Animation in live streaming and photo applications
- Take animations created with VRM Animation to the Metaverse and play, share with other users, and use together
- Load VRM Animation files in game engines and use them in game development

## Applications that support VRM Animation

[showcase](/showcase/?flags=2)

:::warning

Thanks to the community, many applications have cooperated in supporting the draft specification of VRM Animation. The VRM Animation specification has just been officially released. If you use an application that supports the draft version, the behavior may differ from the official version, or it may not work as expected.

:::

:::info

If you would like to add your application to this list, please send to

[GitHub issues](https://github.com/vrm-c/vrm.dev/issues) or
[GitHub Pull Request](https://github.com/vrm-c/vrm.dev/pulls)

Name and Url is required.

:::

- [UniVRM](https://github.com/vrm-c/UniVRM)
- [@pixiv/three-vrm](https://github.com/pixiv/three-vrm)
- [VRM Add-on for Blender](https://vrm-addon-for-blender.info/)
- [bvh2vrma](https://vrm-c.github.io/bvh2vrma/)
- [VRoid Hub](https://hub.vroid.com/)
- [AnimationClipToVrmaSample](https://github.com/malaybaku/AnimationClipToVrmaSample)
- [VMagicMirror](https://malaybaku.github.io/VMagicMirror/)
- [VRM Posing Desktop](https://store.steampowered.com/app/1895630/VRM_Posing_Desktop/)
- [VRM スプリングボーン調整ツール](https://napharmonia.com/vrmtool/)
- [VRMA, BVH をアップロードして VRM を動かすやつ](https://tfuru.github.io/vrma-loader-sample/)
- [VRMポーズファイラー](https://hub.vroid.com/apps/y213JgHLrqgiMUYriWnssR9iOIvoEAQOPOLedBvcmbA)

## Development of applications using VRM Animation

VRM-1.0 に、VRM-Animation サポートが実装されています。

## 仕様

https://github.com/vrm-c/vrm-specification/tree/master/specification/VRMC_vrm_animation-1.0

![img](../api/humanoid/ControlRig.png)

:::tip 正規化さていないスケルトン/モーションを変換できます。

[ControlRig](/api/humanoid/Vrm10RuntimeControlRig/)

:::
