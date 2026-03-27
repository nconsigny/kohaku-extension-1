// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config')

const config = getDefaultConfig(__dirname)

config.transformer.assetPlugins = ['expo-asset/tools/hashAssetFiles']

// Exclude WASM files from Metro's file map (they're handled by webpack)
config.resolver.blockList = [/\.wasm$/]

module.exports = config
