# 二流名言 · 2ndmaxim

制作歌词和金句海报，支持红黑照片底绿字、浅绿织纹底红字两种版本。输出 PNG、可编辑 HTML 和排版参数 JSON。

这是当前确认版的私有技能仓库。完整工作流和排版规则见 [SKILL.md](SKILL.md)，配置说明见 [references/unified.md](references/unified.md)。

## 安装

需要 Node.js 与 npm，以及此私有仓库的访问权限。在目标项目根目录执行：

```sh
mkdir -p .agents/skills
git clone https://github.com/superyellancholy-png/2ndmaxim.git .agents/skills/2ndmaxim
cd .agents/skills/2ndmaxim
npm ci
```

在 Codex 中调用 `$2ndmaxim`。先选择版本，再确认正文断行、以粗体标出的放大词以及来源；确认后才生成图片。

## 渲染已确认配置

从技能目录执行：

```sh
node scripts/render-poster.cjs /path/to/config.json /path/to/任务名称/成品
```

将示意路径替换为实际路径。配置中的照片和自定义字体路径相对于配置文件解析。两种版本均使用同一渲染入口，浅绿版无需照片。配置 `outputName` 可在一个任务目录中区分多张海报，不为每张图片建文件夹。

## 当前关键规则

- 两版正文和强调字字距统一为 −45 px，强调字号为普通字的 1.55 倍。
- 行距依据小字的视觉节奏，大字局部协调；不能因一行大字拉大所有行距。
- 换行不等于断句，不为行尾额外添加逗号；不规定每行字数相同。
- 可以调整换行，让相关放大词集中并位于各自行首，这是可选方案。
- 歌词来源分两行：作者《作品名称》；作词：姓名　作曲：姓名。
- 名言来源分两行：作者；查证的媒介与具体作品标题。

以上为索引，完整规则以 SKILL.md 为准。

## 文件与素材

`scripts/` 为渲染脚本，`assets/` 为字体、底纹与 Logo，`references/` 为排版说明和参考图，`agents/` 为技能展示配置。

原始分卷、压缩包、PSD、历史海报和本机依赖不进入本仓库。素材使用说明见 [NOTICE.md](NOTICE.md)。
