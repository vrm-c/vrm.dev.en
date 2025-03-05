# CustomMaterial の作り方

## ShaderGraph で TinyPbr を作成

`v0.128.2` [VRM10Viewer Sample](/api/sample/vrm10/VRM10Viewer/) にて PBR と MToon1.0 のカスタムシェーダーを提供予定です。

応急処置のため Sample に入れて 正式サポート外としております。
PBR はそれなりに、MToon は簡易なものになります。

機能が不足する場合に改造や自作できるように、 `ShaderGraph Shader` の作成と、Vrm10Importer でカスタムのシェーダーをロードするための `IMaterialDescriptorGenerator` の作成方法を説明します。

## Shader 関連の命名ガイドライン

シェーダーを中心に複数の関連ファイルを管理するので、一貫した命名にすると便利です。

TinyPbr と名付けた例。

| type                         | name                          |
| ---------------------------- | ----------------------------- |
| shader                       | TinyPbr                       |
| 補助クラス                   | TinyPbrContext.cs             |
| IMaterialDescriptorGenerator | TinyPbrDescriptorGenerator.cs |

## ShaderGraph で Shader を作成

![make shader graph asset](./create_shader_graph_menu.jpg)

`URP - Lit Shader Graph` で作成しました。

![color texure](./sg_first.jpg)

### TextureNode

最低限で動作を確認するために color texture だけを作成ます。

- BaseColor に `Sample Texture 2D` を接続
- `Sample Texture 2D` に `Texture2D Asset` を接続
- `Texture2D Asset` を convert to property
- Name `BaseMap` (TinyPbrMaterialContext.BaseMap と同じ)
- check `Use Tiling and Offsset`
- check `Exposed`

![texture node settings](./texture_node_settings.jpg)

- TextureProperty に MainTexture Flag

![MainTexture Flag](./set_as_main_texture.jpg)

## IMaterialDescriptorGenerator を作成する

<details>
  <summary>TinyPbrDescriptorGenerator.cs</summary>
  <p>

```cs
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using UniGLTF;
using UnityEngine;

namespace UniVRM10.VRM10Viewer
{
    /// <summary>
    /// GLTF の MaterialImporter
    /// </summary>
    public sealed class TinyPbrDescriptorGenerator : IMaterialDescriptorGenerator
    {
        public UrpGltfPbrMaterialImporter PbrMaterialImporter { get; } = new();
        public UrpGltfDefaultMaterialImporter DefaultMaterialImporter { get; } = new();

        public Material Material { get; set; }

        public TinyPbrDescriptorGenerator(Material material)
        {
            Material = material;
        }

        public MaterialDescriptor Get(GltfData data, int i)
        {
            if (TryCreateParam(data, i, out param)) return param;

            // NOTE: Fallback to default material
            if (Symbols.VRM_DEVELOP)
            {
                Debug.LogWarning($"material: {i} out of range. fallback");
            }
            return GetGltfDefault(GltfMaterialImportUtils.ImportMaterialName(i, null));
        }

        public MaterialDescriptor GetGltfDefault(string materialName = null) => DefaultMaterialImporter.CreateParam(materialName);

        public bool TryCreateParam(GltfData data, int i, out MaterialDescriptor matDesc)
        {
            if (i < 0 || i >= data.GLTF.materials.Count)
            {
                matDesc = default;
                return false;
            }

            var src = data.GLTF.materials[i];
            matDesc = new MaterialDescriptor(
                GltfMaterialImportUtils.ImportMaterialName(i, src),
                Material.shader,
                null,
                new Dictionary<string, TextureDescriptor>(),
                new Dictionary<string, float>(),
                new Dictionary<string, Color>(),
                new Dictionary<string, Vector4>(),
                new List<Action<Material>>(),
                new[] { (MaterialDescriptor.MaterialGenerateAsyncFunc)AsyncAction }
            );
            return true;

            Task AsyncAction(Material x, GetTextureAsyncFunc y, IAwaitCaller z) => GenerateMaterialAsync(data, src, x, y, z);
        }

        public static async Task GenerateMaterialAsync(GltfData data, glTFMaterial src, Material dst, GetTextureAsyncFunc getTextureAsync, IAwaitCaller awaitCaller)
        {
            var context = new TinyPbrContext(dst);

            if (src is { pbrMetallicRoughness: { baseColorTexture: { index: >= 0 } } })
            {
                if (GltfPbrTextureImporter.TryBaseColorTexture(data, src, out _, out var desc))
                {
                    context.BaseTexture = await getTextureAsync(desc, awaitCaller);
                    context.BaseTextureOffset = desc.Offset;
                    context.BaseTextureScale = desc.Scale;
                }
            }
        }
    }
}
```

以下の部分が GltfData から ColorTexture を供給します。

```cs
        public static async Task GenerateMaterialAsync(GltfData data, glTFMaterial src, Material dst, GetTextureAsyncFunc getTextureAsync, IAwaitCaller awaitCaller)
        {
            var context = new TinyPbrContext(dst);

            if (src is { pbrMetallicRoughness: { baseColorTexture: { index: >= 0 } } })
            {
                if (GltfPbrTextureImporter.TryBaseColorTexture(data, src, out _, out var desc))
                {
                    context.BaseTexture = await getTextureAsync(desc, awaitCaller);
                    context.BaseTextureOffset = desc.Offset;
                    context.BaseTextureScale = desc.Scale;
                }
            }
        }
```

  </p>
</details>

<details>
  <summary>TinyPbrMaterialContext.cs</summary>
  <p>

```cs
using UnityEngine;

namespace UniVRM10.VRM10Viewer
{
    public class TinyPbrContext
    {
        private static readonly int BaseMap = Shader.PropertyToID("_BaseMap");
        public readonly Material Material;

        public Texture BaseTexture
        {
            get => Material.GetTexture(BaseMap);
            set => Material.SetTexture(BaseMap, value);
        }

        public Vector2 BaseTextureOffset
        {
            get => Material.GetTextureOffset(BaseMap);
            set => Material.SetTextureOffset(BaseMap, value);
        }

        public Vector2 BaseTextureScale
        {
            get => Material.GetTextureScale(BaseMap);
            set => Material.SetTextureScale(BaseMap, value);
        }

        public TinyPbrContext(Material material)
        {
            Material = material;
        }
    }
}
```

  </p>
</details>

## TinyPbrDescriptorGenerator を使って vrm をロードする。

```cs
Material shader_graph_material;
var vrm = await Vrm10.LoadPathAsync(vrm_path, IMaterialDescriptorGenerator: new TinyPbrDescriptorGenerator(shader_graph_material));
```
