import { useIsFocused } from '@react-navigation/native'
import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Camera, useCameraDevices } from 'react-native-vision-camera'

function CameraScreen () {
  const isFocused = useIsFocused()
  const devices = useCameraDevices()
  const device = devices.back
  console.log(devices)

  useEffect(() => {
    const requestPermissions = async () => {
      const newCameraPermission = await Camera.requestCameraPermission()
      const newMicrophonePermission = await Camera.requestMicrophonePermission()
      console.log(newCameraPermission)
      console.log(newMicrophonePermission)
    }
    requestPermissions()
  }, [])

  if (device == null) {
    return (
      <View>
        <Text>Camera</Text>
      </View>
    )
  } else {
    return (
      isFocused && <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive
                   />
    )
  }
}

export default CameraScreen
