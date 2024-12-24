import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

# 注意

- type: "category" の label に関し。このファイルは翻訳の都合上英語で書いてください

 */
const sidebars: SidebarsConfig = {
  vrmSidebar: [
    {
      type: "category",
      label: "about vrm",
      items: [
        { type: "doc", id: "vrm/vrm_about" },
        {
          type: "category",
          label: "how to make VRM",
          link: { type: "doc", id: "vrm/how_to_make_vrm/index" },
          items: [
            { type: "doc", id: "vrm/how_to_make_vrm/setup_unity" },
            {
              type: "doc",
              id: "vrm/how_to_make_vrm/convert_from_humanoid_model",
            },
            { type: "doc", id: "vrm/how_to_make_vrm/setup_vrm" },
            {
              type: "doc",
              id: "vrm/how_to_make_vrm/vrm_behavior_confirmation",
            },
          ],
        },
        { type: "doc", id: "vrm/how_to_view_vrm" },
        { type: "doc", id: "vrm/vrm_meta" },
        { type: "doc", id: "vrm/vrm_development" },
        {
          type: "category",
          label: "Vrm-1.0",
          items: [
            "vrm1/index",
            "vrm1/changed",
            "vrm1/gltf_details",
            "vrm1/meta",
            "vrm1/humanoid",
            "vrm1/expression",
            "vrm1/lookat_firstperson",
            {
              type: "category",
              label: "VRMC_springBone",
              link: { type: "doc", id: "vrm1/springbone/index" },
              items: [
                "vrm1/springbone/extended_collider",
              ],
            },
            "vrm1/emission",
            "vrm1/mtoon",
            "vrm1/constraint",
          ]
        },
        {
          type: "category",
          label: "VRM Animation",
          link: { type: "doc", id: "vrma/index" },
          items: [
            "vrma/univrm-vrma/vrma-import",
            "vrma/univrm-vrma/vrma-export",
            "vrma/univrm-vrma/retarget",
            "vrma/animation",
          ],
        },
      ],
    },
  ],
  univrmSidebar: [
    {
      type: "category",
      label: "UniVRM",
      link: { type: "doc", id: "univrm/index" },
      items: [
        {
          type: "category",
          label: "Install",
          link: { type: "doc", id: "univrm/install/index" },
          items: [
            { type: "doc", id: "univrm/install/unity_version" },
            { type: "doc", id: "univrm/install/univrm_install" },
            { type: "doc", id: "univrm/install/univrm_uninstall" },
          ],
        },
        {
          type: "category",
          label: "Export",
          items: [
            { type: "doc", id: "univrm/export/univrm_export" },
            { type: "doc", id: "univrm/export/vrm_size" },
          ],
        },
        {
          type: "category",
          label: "Import",
          items: [
            { type: "doc", id: "univrm/import/univrm_import" },
            { type: "doc", id: "univrm/import/prefab_importer_behaviour" },
          ],
        },
        {
          type: "category",
          label: "BlendShape",
          items: [
            { type: "doc", id: "univrm/blendshape/univrm_blendshape" },
            { type: "doc", id: "univrm/blendshape/blendshape_setup" },
            { type: "doc", id: "univrm/blendshape/univrm_bake_blendshape" },
            { type: "doc", id: "univrm/blendshape/check_blendshape_normal" },
          ],
        },
        {
          type: "category",
          label: "Material",
          link: { type: "doc", id: "univrm/shaders/index" },
          items: [
            { type: "doc", id: "univrm/shaders/univrm_unlit" },
            { type: "doc", id: "univrm/shaders/univrm_standard" },
            { type: "doc", id: "univrm/shaders/shader_mtoon" },
          ],
        },
        {
          type: "category",
          label: "LookAt",
          items: [
            { type: "doc", id: "univrm/lookat/univrm_lookat" },
            { type: "doc", id: "univrm/lookat/lookat_bone" },
            { type: "doc", id: "univrm/lookat/lookat_blendshape" },
            { type: "doc", id: "univrm/lookat/lookat_uv" },
          ],
        },
        {
          type: "category",
          label: "SpringBone",
          items: [{ type: "doc", id: "univrm/springbone/univrm_secondary" }],
        },
        {
          type: "category",
          label: "Humanoid",
          items: [
            { type: "doc", id: "univrm/humanoid/humanoid_overview" },
            { type: "doc", id: "univrm/humanoid/base_model" },
            { type: "doc", id: "univrm/humanoid/meshutility_humanoid" },
            { type: "autogenerated", dirName: "unihumanoid" },
          ],
        },
        {
          type: "category",
          label: "Meta",
          items: [{ type: "doc", id: "univrm/meta/univrm_meta" }],
        },
        {
          type: "category",
          label: "FirstPerson",
          items: [{ type: "doc", id: "univrm/firstperson/univrm_firstperson" }],
        },
        {
          type: "category",
          label: "Programming",
          link: { type: "doc", id: "univrm/programming/index" },
          items: [],
        },
      ],
    },
  ],
  errorSidebar: [
    {
      type: "category",
      label: "Error",
      link: { type: "doc", id: "univrm/error/index" },
      items: [
        {
          type: "category",
          label: "Export",
          items: [
            "univrm/error/0_115_0_BlendshapeCollapse",
            "univrm/error/0_124_0_NoBoneWeight",
            "univrm/error/0_124_1_AvatarBuilderDupBone",
            "univrm/error/0_124_1_NullReferenceExceptionMeshAttachInfo",
            "univrm/error/0_123_0_NullMaterial",
          ],
        },
        {
          type: "category",
          label: "SpringBone",
          items: [
            "univrm/error/0_123_0_CapsuleCollider",
          ]
        },
        "univrm/error/0_100_1_multiple_scripted_importers",
        "univrm/error/0_124_2_could_not_include",
        "univrm/error/skinnedmeshrenderer_rootbone",
        "univrm/error/cs1061",
        //
        "univrm/error/report_error",
      ],
    },
  ],
  vrm1Sidebar: [
    {
      type: "category",
      label: "UniVRM-1.0",
      link: { type: "doc", id: "univrm1/index" },
      items: [
        "univrm1/install",
        {
          type: "category",
          label: "Material",
          link: { type: "doc", id: "univrm1/material/index" },
          items: [
          ]
        },
        {
          type: "category",
          label: "make VRM-1.0",
          link: { type: "doc", id: "univrm1/vrm1_tutorial/index" },
          items: [
            {
              type: "doc",
              id: "univrm1/vrm1_tutorial/first_export_from_fbx",
            },
            { type: "doc", id: "univrm1/vrm1_tutorial/vrm_object" },
            { type: "doc", id: "univrm1/vrm1_tutorial/meta" },
            { type: "doc", id: "univrm1/vrm1_tutorial/expression" },
            { type: "doc", id: "univrm1/vrm1_tutorial/lookat" },
            { type: "doc", id: "univrm1/vrm1_tutorial/firstperson" },
            {
              type: "category",
              label: "SpringBone の設定",
              link: { type: "doc", id: "univrm1/vrm1_tutorial/springbone/index" },
              items: [
                "univrm1/vrm1_tutorial/springbone/center",
              ],
            },
            { type: "doc", id: "univrm1/vrm1_tutorial/material" },
            { type: "doc", id: "univrm1/vrm1_tutorial/constraint" },
          ],
        },
        {
          type: "category",
          label: "migrate to VRM-1.0 from VRM-0.x",
          link: { type: "doc", id: "univrm1/migrate_vrm0/index" },
          items: [
            { type: "doc", id: "univrm1/migrate_vrm0/feature" },
            { type: "doc", id: "univrm1/migrate_vrm0/migrate_editor" },
          ],
        },
      ],
    },
  ],

  apiSidebar: [
    {
      type: "category",
      label: "UniVRM API",
      link: { type: "doc", id: "api/index" },
      items: [
        { type: "doc", id: "api/api_update" },
        {
          type: "category",
          label: "Project",
          items: [
            { type: "doc", id: "api/project/packages" },
            { type: "doc", label: "IncludeShaders", id: "api/project/include_shaders" },
          ],
        },
        {
          type: "category",
          label: "Sample",
          link: { type: "doc", id: "api/sample/index" },
          items: [
            "api/sample/sample_install",
            {
              type: "category",
              label: "vrm-1.0",
              items: [
                "api/sample/vrm10/VRM10Viewer",
                "api/sample/vrm10/VRM10RuntimeExporterSample",
                "api/sample/vrm10/VRM10FirstPersonSample",
                "api/sample/vrm10/SimpleVrma",
                "api/sample/vrm10/ClothSample",
              ],
            },
            {
              type: "category",
              label: "vrm-0.x",
              items: [
                "api/sample/vrm0x/SimpleViewer",
                "api/sample/vrm0x/RuntimeExporterSample",
                "api/sample/vrm0x/FirstPersonSample",
                "api/sample/vrm0x/AnimationBridgeSample",
              ],
            },
            ,
          ],
        },
        {
          type: "category",
          label: "RuntimeImport",
          link: { type: "doc", id: "api/runtime-import/index" },
          items: [
            {
              type: "category",
              label: "Basic",
              items: [
                { type: "doc", label: "vrm-1.0", id: "api/runtime-import/UniVRM10_Vrm10" },
                { type: "doc", label: "vrm-0.x", id: "api/runtime-import/VRM_VrmUtility" },
                { type: "doc", label: "glTF", id: "api/runtime-import/UniGLTF_GltfUtility" },
              ],
            },
            {
              type: "category",
              label: "Advanced",
              items: [
                "api/runtime-import/UniGLTF_IAwaitCaller",
                "api/runtime-import/UniGLTF_GltfData",
                "api/runtime-import/VRM_VRMData",
              ],
            },
            {
              type: "category",
              label: "Instance",
              items: [
                "api/runtime-import/UniGLTF_RuntimeGltfInstance",
                "api/runtime-import/UniVRM10_Vrm10Instance",
                "api/runtime-import/UniVRM10_Vrm10Runtime",
                "api/runtime-import/VRM_BlendShapeProxy",
              ],
            },
            ,
          ],
        },
        {
          type: "category",
          label: "Material/Texture",
          items: [
            "api/material/urp",
            "api/runtime-import/import_basisu",
            "api/material/0_96_1_use_gamma_colorspace",
            "api/material/0_76_texture_deserializer",
            "api/material/texture_manipulation",
            "api/material/transparent_zwrite",
            "gltf/emission_glow",
          ],
        },
        {
          type: "category",
          label: "FirstPerson",
          items: [
            "api/firstperson/first_person",
            "api/firstperson/vrm1_firstperson",
            "api/firstperson/firstperson",],
        },
        {
          type: "category",
          label: "SpringBone",
          items: [
            {
              type: "category",
              label: "vrm-1.0",
              link: { type: "doc", id: "api/springbone/vrm1/index" },
              items: [
                "api/springbone/vrm1/IVrm10SpringBoneRuntime",
                { type: "doc", label: "ExtendedCollider", id: "api/springbone/vrm1/VRMC_springBone_extended_collider" },
              ]
            },
            {
              type: "category",
              label: "vrm-0.x",
              link: { type: "doc", id: "api/springbone/vrm0/index" },
              items: [
                "api/springbone/vrm0/VRM_VRMSpringBone",
                "api/springbone/vrm0/VRM_IVrm0XSpringBoneRuntime",
                "api/springbone/vrm0/jobs",
              ]
            },
          ],
        },
        {
          type: "category",
          label: "Humanoid",
          link: { type: "doc", id: "api/humanoid/index" },
          items: [
            "api/humanoid/humanoid_animation",
            "vrma/univrm-vrma/retarget",
            "api/humanoid/vrm1_controlrig",
          ],
        },
        {
          type: "category",
          label: "glTF",
          items: [
            "gltf/glb_import",
            "gltf/glb_export",
            "gltf/animation_exporter",
            "gltf/root_node",
            "api/gltf/0_36_update",
            "api/gltf/format",
            "api/gltf/how_to_impl_extension",
            "api/coordinate",
          ],
        },
        {
          type: "category",
          label: "Others",
          items: [
            "gltf/mesh_utility",
            "api/mesh/bake",
            'api/editor-import/vrm0x',
            "api/editor-import/scripted_importer",
          ]
        },
      ],
    },
  ],
  releaseSidebar: [
    {
      type: "category",
      label: "ReleaseNote",
      link: { type: "doc", id: "release/index" },
      items: [
        {
          type: "category",
          label: "~v0.55(Unity-5.6)",
          items: [{ type: "autogenerated", dirName: "release/055" }],
        },
        {
          type: "category",
          label: "v0.56(Unity2018.4)~",
          items: [{ type: "autogenerated", dirName: "release/056" }],
        },
        {
          type: "category",
          label: "v0.68(Unity2018.4)~",
          items: [{ type: "autogenerated", dirName: "release/068" }],
        },
        {
          type: "category",
          label: "v0.75(Unity2019.4)~",
          items: [{ type: "autogenerated", dirName: "release/079" }],
        },
        {
          type: "category",
          label: "v0.100(Unity2020.3)~",
          items: [{ type: "autogenerated", dirName: "release/100" }],
        },
        {
          type: "category",
          label: "v0.112(Unity2021.3)~",
          items: [{ type: "autogenerated", dirName: "release/112" }],
        },
        {
          type: "category",
          label: "v0.128(Unity2022.3)~",
          items: [{ type: "autogenerated", dirName: "release/128" }],
        },
        { type: "doc", id: "release/how_to_release" },
        { type: "doc", id: "release/how_to_translation" },
      ],
    },
  ],
};

export default sidebars;
