import fs from 'fs'
import { FilePaths } from '../shardeum/shardeumFlags';

export let operatorCLIVersion = ''
export let operatorGUIVersion = ''

export function readOperatorVersions(): { operatorCLIVersion: string; operatorGUIVersion: string } {
  // Read the operator version from the CLI
  try {
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    const operatorCLIPackageJson = JSON.parse(fs.readFileSync(FilePaths.CLI_PACKAGE).toString())
    operatorCLIVersion = operatorCLIPackageJson.version
  } catch (e) {
    operatorCLIVersion = ''
  }

  // Read the operator version from the GUI
  try {
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    const operatorGUIPackageJson = JSON.parse(fs.readFileSync(FilePaths.GUI_PACKAGE).toString())
    operatorGUIVersion = operatorGUIPackageJson.version
  } catch (e) {
    operatorGUIVersion = ''
  }

  return { operatorCLIVersion, operatorGUIVersion }
}
