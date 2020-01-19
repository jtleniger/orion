import { CameraControl } from '../../lib/camera-control'

export default function () {
  return {
    connected: false,
    shutterSpeed: 0,
    camera: new CameraControl(),
    error: ''
  }
}
