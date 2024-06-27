/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `baidu-ocr` command */
  export type BaiduOcr = ExtensionPreferences & {
  /** Baidu OCR API Key - API Key is used to authenticate with Baidu OCR */
  "BaiduOCRAppKey": string,
  /** Baidu OCR Secret Key - API Key is used to authenticate with Baidu OCR */
  "BaiduOCRSecretKey": string
}
}

declare namespace Arguments {
  /** Arguments passed to the `baidu-ocr` command */
  export type BaiduOcr = {}
}


